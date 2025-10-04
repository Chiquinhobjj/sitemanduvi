import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github, Clock, MapPin, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "marina.santos@email.com",
      action: "mailto:marina.santos@email.com",
      color: "purple"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "marina-santos-dev",
      action: "https://linkedin.com/in/marina-santos-dev",
      color: "blue"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "marina-santos",
      action: "https://github.com/marina-santos",
      color: "gray"
    }
  ]

  const availability = [
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horário de Trabalho",
      value: "Seg-Sex, 9h-18h BRT"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localização",
      value: "São Paulo, Brasil"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Tempo de Resposta",
      value: "Respondo em até 24h"
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-medium text-purple-600 uppercase tracking-wide mb-2">
              VAMOS CONVERSAR
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Disponível para novos projetos e oportunidades. Vamos criar algo incrível juntos!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  Como me encontrar
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`w-12 h-12 bg-${contact.color}-100 rounded-full flex items-center justify-center text-${contact.color}-600`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{contact.label}</p>
                        <a 
                          href={contact.action}
                          className={`text-${contact.color}-600 hover:text-${contact.color}-700 transition-colors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">⏰</span>
                  Disponibilidade
                </h3>
                
                <div className="space-y-4">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-purple-600">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-800">Disponível para novos projetos</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Atualmente aceitando projetos para início em dezembro 2024
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-6">👩‍💻</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pronta para o próximo desafio!
                </h3>
                <p className="text-gray-600 mb-8">
                  Seja um projeto web, aplicativo mobile ou consultoria técnica, 
                  estou aqui para transformar suas ideias em realidade digital.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </Button>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 py-3 text-lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Conectar no LinkedIn
                  </Button>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
                <Coffee className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Curiosidade
                </h4>
                <p className="text-gray-700">
                  Melhores ideias surgem durante um bom café! ☕ 
                  Que tal marcarmos um café virtual para discutir seu projeto?
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
