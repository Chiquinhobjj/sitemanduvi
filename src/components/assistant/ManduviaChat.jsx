import { useState } from 'react'
import { ChatKit, useChatKit } from '@openai/chatkit-react'
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
  const [deviceId] = useState(() => resolveDeviceId())

  const { control, fetchUpdates } = useChatKit({
    api: {
      async getClientSecret(existing) {
        console.log('🔄 ChatKit: Iniciando getClientSecret', { existing, deviceId })
        setErrorMessage(null)
        setStatus(existing ? 'refreshing' : 'booting')

        try {
          console.log('📡 ChatKit: Fazendo requisição para /api/chatkit/session')
          const response = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deviceId }),
          })

          console.log('📡 ChatKit: Resposta recebida', { status: response.status, ok: response.ok })
          const payload = await response.json().catch(() => null)
          console.log('📡 ChatKit: Payload parseado', { hasClientSecret: !!payload?.client_secret })

          if (!response.ok || !payload?.client_secret) {
            const message =
              payload?.error ?? 'Não foi possível iniciar uma sessão com o MirIA agora.'
            console.error('❌ ChatKit: Erro na sessão', { message, payload })
            throw new Error(message)
          }

          console.log('✅ ChatKit: Sessão criada com sucesso')
          setStatus('ready')
          return payload.client_secret
        } catch (error) {
          console.error('❌ ChatKit: Erro geral', error)
          setStatus('error')
          setErrorMessage(
            error?.message ?? 'Falha ao conectar com o agente. Tente novamente em instantes.'
          )
          throw error
        }
      },
    },
    theme: {
      colorScheme: 'light',
      radius: 'round',
      density: 'compact',
      color: {
        grayscale: { hue: 0, tint: 0 },
        accent: { primary: '#603813', level: 1 },
      },
      typography: {
        baseSize: 15,
        fontFamily:
          '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
        fontFamilyMono:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
        fontSources: [
          {
            family: 'OpenAI Sans',
            src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    composer: {
      placeholder: 'Dê-me uma missão...',
      attachments: { enabled: false },
    },
    startScreen: {
      greeting:
        'Olá! Sou a MirIA, anfitriã do Manduvi. Respondo rápido e te levo ao que você busca. Por onde começamos?',
      widgets: [
        {
          type: 'row',
          children: [
            {
              type: 'button',
              label: 'Cursos EAD',
              prompt: 'Quero conhecer os cursos EAD disponíveis'
            },
            {
              type: 'button',
              label: 'Eventos',
              prompt: 'Quero saber sobre os eventos do Instituto Manduvi'
            }
          ]
        },
        {
          type: 'row',
          children: [
            {
              type: 'button',
              label: 'Iniciativas & Projetos',
              prompt: 'Quero conhecer as iniciativas e projetos do Instituto'
            },
            {
              type: 'button',
              label: 'Sobre o Instituto',
              prompt: 'Quero saber mais sobre o Instituto Manduvi'
            }
          ]
        }
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
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
      <div className="bg-white/95 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden">
        <div className="px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
          {status !== 'ready' && !errorMessage && (
            <div className="flex items-center gap-2 rounded-xl sm:rounded-2xl border border-primary/10 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground/70">
              <Sparkle className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse text-primary" />
              <span className="truncate">
                {status === 'refreshing'
                  ? 'Atualizando sua sessão...'
                  : 'Conectando com a MirIA...'}
              </span>
            </div>
          )}

          {errorMessage ? (
            <div className="rounded-xl sm:rounded-2xl border border-red-200 bg-red-50 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-red-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="flex-1">{errorMessage}</span>
                <button
                  type="button"
                  className="text-primary underline text-xs sm:text-sm font-medium hover:text-primary/80 transition-colors"
                  onClick={async () => {
                    setErrorMessage(null)
                    setStatus('booting')
                    try {
                      await fetchUpdates?.()
                    } catch (error) {
                      console.error('Erro ao tentar reconectar:', error)
                      setStatus('error')
                      setErrorMessage('Falha ao reconectar. Tente novamente.')
                    }
                  }}
                >
                  Tentar novamente
                </button>
              </div>
            </div>
              ) : (
                <ChatKit 
                  control={control} 
                  className="mt-3 sm:mt-4 h-[240px] sm:h-[280px] lg:h-[320px] min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] w-full" 
                />
              )}
        </div>
      </div>
    </div>
  )
}

export default ManduviaChat
