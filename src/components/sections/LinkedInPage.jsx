import { motion } from 'framer-motion'
import { Linkedin, ExternalLink, Users, TrendingUp, MessageCircle, Share2 } from 'lucide-react'

const LinkedInPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 py-12">
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
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-900">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">LinkedIn</h1>
                <p className="text-xl text-gray-600">Instituto Manduvi</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Conecte-se profissionalmente e acompanhe nosso impacto social através de conteúdo corporativo e networking.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-8 h-8 text-blue-700 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">3.8K</div>
              <div className="text-gray-600">Seguidores</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">12.4%</div>
              <div className="text-gray-600">Crescimento/mês</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">89</div>
              <div className="text-gray-600">Comentários/mês</div>
            </div>
          </motion.div>

          {/* LinkedIn Embed */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Página da Empresa</h2>
              <p className="text-gray-600">Conteúdo profissional e networking corporativo</p>
            </div>
            
            {/* LinkedIn Company Page Embed */}
            <div className="p-6">
              <div className="aspect-video max-w-2xl mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Linkedin className="w-16 h-16 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Página da Empresa</h3>
                  <p className="text-gray-600 mb-4">Conteúdo profissional em tempo real</p>
                  <a
                    href="https://www.linkedin.com/company/instituto-manduvi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    Seguir Empresa
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conteúdo Profissional</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Metodologia HEXA</div>
                    <div className="text-sm text-gray-600">Desenvolvimento profissional</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">💼</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Parcerias Estratégicas</div>
                    <div className="text-sm text-gray-600">Colaborações corporativas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📈</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Relatórios de Impacto</div>
                    <div className="text-sm text-gray-600">Transparência corporativa</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Métricas Profissionais</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Alcance semanal</span>
                  <span className="font-semibold text-blue-600">2.8K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Engajamento</span>
                  <span className="font-semibold text-green-600">9.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Compartilhamentos</span>
                  <span className="font-semibold text-purple-600">67</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conexões</span>
                  <span className="font-semibold text-orange-600">1.2K</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Content */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Destaques Profissionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">Parceria Times/UFMT</div>
                <div className="text-sm text-gray-600">Projeto LONGEVIDADE SAUDÁVEL</div>
                <div className="text-xs text-blue-600 mt-1">Ciência e tecnologia</div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-semibold text-gray-900">Relatório de Impacto 2024</div>
                <div className="text-sm text-gray-600">NPS 94%, 150K+ atendimentos</div>
                <div className="text-xs text-green-600 mt-1">Transparência total</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LinkedInPage
