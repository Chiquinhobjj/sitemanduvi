import { useState } from 'react'
import { ChatKit, useChatKit } from '@openai/chatkit-react'

const DEVICE_STORAGE_KEY = 'manduvia-chat-device-id'

const resolveDeviceId = () => {
  if (typeof window === 'undefined') {
    return 'anonymous'
  }

  try {
    const existing = window.localStorage.getItem(DEVICE_STORAGE_KEY)
    if (existing) {
      return existing
    }

    const generated = crypto.randomUUID()
    window.localStorage.setItem(DEVICE_STORAGE_KEY, generated)
    return generated
  } catch (error) {
    console.warn('Não foi possível persistir o identificador do dispositivo', error)
    return 'anonymous'
  }
}

const ManduviaChat = () => {
  const [status, setStatus] = useState('booting')
  const [errorMessage, setErrorMessage] = useState(null)
  const [deviceId] = useState(resolveDeviceId)

  const { control, fetchUpdates } = useChatKit({
    api: {
      async getClientSecret(existing) {
        setErrorMessage(null)
        setStatus(existing ? 'refreshing' : 'booting')

        try {
          const response = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deviceId }),
          })

          const payload = await response.json().catch(() => null)

          if (!response.ok || !payload?.client_secret) {
            const message =
              payload?.error ?? 'Não foi possível iniciar uma sessão com o ManduvIA agora.'
            throw new Error(message)
          }

          setStatus('ready')
          return payload.client_secret
        } catch (error) {
          setStatus('error')
          setErrorMessage(
            error?.message ?? 'Falha ao conectar com o agente. Tente novamente em instantes.'
          )
          throw error
        }
      },
    },
    // Use default ChatKit UI without custom theme/start screen to keep it minimal
    onError: (detail) => {
      const message =
        typeof detail === 'string'
          ? detail
          : detail?.message ?? 'Ocorreu um erro durante a conversa.'
      setStatus('error')
      setErrorMessage(message)
    },
  })

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      {errorMessage ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
          <button
            type="button"
            className="ml-3 text-primary underline"
            onClick={() => {
              setErrorMessage(null)
              setStatus('booting')
              fetchUpdates?.()
            }}
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <ChatKit control={control} className="h-[440px] w-full" />
      )}
    </div>
  )
}

export default ManduviaChat
