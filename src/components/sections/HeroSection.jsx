import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { ChatKit, useChatKit } from '@openai/chatkit-react'
import { useState, useEffect, useRef } from 'react'
import { Sparkle, ArrowDown } from 'lucide-react'
import './HeroSection.css'

const HeroSection = () => {
  // ChatKit state
  const [status, setStatus] = useState('booting')
  const [errorMessage, setErrorMessage] = useState(null)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const chatContainerRef = useRef(null)

  // Timeout para evitar carregamento infinito
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (status === 'booting') {
        console.warn('⚠️ ChatKit: Timeout - forçando status para error')
        setStatus('error')
        setErrorMessage('Timeout ao conectar com o chat. Tente recarregar a página.')
      }
    }, 15000) // 15 segundos

    return () => clearTimeout(timeout)
  }, [status])

  // ChatKit configuration com workflow personalizado
  const { control, fetchUpdates } = useChatKit({
    api: {
      async getClientSecret() {
        console.log('🚀 ChatKit: Iniciando criação de sessão...')
        try {
          const response = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ deviceId: crypto.randomUUID() })
          })

          console.log('📡 ChatKit: Resposta recebida', { 
            status: response.status, 
            ok: response.ok
          })
          
          const payload = await response.json()
          console.log('📡 ChatKit: Payload parseado', { 
            hasClientSecret: !!payload?.client_secret
          })

          if (!response.ok || !payload?.client_secret) {
            throw new Error(payload?.error ?? 'Erro ao criar sessão')
          }

          console.log('✅ ChatKit: Sessão criada!')
          return payload.client_secret
        } catch (error) {
          console.error('❌ ChatKit: Erro', error)
          setStatus('error')
          setErrorMessage('Erro ao conectar. Tente novamente.')
          throw error
        }
      },
    },
    theme: {
      colorScheme: 'light',
      radius: 'round',
      density: 'spacious',
      color: {
        grayscale: { hue: 0, tint: 0 },
        accent: { primary: '#603813', level: 1 },
        surface: {
          background: '#ffffff',
          foreground: '#ffffff',
        },
      },
      typography: {
        baseSize: 14,
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
      attachments: {
        enabled: true,
        maxCount: 5,
        maxSize: 10_485_760,
      },
      tools: [
        {
          id: 'search_docs',
          label: 'Search docs',
          shortLabel: 'Docs',
          placeholderOverride: 'Search documentation',
          icon: 'book-open',
          pinned: false,
        },
      ],
      models: [
        {
          id: 'crisp',
          label: 'Crisp',
          description: 'Concise and factual',
        },
      ],
    },
    startScreen: {
      greeting: 'Olá! Sou a MirIA, Anfitriã do Manduvi. Como posso te ajudar hoje?',
      prompts: [],
    },
    onError: (detail) => {
      console.error('❌ ChatKit: Erro no widget', detail)
      setStatus('error')
      setErrorMessage('Ocorreu um erro ao acessar a base de conhecimento. Tente novamente.')
    },
    onStatusChange: (newStatus) => {
      console.log('📡 ChatKit: Status mudou', newStatus)
      setStatus(newStatus)
      if (newStatus === 'ready') {
        setErrorMessage(null)
        console.log('✅ ChatKit: Widget pronto!')
      } else if (newStatus === 'error') {
        console.error('❌ ChatKit: Widget com erro')
        setErrorMessage('Erro ao carregar o chat. Tente recarregar a página.')
      }
    },
  })

  // Scroll functions
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  // Auto-scroll effect
  useEffect(() => {
    if (status === 'ready' && chatContainerRef.current) {
      const container = chatContainerRef.current
      const observer = new MutationObserver(() => {
        if (container.scrollHeight > container.clientHeight) {
          const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10
          if (isAtBottom) {
            scrollToBottom()
          }
        }
      })
      
      observer.observe(container, { childList: true, subtree: true })
      return () => observer.disconnect()
    }
  }, [status])

  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 30
        setShowScrollButton(!isAtBottom && scrollHeight > clientHeight)
      }
    }

    const container = chatContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [status])

  const palette = {
    primary: { bg: 'rgba(242, 139, 48, 0.68)', text: '#2f1a08' },
    secondary: { bg: 'rgba(166, 69, 33, 0.7)', text: '#F2F2F2' },
    accent: { bg: 'rgba(133, 66, 36, 0.7)', text: '#F2F2F2' },
    earth: { bg: 'rgba(96, 56, 19, 0.72)', text: '#F2F2F2' },
    light: { bg: 'rgba(242, 242, 242, 0.86)', text: '#603813' }
  }

  const achievements = [
    { text: '20+ Anos', palette: 'secondary', icon: '📅' },
    { text: '20K+ Atendimentos', palette: 'primary', icon: '🤝' },
    { text: 'SocialTech', palette: 'primary', icon: '💻' },
    { text: 'Inovação', palette: 'light', icon: '💡' },
    { text: 'Impacto Social', palette: 'accent', icon: '❤️' },
    { text: 'Sustentabilidade', palette: 'primary', icon: '🌱' },
    { text: 'Inclusão', palette: 'accent', icon: '🤗' },
    { text: 'Esporte', palette: 'light', icon: '⚽' },
    { text: 'Educação', palette: 'secondary', icon: '📚' },
    { text: 'Tecnologia', palette: 'earth', icon: '🔧' },
    { text: 'Transformação', palette: 'primary', icon: '✨' },
    { text: 'Futuro', palette: 'light', icon: '🚀' },
    { text: 'Esperança', palette: 'secondary', icon: '🌟' },
    { text: 'Pantanal', palette: 'earth', icon: '🌳' },
    { text: '3 Países', palette: 'primary', icon: '🌍' },
    { text: 'Cuiabá', palette: 'light', icon: '📍' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <section
      id="home"
      className="hero-with-background relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <video
        className="hero-video"
        src="/images/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="mx-auto text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="text-center text-5xl sm:text-[3.75rem] lg:text-[4.5rem] font-black tracking-tight text-foreground/90 leading-tight"
          >
            Oi, nós somos o
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center px-4">
            <img
              src="/images/logo-manduvi.svg"
              alt="Instituto Manduvi"
              className="w-[min(90vw,420px)] md:w-[min(60vw,500px)] lg:w-[min(50vw,560px)] max-w-4xl h-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center overflow-hidden"
          >
            <Marquee direction="left" className="py-1 w-full max-w-full" speed={30} autoFill>
              {achievements.slice(0, Math.ceil(achievements.length / 2)).map((achievement, index) => {
                const paletteEntry = palette[achievement.palette]

                return (
                  <motion.div
                    key={index}
                    variants={badgeVariants}
                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5 flex-shrink-0 border border-white/20"
                    style={{
                      backgroundColor: paletteEntry.bg,
                      color: paletteEntry.text,
                      margin: '0 6px'
                    }}
                  >
                    <span className="text-lg sm:text-xl">{achievement.icon}</span>
                    <span className="whitespace-nowrap">{achievement.text}</span>
                  </motion.div>
                )
              })}
            </Marquee>
            <Marquee direction="right" className="py-1 w-full max-w-full mt-1" speed={30} autoFill>
              {achievements.slice(Math.ceil(achievements.length / 2)).map((achievement, index) => {
                const paletteEntry = palette[achievement.palette]

                return (
                  <motion.div
                    key={index}
                    variants={badgeVariants}
                    className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5 flex-shrink-0 border border-white/20"
                    style={{
                      backgroundColor: paletteEntry.bg,
                      color: paletteEntry.text,
                      margin: '0 6px'
                    }}
                  >
                    <span className="text-lg sm:text-xl">{achievement.icon}</span>
                    <span className="whitespace-nowrap">{achievement.text}</span>
                  </motion.div>
                )
              })}
            </Marquee>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
              <div className="bg-white/95 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden">
                <div className="px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2">
                  {status !== 'ready' && !errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl sm:rounded-2xl border border-primary/10 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground/70">
                      <Sparkle className="h-4 w-4 animate-spin text-primary" />
                      <span>
                        {status === 'refreshing'
                          ? 'Atualizando base de conhecimento...'
                          : 'Conectando com a MirIA especialista...'}
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
                              setErrorMessage('Falha ao reconectar com a base de conhecimento. Tente novamente.')
                            }
                          }}
                        >
                          Tentar novamente
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div 
                      ref={chatContainerRef}
                      className="chat-container mt-3 sm:mt-4 w-full max-h-[70vh] overflow-y-auto relative"
                    >
                      <ChatKit 
                        control={control} 
                        className="h-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] max-h-[65vh] w-full" 
                      />
                      
                      {showScrollButton && (
                        <button
                          onClick={scrollToBottom}
                          className="scroll-to-bottom-btn"
                          title="Ir para o final da conversa"
                        >
                          <ArrowDown className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
