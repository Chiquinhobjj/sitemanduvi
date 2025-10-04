import { motion } from 'framer-motion'
import { MapPin, Calendar, ChevronDown, ChevronUp, Coffee, Heart } from 'lucide-react'
import { useState } from 'react'

const AboutSection = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

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

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  <span className="text-black">Desenvolvedora apaixonada</span>{' '}
                  <span className="text-gray-700">por criar experiências digitais que fazem a diferença</span>
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Localizada em</p>
                    <p className="text-lg font-semibold text-gray-900">São Paulo, Brasil</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experiência</p>
                    <p className="text-lg font-semibold text-gray-900">5+ anos desenvolvendo</p>
                  </div>
                </div>

                {/* Coffee */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Combustível</p>
                    <p className="text-lg font-semibold text-gray-900">Café e código ☕</p>
                  </div>
                </div>
              </motion.div>

              {/* Code Snippet */}
              <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg p-4 text-sm">
                <div className="text-gray-400 font-mono">
                  <div className="text-pink-400">const</div> <div className="text-blue-400">marina</div> <div className="text-white">=</div> <div className="text-yellow-400">{'{'}</div>
                  <div className="text-gray-300 ml-4">nome: <span className="text-green-400">'Marina Silva Santos'</span>,</div>
                  <div className="text-gray-300 ml-4">role: <span className="text-green-400">'Full Stack Developer'</span>,</div>
                  <div className="text-gray-300 ml-4">location: <span className="text-green-400">'São Paulo, BR'</span>,</div>
                  <div className="text-gray-300 ml-4">skills: <span className="text-blue-400">['React', 'Node.js', 'UX']</span>,</div>
                  <div className="text-gray-300 ml-4">passion: <span className="text-green-400">'Criar experiências incríveis'</span></div>
                  <div className="text-yellow-400">{'}'}</div>
                </div>
              </motion.div>

              {/* Expandable Sections */}
              <motion.div variants={itemVariants} className="space-y-4">
                {/* What I Do */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/50">
                  <button
                    onClick={() => toggleSection('whatIDo')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-purple-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">O que eu faço</span>
                    {expandedSection === 'whatIDo' ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === 'whatIDo' ? 'auto' : 0,
                      opacity: expandedSection === 'whatIDo' ? 1 : 0
                    }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-600">
                      Especializo-me em criar aplicações web modernas usando React, Node.js e tecnologias cloud. Meu foco é desenvolver interfaces intuitivas e sistemas backend robustos que escalam. Trabalho principalmente com startups e empresas de médio porte, transformando ideias em produtos digitais de sucesso.
                    </div>
                  </motion.div>
                </div>

                {/* Always Learning */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/50">
                  <button
                    onClick={() => toggleSection('alwaysLearning')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-purple-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">Sempre aprendendo</span>
                    {expandedSection === 'alwaysLearning' ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === 'alwaysLearning' ? 'auto' : 0,
                      opacity: expandedSection === 'alwaysLearning' ? 1 : 0
                    }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-600">
                      Estou constantemente aprendendo novas tecnologias e melhores práticas. Atualmente explorando Rust para sistemas de alta performance, WebAssembly para aplicações web, e aplicando Machine Learning em projetos de UX personalizada.
                    </div>
                  </motion.div>
                </div>

                {/* Personal Side */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/50">
                  <button
                    onClick={() => toggleSection('personal')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-purple-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">Lado pessoal</span>
                    {expandedSection === 'personal' ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === 'personal' ? 'auto' : 0,
                      opacity: expandedSection === 'personal' ? 1 : 0
                    }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-600">
                      Formada em Ciência da Computação pela USP, sempre busquei unir tecnologia e criatividade. Quando não estou codando, você me encontra explorando novos cafés em São Paulo, praticando yoga, ou mentorando outros desenvolvedores na comunidade tech.
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Character Illustration */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4">👩‍💻</div>
                    <div className="text-2xl font-bold text-gray-800">Marina</div>
                    <div className="text-lg text-gray-600">Full Stack Dev</div>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="text-2xl">⚛️</span>
                      <span className="text-2xl">🟢</span>
                      <span className="text-2xl">🎨</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
