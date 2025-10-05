import { motion } from 'framer-motion'

const SkillsSection = () => {
  const capabilities = [
    { name: 'ManduvIA Mentor & Concierge', level: 92, icon: '🤖', highlight: 'IA empática em WhatsApp, web e dados de impacto.' },
    { name: 'Observatório Coloiado', level: 88, icon: '📊', highlight: 'Dashboards, crawlers e governança para políticas públicas.' },
    { name: 'Academia Solidária Ops', level: 86, icon: '🥋', highlight: 'Operação socioesportiva com plano de vida e indicadores HEXA.' },
    { name: 'Pipeline de Captação ESG', level: 83, icon: '🤝', highlight: 'Jornada de investidores, compliance e relatórios ManduvIA.' },
    { name: 'Experiências Manduvia', level: 80, icon: '🌳', highlight: 'Eventos, mentorias e jornadas territoriais moduladas.' }
  ]

  const expansionFronts = [
    { name: 'ManduvIA Voice', icon: '🎙️', description: 'Protocolos conversacionais para áudio e libras em jornadas de acolhimento.' },
    { name: 'Marketplace Impacto Verde', icon: '🌱', description: 'Plataforma para créditos de floresta, economia circular e renda pantaneira.' },
    { name: 'Radar de Voluntariado Corporativo', icon: '🧭', description: 'Matching entre colaboradores, territórios e necessidades críticas em tempo real.' },
    { name: 'Gemini Data Commons', icon: '🛰️', description: 'Base federada de dados ESG aberta a governos e empresas parceiras.' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Capacidades Manduvia para ativar impacto inteligente
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🌐</span>
                    O que dominamos hoje
                  </h3>
                  <div className="space-y-4">
                    {capabilities.map((capability, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{capability.icon}</span>
                            <span className="font-medium text-gray-800">{capability.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-purple-600">{capability.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            variants={progressVariants}
                            custom={capability.level}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-gray-600">{capability.highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    Frentes em expansão
                  </h3>
                  <div className="space-y-4">
                    {expansionFronts.map((front, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-2xl">{front.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-800">{front.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{front.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Visual */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🌳</div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">Ecossistema Manduvia</div>
                    <div className="flex justify-center gap-3 mb-4">
                      <span className="text-3xl">🤖</span>
                      <span className="text-3xl">📊</span>
                      <span className="text-3xl">🤝</span>
                    </div>
                    <div className="text-lg text-gray-600">Sempre aprendendo com dados, afeto e tecnologia</div>
                    <div className="flex justify-center gap-2 mt-3">
                      <span className="text-2xl">🎙️</span>
                      <span className="text-2xl">🌱</span>
                      <span className="text-2xl">🛰️</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">📈</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
