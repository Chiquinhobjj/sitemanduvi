import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "EcoMarket",
      description: "Marketplace sustentável conectando produtores locais a consumidores conscientes",
      testimonial: {
        text: "Marina transformou nossa visão em uma plataforma incrível. O crescimento foi de 300% em 6 meses!",
        author: "João Silva",
        role: "CEO EcoMarket"
      },
      image: "/images/ecomarket.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://ecomarket.com.br",
      github: "https://github.com/marina-santos/ecomarket"
    },
    {
      id: 2,
      title: "MindfulApp",
      description: "Aplicativo de meditação e bem-estar com IA para personalização de experiências",
      testimonial: {
        text: "A experiência do usuário é simplesmente perfeita. Marina entende tanto de código quanto de pessoas.",
        author: "Ana Costa",
        role: "Fundadora MindfulApp"
      },
      image: "/images/mindfulapp.jpg",
      tags: ["React Native", "Python", "TensorFlow", "Firebase"],
      link: "https://mindfulapp.com.br",
      github: "https://github.com/marina-santos/mindfulapp"
    },
    {
      id: 3,
      title: "FinanceTracker Pro",
      description: "Dashboard financeiro para PMEs com análise preditiva e relatórios automatizados",
      testimonial: {
        text: "Reduziu nosso tempo de análise financeira em 80%. Ferramenta indispensável!",
        author: "Carlos Mendes",
        role: "CFO TechStart"
      },
      image: "/images/financetracker.jpg",
      tags: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      link: "https://financetracker.pro",
      github: "https://github.com/marina-santos/financetracker"
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

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

  const project = projects[currentProject]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi, cada um com sua própria história e impacto único
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Project Image */}
            <motion.div variants={itemVariants} className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Project Details */}
            <motion.div variants={itemVariants} className="p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <blockquote className="text-gray-700 italic mb-3">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">
                        {project.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 border-purple-200 text-purple-600 hover:bg-purple-50">
                    <Github className="w-4 h-4" />
                    Código
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-6 bg-gray-50 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="flex items-center gap-2"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
