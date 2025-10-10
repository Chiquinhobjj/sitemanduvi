export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const workflowId = 'wf_68e7f0e0f918819099b3578d9c9108bb0ab6dcf1de6f1b58' // Workflow ID correto
  const apiKey = process.env.OPENAI_API_KEY

  if (!workflowId) {
    res.status(500).json({ error: 'Missing workflow id' })
    return
  }

  if (!apiKey) {
    res.status(500).json({ error: 'Missing OPENAI_API_KEY environment variable' })
    return
  }

  try {
    const { deviceId = 'anonymous' } = req.body

    const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'OpenAI-Beta': 'chatkit_beta=v1',
      },
      body: JSON.stringify({
        workflow: { id: workflowId },
        user: deviceId,
      }),
    })

    const data = await response.json()
    res.status(response.status).json(data)
  } catch (error) {
    console.error('Failed to create ChatKit session', error)
    res.status(500).json({ error: 'Failed to create ChatKit session' })
  }
}
