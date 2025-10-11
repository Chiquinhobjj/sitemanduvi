import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TikTokPage = () => {
  const navigate = useNavigate()

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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/redes')}
              className="p-2 rounded-lg bg-white/95 border border-border/30 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">TikTok</h1>
              <p className="text-foreground/70">@institutomanduvi</p>
            </div>
          </motion.div>

          {/* TikTok Content */}
          <motion.div variants={itemVariants} className="bg-white/95 border border-border/50 rounded-3xl p-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center mx-auto">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">@institutomanduvi</h2>
                <p className="text-foreground/70 mb-6">
                  Conteúdo em vídeo e tendências do Instituto Manduvi
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Siga-nos no TikTok</h3>
                <p className="text-foreground/70 mb-6">
                  Acompanhe nossos vídeos educativos, depoimentos e conteúdo exclusivo sobre nossos projetos e iniciativas.
                </p>
                
                <a
                  href="https://www.tiktok.com/@institutomanduvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all font-semibold"
                >
                  <ExternalLink className="h-5 w-5" />
                  Seguir no TikTok
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Conteúdo Educativo</h4>
                  <p className="text-sm text-foreground/70">
                    Vídeos sobre nossos projetos, metodologias e impacto social
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Depoimentos</h4>
                  <p className="text-sm text-foreground/70">
                    Histórias reais de transformação e conquistas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TikTokPage
