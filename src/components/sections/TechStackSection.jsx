import { motion } from 'framer-motion'

const TechStackSection = () => {
  const capabilityStacks = [
    {
      category: 'ManduvIA Platform',
      icon: '🤖',
      technologies: [
        {
          name: 'ManduvIA Mentor & Concierge',
          icon: '💬',
          description: 'Assistente empática em WhatsApp, web e voz para acolhimento, trilhas educacionais e voluntariado.'
        },
        {
          name: 'NLP Multilíngue + Sentimento',
          icon: '🧠',
          description: 'Modelos customizados para português, libras e línguas pantaneiras com análise emocional em tempo real.'
        },
        {
          name: 'Motor de jornadas',
          icon: '🧭',
          description: 'Orquestra fluxos de acolhimento, educação e renda com personalização ManduvIA.'
        },
        {
          name: 'Assistentes especialistas',
          icon: '🧑‍⚕️',
          description: 'Bots especializados em saúde, esporte, dados e captação atuando com equipe humana.'
        }
      ]
    },
    {
      category: 'Infraestrutura de Dados Coloiado',
      icon: '📊',
      technologies: [
        {
          name: 'Observatórios interativos',
          icon: '📈',
          description: 'Dashboards com drilldown por território, públicos e indicadores ESG.'
        },
        {
          name: 'Crawlers sociais + APIs',
          icon: '🛰️',
          description: 'Coleta automatizada de dados públicos, privados e de sensores comunitários.'
        },
        {
          name: 'ManduvIA Insights',
          icon: '✨',
          description: 'Recomendações e alertas para gestores com base em IA e especialistas Manduvia.'
        },
        {
          name: 'Lakehouse ESG',
          icon: '💾',
          description: 'Arquitetura de dados auditável com governança, LGPD e métricas de impacto.'
        }
      ]
    },
    {
      category: 'Experiências & Operações Manduvia',
      icon: '🌱',
      technologies: [
        {
          name: 'Hexa Method Playbook',
          icon: '📘',
          description: 'Metodologia de acolhimento, inovação e impacto aplicada em esporte, educação e renda.'
        },
        {
          name: 'Academia Solidária Ops',
          icon: '🥋',
          description: 'Processos operacionais, PIDs e analytics integrados às unidades socioesportivas.'
        },
        {
          name: 'Pipeline de investimentos',
          icon: '💡',
          description: 'Captação ESG, leis de incentivo e parcerias articuladas com ManduvIA Dealflow.'
        },
        {
          name: 'Rede de voluntariado Manduvia',
          icon: '🫶',
          description: 'Matching inteligente de especialistas, eventos de acolhimento e reconhecimento da rede.'
        }
      ]
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Arquitetura Manduvia
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plataforma ManduvIA, observatórios Coloiado e Operações Manduvia formam nosso ecossistema de tecnologia, dados e acolhimento.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilityStacks.map((stack, stackIndex) => (
            <motion.div
              key={stackIndex}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{stack.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{stack.category}</h3>
              </div>

              <div className="space-y-4">
                {stack.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={itemVariants}
                    className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">{tech.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Evolução contínua Manduvia 🚀
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos expandindo ManduvIA Voice para áudio e libras, estruturando o Marketplace Impacto Verde e construindo o Radar de Voluntariado Corporativo. Cada frente nasce conectada aos dados Coloiado e à metodologia acolhedora do Manduvi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection
