import { motion } from 'framer-motion'

const SkillsSection = () => {
  const currentSkills = [
    { name: "React 18", level: 95, icon: "⚛️" },
    { name: "TypeScript", level: 90, icon: "🔷" },
    { name: "Node.js", level: 88, icon: "🟢" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "PostgreSQL", level: 82, icon: "🐘" }
  ]

  const exploringSkills = [
    { name: "Rust", icon: "🦀", description: "Explorando para desenvolvimento de sistemas de alta performance" },
    { name: "WebAssembly", icon: "🕸️", description: "Integrando com aplicações web para melhor performance" },
    { name: "Machine Learning", icon: "🤖", description: "Aplicando IA em projetos de UX personalizada" },
    { name: "Blockchain", icon: "⛓️", description: "Desenvolvendo soluções DeFi e NFT" }
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
                  Construindo soluções modernas com tecnologia de ponta
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Foco Atual
                  </h3>
                  <div className="space-y-4">
                    {currentSkills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-gray-800">{skill.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-purple-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            variants={progressVariants}
                            custom={skill.level}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    Explorando Agora
                  </h3>
                  <div className="space-y-4">
                    {exploringSkills.map((skill, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-800">{skill.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
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
                    <div className="text-8xl mb-4">🛠️</div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">Skills & Tech</div>
                    <div className="flex justify-center gap-3 mb-4">
                      <span className="text-3xl">⚛️</span>
                      <span className="text-3xl">🟢</span>
                      <span className="text-3xl">🔷</span>
                    </div>
                    <div className="text-lg text-gray-600">Always Learning</div>
                    <div className="flex justify-center gap-2 mt-3">
                      <span className="text-2xl">🦀</span>
                      <span className="text-2xl">🤖</span>
                      <span className="text-2xl">⛓️</span>
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
