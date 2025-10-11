import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Phone, Clock, MapPin, Coffee, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { contactInfo } from '@/data/socialNetworks.js'

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

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: contactInfo.whatsapp.phone,
      action: contactInfo.whatsapp.url,
      color: "green"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Principal",
      value: contactInfo.emails[0].address,
      action: `mailto:${contactInfo.emails[0].address}`,
      color: "purple"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Instituto Manduvi",
      action: "https://www.linkedin.com/company/institutomanduvi/",
      color: "blue"
    }
  ]

  const availability = [
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horário de Atendimento",
      value: "Seg-Sex, 8h-18h BRT"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localização",
      value: "Cuiabá - MT, Brasil"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Tempo de Resposta",
      value: "Respondemos em até 24h"
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
              Conecte-se conosco e faça parte da transformação social. Estamos aqui para acolher e impactar!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  Como nos encontrar
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((contact, index) => (
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
                    <span className="font-semibold text-green-800">Aberto para parcerias</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Sempre buscando novas oportunidades de impacto social e desenvolvimento sustentável
                  </p>
                </div>
              </div>

              {/* Physical Addresses */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  Nossas Unidades
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.addresses.map((address, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{address.name}</h4>
                          <p className="text-gray-600 text-sm mb-1">{address.address}</p>
                          {address.reference && (
                            <p className="text-gray-500 text-xs mb-2">{address.reference}</p>
                          )}
                          <p className="text-gray-600 text-sm">{address.city} - {address.zip}</p>
                        </div>
                        <a
                          href={address.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-6">🌳</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prontos para o próximo impacto!
                </h3>
                <p className="text-gray-600 mb-8">
                  Seja uma parceria, projeto social ou iniciativa de desenvolvimento sustentável, 
                  estamos aqui para transformar vidas e comunidades.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 py-3 text-lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </Button>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Nossa Missão
                </h4>
                <p className="text-gray-700">
                  Inspirados na árvore Manduvi, crescemos juntos para acolher, inovar e impactar. 
                  Que tal fazermos parte da sua jornada de transformação?
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
