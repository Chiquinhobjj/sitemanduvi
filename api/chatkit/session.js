export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const workflowId = process.env.OPENAI_CHATKIT_WORKFLOW_ID || 'wf_68e6a6d819d88190aee60893b4b8ef660de2547f19c73575'
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
