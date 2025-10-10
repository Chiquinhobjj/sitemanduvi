import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { useState, useEffect, useRef } from 'react'
import { Sparkle, ArrowDown } from 'lucide-react'
import ManduviChatKit from '../chat/ManduviChatKit'
import './HeroSection.css'

const HeroSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const heroRef = useRef(null)

  // Função para scroll suave
  const scrollToNext = () => {
    if (heroRef.current) {
      const nextSection = heroRef.current.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Função para detectar scroll
  const handleScroll = () => {
    if (heroRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = heroRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
      setShowScrollButton(!isAtBottom)
    }
  }

  return (
    <section 
      ref={heroRef}
      className="hero-with-background relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
      id="home"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-background.webp"
        >
          <source src="/images/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/images/logo-manduvi.svg"
              alt="Instituto Manduvi"
              className="h-16 sm:h-20 lg:h-24 mx-auto"
            />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-5xl sm:text-[3.75rem] lg:text-[4.5rem] font-black tracking-tight text-foreground/90 leading-tight"
          >
            Oi, nós somos o
            <br />
            <span className="text-primary">Instituto Manduvi</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Transformamos vidas através da educação, tecnologia e inovação social.
            <br />
            Conheça nossa história e faça parte da mudança.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Conhecer o Instituto
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Entrar em Contato
            </motion.button>
          </motion.div>
        </div>

        {/* Chat Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Converse com a MirIA
            </h3>
            <p className="text-white/80 text-lg">
              Nossa assistente virtual está pronta para te ajudar
            </p>
          </div>
          
          <ManduviChatKit />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
          className="group flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2">Descobrir mais</span>
          <ArrowDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-24 h-24 bg-primary/15 rounded-full blur-xl"
        />
      </div>
    </section>
  )
}

export default HeroSection