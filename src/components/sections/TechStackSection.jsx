import { motion } from 'framer-motion'

const TechStackSection = () => {
  const techStack = [
    {
      category: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", icon: "⚛️", description: "Biblioteca principal para interfaces modernas e reativas" },
        { name: "Next.js", icon: "▲", description: "Framework React para aplicações full-stack e SSR" },
        { name: "TypeScript", icon: "🔷", description: "Superset JavaScript para código mais seguro e escalável" },
        { name: "Tailwind CSS", icon: "🎨", description: "Framework CSS utility-first para design responsivo" },
        { name: "Framer Motion", icon: "🎭", description: "Biblioteca de animações para React" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", icon: "🟢", description: "Runtime JavaScript para desenvolvimento server-side" },
        { name: "Express", icon: "🚂", description: "Framework web minimalista e flexível para Node.js" },
        { name: "PostgreSQL", icon: "🐘", description: "Banco de dados relacional robusto e confiável" },
        { name: "MongoDB", icon: "🍃", description: "Banco NoSQL para dados flexíveis e escaláveis" },
        { name: "Redis", icon: "🔴", description: "Cache em memória para alta performance" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: [
        { name: "AWS", icon: "🟠", description: "Plataforma cloud completa para deploy e escalabilidade" },
        { name: "Docker", icon: "🐳", description: "Containerização para ambientes consistentes" },
        { name: "GitHub Actions", icon: "🔄", description: "CI/CD automatizado para deploy contínuo" },
        { name: "Vercel", icon: "▲", description: "Plataforma de deploy otimizada para frontend" },
        { name: "Supabase", icon: "⚡", description: "Backend-as-a-Service com PostgreSQL e auth" }
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
            Stack Tecnológico
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ferramentas e tecnologias que uso para criar soluções robustas e escaláveis
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techStack.map((stack, stackIndex) => (
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
              Sempre Evoluindo 🚀
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantenho-me atualizada com as últimas tendências e tecnologias do mercado. 
              Atualmente explorando Rust, WebAssembly, Machine Learning e Blockchain para 
              expandir ainda mais minhas capacidades de desenvolvimento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection
