import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TwitterPage = () => {
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
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Twitter</h1>
              <p className="text-foreground/70">@imanduvi</p>
            </div>
          </motion.div>

          {/* Twitter Content */}
          <motion.div variants={itemVariants} className="bg-white/95 border border-border/50 rounded-3xl p-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mx-auto">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">@imanduvi</h2>
                <p className="text-foreground/70 mb-6">
                  Notícias e atualizações em tempo real do Instituto Manduvi
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Siga-nos no Twitter</h3>
                <p className="text-foreground/70 mb-6">
                  Acompanhe nossas últimas notícias, atualizações de projetos e insights sobre impacto social.
                </p>
                
                <a
                  href="https://x.com/imanduvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all font-semibold"
                >
                  <ExternalLink className="h-5 w-5" />
                  Seguir no Twitter
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Notícias</h4>
                  <p className="text-sm text-foreground/70">
                    Atualizações sobre nossos projetos e conquistas
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Insights</h4>
                  <p className="text-sm text-foreground/70">
                    Reflexões sobre impacto social e desenvolvimento sustentável
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

export default TwitterPage
