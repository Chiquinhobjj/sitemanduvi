import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SocialMediaPageTemplate = ({ 
  title, 
  handle, 
  icon: Icon, 
  color, 
  url, 
  description, 
  children 
}) => {
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
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h1>
              <p className="text-foreground/70">{handle}</p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="bg-white/95 border border-border/50 rounded-3xl p-8">
            <div className="text-center space-y-6">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mx-auto`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">{handle}</h2>
                <p className="text-foreground/70 mb-6">{description}</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Siga-nos no {title}</h3>
                <p className="text-foreground/70 mb-6">
                  Acompanhe nossas publicações, eventos e conteúdo exclusivo sobre nossos projetos e iniciativas.
                </p>
                
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${color} text-white rounded-xl hover:opacity-90 transition-all font-semibold`}
                >
                  <ExternalLink className="h-5 w-5" />
                  Seguir no {title}
                </a>
              </div>

              {/* Custom Content */}
              {children}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialMediaPageTemplate
