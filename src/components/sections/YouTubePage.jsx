import { motion } from 'framer-motion'
import { Youtube, ExternalLink, Users, Play, Eye, MessageCircle } from 'lucide-react'

const YouTubePage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12">
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
              <div className="p-4 rounded-full bg-gradient-to-r from-red-500 to-red-700">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">YouTube</h1>
                <p className="text-xl text-gray-600">@institutomanduvi</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Vídeos educativos, depoimentos e conteúdo exclusivo sobre nossos projetos e metodologias.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">2.1K</div>
              <div className="text-gray-600">Inscritos</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">45.2K</div>
              <div className="text-gray-600">Visualizações</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Play className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">156</div>
              <div className="text-gray-600">Vídeos</div>
            </div>
          </motion.div>

          {/* YouTube Embed */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Canal do YouTube</h2>
              <p className="text-gray-600">Conteúdo educativo e depoimentos em vídeo</p>
            </div>
            
            {/* YouTube Channel Embed */}
            <div className="p-6">
              <div className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Youtube className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Canal do YouTube</h3>
                  <p className="text-gray-600 mb-4">Vídeos educativos e conteúdo exclusivo</p>
                  <a
                    href="https://www.youtube.com/@institutomanduvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                    Inscrever-se
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Videos */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vídeos em Destaque</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <Play className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">"O Fim da Desistência"</h4>
                <p className="text-sm text-gray-600 mb-2">Documentário sobre o Programa Meu Futuro</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>1.2K visualizações</span>
                  <span>89 curtidas</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <Play className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Superralinha 2023</h4>
                <p className="text-sm text-gray-600 mb-2">Cerimônia de Premiação - Momentos emocionantes</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>856 visualizações</span>
                  <span>67 curtidas</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <Play className="w-8 h-8 text-yellow-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">ManduvIA Mentor</h4>
                <p className="text-sm text-gray-600 mb-2">Tutorial: Como usar a plataforma</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>2.1K visualizações</span>
                  <span>134 curtidas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Categories */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categorias de Conteúdo</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎥</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Documentários</div>
                    <div className="text-sm text-gray-600">Histórias de transformação</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Eventos</div>
                    <div className="text-sm text-gray-600">Superralinha e premiações</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Tutoriais</div>
                    <div className="text-sm text-gray-600">Como usar nossas plataformas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Métricas do Canal</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tempo de visualização</span>
                  <span className="font-semibold text-red-600">2.3K horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxa de retenção</span>
                  <span className="font-semibold text-green-600">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Comentários/mês</span>
                  <span className="font-semibold text-blue-600">43</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Crescimento</span>
                  <span className="font-semibold text-purple-600">+15%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default YouTubePage
