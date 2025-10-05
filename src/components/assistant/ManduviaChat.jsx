import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mic, MicOff, Send, Sparkle } from 'lucide-react'

const quickActions = [
  'Quais são as iniciativas?',
  'Como posso participar?',
  'Onde atuamos?',
  'Quero apoiar a missão',
  'Como solicitar acolhimento?',
  'Onde vejo resultados?',
]

const MessageBubble = ({ message }) => {
  const isAssistant = message.role === 'assistant'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm sm:text-base leading-relaxed shadow-sm ${
          isAssistant
            ? 'bg-white text-foreground border border-primary/10'
            : 'bg-primary text-primary-foreground'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  )
}

const ManduviaChat = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const listRef = useRef(null)
  const containerRef = useRef(null)

  const audioSupported = useMemo(
    () => typeof window !== 'undefined' && !!navigator.mediaDevices && 'MediaRecorder' in window,
    []
  )

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    return () => {
      if (recorder) {
        recorder.stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [recorder])

  const pushMessage = (role, content) => {
    setMessages((prev) => [...prev, { role, content, id: crypto.randomUUID() }])
  }

  const handleFakeResponse = (prompt) => {
    setIsGenerating(true)
    setTimeout(() => {
      pushMessage(
        'assistant',
        `Ainda estou aprendendo, mas posso indicar caminhos. Sobre "${prompt}", posso te levar até a seção de iniciativas ou conectar com nossa equipe.`
      )
      setIsGenerating(false)
    }, 1200)
  }

  const handleSend = () => {
    if (!inputValue.trim() || isGenerating) return
    pushMessage('user', inputValue.trim())
    const prompt = inputValue.trim()
    setInputValue('')
    handleFakeResponse(prompt)
  }

  const handleSuggestion = (suggestion) => {
    if (isGenerating) return
    pushMessage('user', suggestion)
    handleFakeResponse(suggestion)
  }

  const toggleRecording = async () => {
    if (!audioSupported || isGenerating) return

    if (isRecording && recorder) {
      recorder.stop()
      setIsRecording(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      const chunks = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop())
        setRecorder(null)
        setIsRecording(false)

        if (!chunks.length) return

        pushMessage('user', 'Enviei um áudio 🎤 (funcionalidade em desenvolvimento)')
        handleFakeResponse('Mensagem de áudio')
      }

      mediaRecorder.start()
      setRecorder(mediaRecorder)
      setIsRecording(true)
    } catch (error) {
      console.error('Não foi possível acessar o microfone', error)
      pushMessage('assistant', 'Não consegui acessar seu microfone. Você pode digitar sua mensagem?')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <div className="bg-white/95 backdrop-blur-lg border border-white/40 shadow-2xl rounded-[28px] overflow-hidden">
        <div className="px-5 sm:px-7 pt-6">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-foreground/90 text-center"
          >
            O que podemos fazer por você, hoje?
          </motion.h3>
        </div>
        <div ref={listRef} className="max-h-[320px] overflow-y-auto px-5 sm:px-7 pb-4 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <MessageBubble key={message.id ?? message.content} message={message} />
            ))}
            {isGenerating && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="flex justify-start"
              >
                <div className="bg-white border border-primary/10 rounded-3xl px-4 py-3 text-sm text-foreground/70 flex items-center gap-2">
                  <Sparkle className="h-4 w-4 animate-pulse text-primary" />
                  Manduvia está pensando...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-5 sm:px-7 pb-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="relative flex-1">
              <textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Escreva sua pergunta"
                className="w-full resize-none rounded-2xl border border-primary/20 bg-white/80 px-4 py-3 text-sm sm:text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleRecording}
                disabled={!audioSupported}
                className={`rounded-2xl px-3 py-3 border border-primary/20 transition-colors flex items-center justify-center ${
                  isRecording
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-primary hover:bg-primary/10'
                } ${audioSupported ? '' : 'opacity-50 cursor-not-allowed'}`}
                aria-pressed={isRecording}
              >
                {isRecording ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              </button>
              <button
                type="button"
                onClick={handleSend}
                disabled={!inputValue.trim() || isGenerating}
                className="inline-flex items-center justify-center rounded-2xl bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-lg hover:bg-secondary transition-colors disabled:opacity-60"
              >
                Enviar
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 text-primary/70 shadow hover:text-primary"
              onClick={() => {
                containerRef.current?.scrollBy({ left: -160, behavior: 'smooth' })
              }}
            >
              ‹
            </button>
            <div
              ref={containerRef}
              className="mx-10 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
            >
              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  onClick={() => handleSuggestion(action)}
                  className="px-3 py-1.5 rounded-full border border-primary/20 text-xs sm:text-sm text-primary/80 hover:bg-primary/10 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 text-primary/70 shadow hover:text-primary"
              onClick={() => {
                containerRef.current?.scrollBy({ left: 160, behavior: 'smooth' })
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManduviaChat
