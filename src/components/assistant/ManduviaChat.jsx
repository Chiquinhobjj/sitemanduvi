import { useState, useEffect } from 'react'
import { ChatKit } from '@openai/chatkit-react'
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
  const [clientSecret, setClientSecret] = useState(null)

  // Configuração do ChatKit seguindo documentação oficial
  const options = {
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
          setClientSecret(payload.client_secret)
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
      density: 'spacious',
      color: {
        grayscale: {
          hue: 0,
          tint: 0
        },
        accent: {
          primary: '#603813',
          level: 1
        },
        surface: {
          background: '#ffffff',
          foreground: '#ffffff'
        }
      },
      typography: {
        baseSize: 14,
        fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
        fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
        fontSources: [
          {
            family: 'OpenAI Sans',
            src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
            weight: 400,
            style: 'normal',
            display: 'swap'
          }
        ]
      }
    },
    composer: {
      placeholder: 'Dê-me uma missão...',
      attachments: {
        enabled: true,
        maxCount: 5,
        maxSize: 10485760
      },
      tools: [
        {
          id: 'search_docs',
          label: 'Search docs',
          shortLabel: 'Docs',
          placeholderOverride: 'Search documentation',
          icon: 'book-open',
          pinned: false
        }
      ],
      models: [
        {
          id: 'crisp',
          label: 'Crisp',
          description: 'Concise and factual'
        }
      ]
    },
    startScreen: {
      greeting: 'Olá! Sou a MirIA, Anfitriã do Manduvi. Como posso te ajudar hoje?',
      prompts: []
    },
    onError: (detail) => {
      const message =
        typeof detail === 'string'
          ? detail
          : detail?.message ?? 'Ocorreu um erro ao acessar a base de conhecimento. Tente novamente.'
      setStatus('error')
      setErrorMessage(message)
    },
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
      <div className="bg-white/95 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden">
        <div className="px-2 sm:px-3 md:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-1 sm:pt-2">
          {/* Status de carregamento */}
          {status !== 'ready' && !errorMessage && (
            <div className="flex items-center gap-2 rounded-xl sm:rounded-2xl border border-primary/10 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground/70">
              <Sparkle className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse text-primary" />
              <span className="truncate">
                {status === 'refreshing'
                  ? 'Atualizando base de conhecimento...'
                  : 'Conectando com a MirIA especialista...'}
              </span>
            </div>
          )}

          {/* Mensagem de erro */}
          {errorMessage && (
            <div className="rounded-xl sm:rounded-2xl border border-red-200 bg-red-50 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-red-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="flex-1">{errorMessage}</span>
                <button
                  type="button"
                  className="text-primary underline text-xs sm:text-sm font-medium hover:text-primary/80 transition-colors"
                  onClick={() => {
                    setErrorMessage(null)
                    setStatus('booting')
                    setClientSecret(null)
                  }}
                >
                  Tentar novamente
                </button>
              </div>
            </div>
          )}

          {/* ChatKit - abordagem direta seguindo documentação oficial */}
          <ChatKit 
            options={options}
            className="w-full" 
          />
        </div>
      </div>
    </div>
  )
}

export default ManduviaChat
