import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye, 
  Play,
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  TrendingUp,
  MessageSquare,
  MapPin
} from 'lucide-react'
import { socialNetworks, socialStats, contactInfo } from '@/data/socialNetworks.js'

const RedesSection = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('instagram')
  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  const currentNetwork = socialNetworks.find(network => network.id === selectedNetwork)
  const currentPost = currentNetwork?.posts?.[currentPostIndex]

  const nextPost = () => {
    if (currentNetwork?.posts) {
      setCurrentPostIndex((prev) => 
        prev === currentNetwork.posts.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevPost = () => {
    if (currentNetwork?.posts) {
      setCurrentPostIndex((prev) => 
        prev === 0 ? currentNetwork.posts.length - 1 : prev - 1
      )
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nossas <span className="text-primary">Redes Sociais</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Conecte-se conosco e acompanhe nossas iniciativas, conquistas e o impacto que estamos gerando na comunidade
            </p>
          </motion.div>

          {/* Contact Info Overview */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="bg-white/95 border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{contactInfo.whatsapp.phone}</h3>
              <p className="text-sm text-foreground/70 mb-3">WhatsApp</p>
              <a 
                href={contactInfo.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Conversar
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/95 border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">3 E-mails</h3>
              <p className="text-sm text-foreground/70 mb-3">Contato Institucional</p>
              <div className="space-y-1">
                {contactInfo.emails.slice(0, 2).map((email, index) => (
                  <a 
                    key={index}
                    href={`mailto:${email.address}`}
                    className="block text-blue-600 hover:text-blue-700 text-xs"
                  >
                    {email.address}
                  </a>
                ))}
              </div>
            </div>

            {/* Endereços */}
            <div className="bg-white/95 border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">2 Unidades</h3>
              <p className="text-sm text-foreground/70 mb-3">Cuiabá - MT</p>
              <div className="space-y-1">
                {contactInfo.addresses.map((address, index) => (
                  <a 
                    key={index}
                    href={address.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-purple-600 hover:text-purple-700 text-xs"
                  >
                    {address.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Network Selector */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {socialNetworks.map((network) => {
              const Icon = network.icon
              const isSelected = selectedNetwork === network.id
              
              return (
                <button
                  key={network.id}
                  onClick={() => {
                    setSelectedNetwork(network.id)
                    setCurrentPostIndex(0)
                  }}
                  className={`group relative px-6 py-3 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground shadow-lg'
                      : 'border-border/30 bg-white/95 text-foreground/70 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">{network.name}</div>
                      <div className="text-xs opacity-80">
                        {network.id === 'instagram' 
                          ? `${network.accounts?.length || 1} contas`
                          : network.handle
                        }
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="network-indicator"
                      className="absolute inset-0 rounded-2xl bg-primary/10 border-2 border-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </motion.div>

          {/* Network Content */}
          <motion.div variants={itemVariants} className="bg-white/95 border border-border/50 rounded-3xl p-8">
            {currentNetwork && (
              <div className="space-y-6">
                {/* Network Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentNetwork.color} flex items-center justify-center`}>
                      <currentNetwork.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{currentNetwork.name}</h3>
                      <p className="text-foreground/70">{currentNetwork.handle}</p>
                      <p className="text-sm text-foreground/60">{currentNetwork.description}</p>
                    </div>
                  </div>
                  <a
                    href={currentNetwork.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-secondary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Seguir
                  </a>
                </div>

                {/* Instagram Accounts or Network Info */}
                {currentNetwork.id === 'instagram' && currentNetwork.accounts ? (
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-foreground">Contas do Instagram</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentNetwork.accounts.map((account, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white border border-border/30 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                              <Instagram className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-foreground">{account.name}</h5>
                              <p className="text-sm text-foreground/70">{account.handle}</p>
                            </div>
                          </div>
                          <a
                            href={account.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Seguir
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-foreground">Conecte-se Conosco</h4>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentNetwork.color} flex items-center justify-center mx-auto mb-4`}>
                        <currentNetwork.icon className="h-10 w-10 text-white" />
                      </div>
                      <h5 className="text-xl font-bold text-foreground mb-2">{currentNetwork.name}</h5>
                      <p className="text-foreground/70 mb-6">{currentNetwork.description}</p>
                      <a
                        href={currentNetwork.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-secondary transition-colors font-semibold"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Acessar {currentNetwork.name}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Acompanhe nossa jornada de impacto!
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Siga-nos em todas as redes sociais para ficar por dentro das nossas iniciativas, 
                conquistas e histórias de transformação.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialNetworks.map((network) => {
                  const Icon = network.icon
                  return (
                    <a
                      key={network.id}
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-transparent bg-gradient-to-r ${network.color} text-white hover:scale-105 transition-all duration-300`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-semibold">{network.name}</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RedesSection
