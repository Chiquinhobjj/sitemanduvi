import { useState } from 'react'
import { ChatKit, useChatKit } from '@openai/chatkit-react'
import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'

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
    theme: {
      radius: 'round',
      color: {
        accent: {
          primary: '#0D9488',
          level: 3,
        },
      },
    },
    composer: {
      placeholder: 'Escreva sua pergunta para o ManduvIA',
    },
    startScreen: {
      greeting: 'Como posso ajudar você hoje?',
      prompts: [
        { label: 'Conhecer iniciativas', prompt: 'Quais são as iniciativas?' },
        { label: 'Participar como beneficiário', prompt: 'Como posso participar?' },
        { label: 'Apoiar financeiramente', prompt: 'Como posso doar?' },
        { label: 'Solicitar acolhimento', prompt: 'Como solicitar acolhimento?' },
      ],
    },
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
      <div className="bg-white/95 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[28px] overflow-hidden">
        <div className="px-5 sm:px-7 pt-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-foreground/90"
          >
            O que podemos fazer por você, hoje?
          </motion.h3>
          <p className="mt-2 text-sm text-foreground/60">
            Nosso agente ManduvIA está pronto para direcionar você para iniciativas, matrículas e
            apoios.
          </p>
        </div>

        <div className="px-4 sm:px-6 pb-6 pt-4">
          {status !== 'ready' && !errorMessage && (
            <div className="flex items-center gap-2 rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm text-foreground/70">
              <Sparkle className="h-4 w-4 animate-pulse text-primary" />
              {status === 'refreshing'
                ? 'Atualizando sua sessão...'
                : 'Conectando com o ManduvIA...'}
            </div>
          )}

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
            <ChatKit control={control} className="mt-4 h-[440px] w-full" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ManduviaChat
