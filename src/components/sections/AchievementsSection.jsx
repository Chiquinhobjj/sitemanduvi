import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AchievementsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    technologies: 0,
    code: 0,
    coffee: 0
  })

  const achievements = [
    {
      number: 40,
      suffix: '+',
      label: 'Projetos Concluídos',
      emoji: '🚀',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      key: 'projects'
    },
    {
      number: 25,
      suffix: '+',
      label: 'Clientes Satisfeitos',
      emoji: '😊',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      key: 'clients'
    },
    {
      number: 5,
      suffix: '+',
      label: 'Anos de Experiência',
      emoji: '📅',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      key: 'experience'
    },
    {
      number: 20,
      suffix: '+',
      label: 'Tecnologias Dominadas',
      emoji: '🛠️',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      key: 'technologies'
    },
    {
      number: 100,
      suffix: 'K+',
      label: 'Linhas de Código',
      emoji: '💻',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      key: 'code'
    },
    {
      number: 999,
      suffix: '+',
      label: 'Cafés Consumidos',
      emoji: '☕',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      key: 'coffee',
      special: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }

  useEffect(() => {
    const animateCounters = () => {
      achievements.forEach((achievement) => {
        let start = 0
        const end = achievement.number
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          
          setCounters(prev => ({
            ...prev,
            [achievement.key]: achievement.special && start >= end ? '∞' : Math.floor(start)
          }))
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('achievements')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Conquistas & Números
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Alguns números que refletem minha jornada como desenvolvedora
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${achievement.bgColor} rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="text-6xl mb-4">{achievement.emoji}</div>
              <div className={`text-4xl sm:text-5xl font-bold ${achievement.textColor} mb-2`}>
                {achievement.special && counters[achievement.key] === '∞' 
                  ? '∞' 
                  : counters[achievement.key]}{achievement.suffix}
              </div>
              <div className="text-gray-700 font-medium text-lg">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Outras Conquistas 🏆
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <div className="font-semibold text-gray-900">Formada pela USP</div>
                <div className="text-sm text-gray-600">Ciência da Computação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-semibold text-gray-900">AWS Certified</div>
                <div className="text-sm text-gray-600">Solutions Architect</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏃‍♀️</div>
                <div className="font-semibold text-gray-900">Scrum Master</div>
                <div className="text-sm text-gray-600">Certified Professional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-semibold text-gray-900">Mentora Ativa</div>
                <div className="text-sm text-gray-600">Comunidade Tech</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
