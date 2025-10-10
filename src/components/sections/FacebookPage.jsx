import { motion } from 'framer-motion'
import { Facebook, ExternalLink, Users, Heart, MessageCircle, Share2 } from 'lucide-react'

const FacebookPage = () => {
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
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Facebook</h1>
                <p className="text-xl text-gray-600">Instituto Manduvi</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Conecte-se conosco e acompanhe nossas iniciativas, eventos e histórias de transformação social.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">8.2K</div>
              <div className="text-gray-600">Curtidas</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">1.8K</div>
              <div className="text-gray-600">Reações/mês</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Share2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">234</div>
              <div className="text-gray-600">Compartilhamentos/mês</div>
            </div>
          </motion.div>

          {/* Facebook Embed */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Página do Facebook</h2>
              <p className="text-gray-600">Acompanhe nossas publicações e eventos em tempo real</p>
            </div>
            
            {/* Facebook Page Embed */}
            <div className="p-6">
              <div className="aspect-video max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Facebook className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Página do Facebook</h3>
                  <p className="text-gray-600 mb-4">Conteúdo em tempo real das nossas publicações</p>
                  <a
                    href="https://www.facebook.com/institutomanduvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                    Curtir Página
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conteúdo Principal</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Academia Solidária</div>
                    <div className="text-sm text-gray-600">Acompanhe nossos projetos sociais</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⚽</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Superralinha</div>
                    <div className="text-sm text-gray-600">Eventos esportivos e integração</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Coloiado</div>
                    <div className="text-sm text-gray-600">Plataforma de gestão social</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Métricas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Alcance semanal</span>
                  <span className="font-semibold text-blue-600">4.2K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Engajamento</span>
                  <span className="font-semibold text-green-600">6.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Comentários/mês</span>
                  <span className="font-semibold text-purple-600">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Compartilhamentos</span>
                  <span className="font-semibold text-orange-600">156</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Events Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Próximos Eventos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">Superralinha 2024</div>
                <div className="text-sm text-gray-600">Campeonato de futebol society</div>
                <div className="text-xs text-blue-600 mt-1">Inscrições abertas</div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">Workshop HEXA</div>
                <div className="text-sm text-gray-600">Metodologia de desenvolvimento</div>
                <div className="text-xs text-green-600 mt-1">Em breve</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default FacebookPage
