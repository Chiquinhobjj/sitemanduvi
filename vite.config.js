import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { jsxLocPlugin } from '@builder.io/vite-plugin-jsx-loc'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const chatkitSessionPlugin = () => ({
  name: 'chatkit-session-endpoint',
  configureServer(server) {
    server.middlewares.use('/api/chatkit/session', (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405
        res.setHeader('Allow', 'POST')
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Method Not Allowed' }))
        return
      }

      const workflowId =
        process.env.OPENAI_CHATKIT_WORKFLOW_ID ??
        'wf_68e6a6d819d88190aee60893b4b8ef660de2547f19c73575'
      const apiKey = process.env.OPENAI_API_KEY

      if (!workflowId) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Missing workflow id' }))
        return
      }

      if (!apiKey) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Missing OPENAI_API_KEY environment variable' }))
        return
      }

      const chunks = []
      let finished = false

      req.on('data', (chunk) => {
        if (finished) return
        chunks.push(chunk)
      })

      req.on('error', (error) => {
        console.error('Erro ao receber corpo da requisição do ChatKit', error)
        if (finished) return
        finished = true
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Corpo da requisição inválido' }))
      })

      req.on('end', async () => {
        if (finished) return
        finished = true
        try {
          const rawBody = Buffer.concat(chunks).toString('utf-8') || '{}'
          const payload = JSON.parse(rawBody)
          const deviceId = payload?.deviceId ?? 'anonymous'

          const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
              'OpenAI-Beta': 'chatkit_beta=v1',
            },
            body: JSON.stringify({
              workflow: { id: workflowId },
              user: deviceId,
            }),
          })

          const data = await response.json()
          res.statusCode = response.status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        } catch (error) {
          console.error('Failed to create ChatKit session', error)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Failed to create ChatKit session' }))
        }
      })
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin(), chatkitSessionPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5175,
    strictPort: true,
  },
})
