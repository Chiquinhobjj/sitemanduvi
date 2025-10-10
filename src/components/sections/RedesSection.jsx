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
  TrendingUp
} from 'lucide-react'
import { socialNetworks, socialStats } from '@/data/socialNetworks.js'

const RedesSection = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('instagram')
  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  const currentNetwork = socialNetworks.find(network => network.id === selectedNetwork)
  const currentPost = currentNetwork?.posts[currentPostIndex]

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

          {/* Stats Overview */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Seguidores', value: socialStats.totalFollowers, color: 'bg-blue-50 text-blue-600' },
              { icon: Calendar, label: 'Posts', value: socialStats.totalPosts, color: 'bg-green-50 text-green-600' },
              { icon: Eye, label: 'Visualizações', value: socialStats.totalViews, color: 'bg-purple-50 text-purple-600' },
              { icon: TrendingUp, label: 'Engajamento', value: socialStats.engagementRate, color: 'bg-orange-50 text-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/95 border border-border/50 rounded-2xl p-6 text-center">
                <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
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
                      <div className="text-xs opacity-80">{network.followers} seguidores</div>
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

                {/* Posts Carousel */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-foreground">Últimas Postagens</h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevPost}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={currentNetwork.posts.length <= 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-sm text-foreground/60">
                        {currentPostIndex + 1} de {currentNetwork.posts.length}
                      </span>
                      <button
                        onClick={nextPost}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={currentNetwork.posts.length <= 1}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPostIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-border/30 rounded-2xl overflow-hidden"
                    >
                      {currentPost && (
                        <div className="space-y-4">
                          {/* Post Image */}
                          <div className="relative aspect-video bg-gray-100">
                            <img
                              src={currentPost.image}
                              alt="Post"
                              className="w-full h-full object-cover"
                            />
                            {currentPost.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                                  <Play className="h-6 w-6 text-white ml-1" />
                                </div>
                              </div>
                            )}
                            {currentPost.duration && (
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {currentPost.duration}
                              </div>
                            )}
                          </div>

                          {/* Post Content */}
                          <div className="p-6">
                            <p className="text-foreground/80 leading-relaxed mb-4">
                              {currentPost.caption}
                            </p>

                            {/* Post Stats */}
                            <div className="flex items-center justify-between text-sm text-foreground/60">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Heart className="h-4 w-4" />
                                  <span>{currentPost.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>{currentPost.comments}</span>
                                </div>
                                {currentPost.shares && (
                                  <div className="flex items-center gap-1">
                                    <Share2 className="h-4 w-4" />
                                    <span>{currentPost.shares}</span>
                                  </div>
                                )}
                                {currentPost.views && (
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{currentPost.views}</span>
                                  </div>
                                )}
                              </div>
                              <span>{currentPost.date}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
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
