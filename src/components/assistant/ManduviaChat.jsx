import { useState, useEffect } from 'react'
import { ChatKit, useChatKit } from '@openai/chatkit-react'
import { Sparkle } from 'lucide-react'
import './ManduviaChat.css'

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

  // Aplicar estilos CSS personalizados após o ChatKit ser renderizado
  useEffect(() => {
    const applyCustomStyles = () => {
      // Buscar containers do ChatKit com múltiplos seletores
      const chatContainers = [
        document.querySelector('[data-chatkit-start-screen]'),
        document.querySelector('.chatkit-start-screen'),
        document.querySelector('[data-testid*="start-screen"]'),
        document.querySelector('[class*="start-screen"]'),
        document.querySelector('[class*="chatkit"]')
      ].filter(Boolean)

      chatContainers.forEach(chatContainer => {
        // Buscar containers de prompts com múltiplos seletores
        const promptsContainers = [
          chatContainer.querySelector('div[role="group"]'),
          chatContainer.querySelector('.chatkit-start-screen-prompts'),
          chatContainer.querySelector('[data-testid*="prompt"]'),
          chatContainer.querySelector('[class*="prompt"]'),
          Array.from(chatContainer.children).find(child => 
            child.querySelector('button') || child.querySelector('[role="button"]')
          )
        ].filter(Boolean)

        promptsContainers.forEach(promptsContainer => {
          if (promptsContainer) {
            // Adicionar classe CSS
            promptsContainer.classList.add('chatkit-start-screen-prompts')
            
            // Forçar estilos inline para garantir grid layout
            promptsContainer.style.display = 'grid'
            promptsContainer.style.gridTemplateColumns = '1fr 1fr'
            promptsContainer.style.gap = '8px'
            promptsContainer.style.width = '100%'
            promptsContainer.style.marginTop = '12px'
            
            // Aplicar estilos aos botões
            const buttons = promptsContainer.querySelectorAll('button, [role="button"]')
            buttons.forEach((button, index) => {
              // Forçar estilos inline
              button.style.display = 'block'
              button.style.width = '100%'
              button.style.margin = '0'
              button.style.padding = '12px 16px'
              button.style.borderRadius = '12px'
              button.style.border = '1px solid #e5e7eb'
              button.style.background = '#ffffff'
              button.style.color = '#374151'
              button.style.fontSize = '14px'
              button.style.fontWeight = '500'
              button.style.textAlign = 'center'
              button.style.cursor = 'pointer'
              button.style.transition = 'all 0.2s ease'
              button.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
              
              // Adicionar atributo para identificação
              button.setAttribute('data-custom-button', 'true')
            })

            // Aplicar estilos a qualquer elemento filho que possa ser um botão
            const allChildren = promptsContainer.querySelectorAll('*')
            allChildren.forEach(child => {
              if (child.tagName === 'BUTTON' || child.getAttribute('role') === 'button') {
                child.style.display = 'block'
                child.style.width = '100%'
                child.style.margin = '0'
              }
            })
          }
        })
      })

      // Buscar e aplicar estilos a qualquer container de prompts no documento
      const allPromptContainers = document.querySelectorAll(
        'div[role="group"], [data-testid*="prompt"], [class*="prompt"]'
      )
      
      allPromptContainers.forEach(container => {
        if (container.querySelector('button, [role="button"]')) {
          container.style.display = 'grid'
          container.style.gridTemplateColumns = '1fr 1fr'
          container.style.gap = '8px'
          container.style.width = '100%'
          container.classList.add('chatkit-start-screen-prompts')
        }
      })
    }

    // Aplicar estilos imediatamente
    applyCustomStyles()

    // Aplicar estilos com múltiplos delays para garantir renderização
    const timeouts = [
      setTimeout(applyCustomStyles, 500),
      setTimeout(applyCustomStyles, 1000),
      setTimeout(applyCustomStyles, 2000),
      setTimeout(applyCustomStyles, 3000)
    ]

    // Observer mais agressivo para detectar mudanças no DOM
    const observer = new MutationObserver((mutations) => {
      let shouldApply = false
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              if (node.querySelector && (
                node.querySelector('button') || 
                node.querySelector('[role="button"]') ||
                node.classList?.contains('chatkit') ||
                node.getAttribute?.('data-chatkit-start-screen')
              )) {
                shouldApply = true
              }
            }
          })
        }
      })
      
      if (shouldApply) {
        setTimeout(applyCustomStyles, 100)
      }
    })

    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'data-testid']
    })

    return () => {
      timeouts.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [status])

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
      prompts: [
        {
          label: 'Cursos',
          prompt: 'Quero conhecer os cursos disponíveis'
        },
        {
          label: 'Eventos',
          prompt: 'Quero saber sobre os eventos do Instituto Manduvi'
        },
        {
          label: 'Iniciativas & Projetos',
          prompt: 'Quero conhecer as iniciativas e projetos do Instituto'
        },
        {
          label: 'Sobre o Instituto',
          prompt: 'Quero saber mais sobre o Instituto Manduvi'
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
