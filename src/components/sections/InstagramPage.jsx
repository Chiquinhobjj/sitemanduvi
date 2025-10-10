import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Users, Heart, MessageCircle, Share2 } from 'lucide-react'

const InstagramPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12">
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
              <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Instagram</h1>
                <p className="text-xl text-gray-600">@institutomanduvi</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Acompanhe nosso dia a dia, projetos e conquistas através de fotos e vídeos que mostram o impacto real do nosso trabalho.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">12.5K</div>
              <div className="text-gray-600">Seguidores</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">2.1K</div>
              <div className="text-gray-600">Curtidas/mês</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">156</div>
              <div className="text-gray-600">Comentários/mês</div>
            </div>
          </motion.div>

          {/* Instagram Embed */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Últimas Postagens</h2>
              <p className="text-gray-600">Veja nosso conteúdo mais recente no Instagram</p>
            </div>
            
            {/* Instagram Feed Embed */}
            <div className="p-6">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Instagram className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Feed do Instagram</h3>
                  <p className="text-gray-600 mb-4">Conteúdo em tempo real das nossas postagens</p>
                  <a
                    href="https://www.instagram.com/institutomanduvi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    Seguir no Instagram
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Destaques</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Projetos</div>
                    <div className="text-sm text-gray-600">Conheça nossos projetos em ação</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Conquistas</div>
                    <div className="text-sm text-gray-600">Momentos especiais e premiações</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Educação</div>
                    <div className="text-sm text-gray-600">Conteúdo educativo e dicas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engajamento</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxa de engajamento</span>
                  <span className="font-semibold text-green-600">8.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Alcance médio</span>
                  <span className="font-semibold text-blue-600">3.2K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Impressões/mês</span>
                  <span className="font-semibold text-purple-600">15.8K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Salvamentos</span>
                  <span className="font-semibold text-pink-600">234</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default InstagramPage
