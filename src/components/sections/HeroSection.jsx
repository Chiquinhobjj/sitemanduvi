import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import ManduviaChat from '../assistant/ManduviaChat'

const HeroSection = () => {
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
            <ManduviaChat />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
