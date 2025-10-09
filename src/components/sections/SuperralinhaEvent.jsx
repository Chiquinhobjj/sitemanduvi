import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, Award, Heart, Star, ArrowLeft, Trophy, Target, Zap, FileText, AlertCircle, Info, CheckCircle, Download, Eye, File, X, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { publications, documentCategories, documentTypes } from '@/data/publications.js'

const SuperralinhaEvent = () => {
  const navigate = useNavigate()
  const [selectedDocument, setSelectedDocument] = useState(null)
  const publicationsRef = useRef(null)

  const scrollToPublications = () => {
    publicationsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openDocumentPopup = (publication) => {
    setSelectedDocument(publication)
  }

  const closeDocumentPopup = () => {
    setSelectedDocument(null)
  }

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeDocumentPopup()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

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
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate('/events')}
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Eventos
            </button>
          </motion.div>

          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Trophy className="h-5 w-5" />
                Campeonato de Futebol Society
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
              <span className="text-yellow-500">SUPER</span> <span className="text-blue-600">RALINHA</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              O maior campeonato de futebol society da comunidade Manduvi, onde esporte, integração e 
              celebração se unem para fortalecer laços e promover valores através do futebol.
            </p>
          </motion.div>

          {/* Event Banner */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/BANNER_superralinha@4x.webp"
                alt="Banner do Superralinha - Campeonato de Futebol Society"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Publications Banner */}
          <motion.div variants={itemVariants} className="text-center">
            <button
              onClick={scrollToPublications}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-yellow-50 hover:from-blue-100 hover:to-yellow-100 border border-blue-200 rounded-3xl px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                  Publicações do Evento
                </h3>
                <p className="text-sm text-foreground/70">
                  Documentos oficiais, regulamentos e esclarecimentos
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Event Info Cards */}
          <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Calendar, label: 'Data', value: 'Anual', color: 'bg-blue-50 text-blue-600' },
              { icon: MapPin, label: 'Local', value: 'Mato Grosso', color: 'bg-green-50 text-green-600' },
              { icon: Users, label: 'Times', value: '16+ times', color: 'bg-purple-50 text-purple-600' },
              { icon: Trophy, label: 'Modalidade', value: 'Futebol Society', color: 'bg-yellow-50 text-yellow-600' }
            ].map((info, index) => (
              <div key={index} className="bg-white/95 border border-border/50 rounded-2xl p-6 text-center">
                <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center mx-auto mb-3`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                <p className="text-foreground/70">{info.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Event */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Sobre o Campeonato</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  O Superralinha é o maior campeonato de futebol society da comunidade Manduvi, 
                  um evento que une esporte, integração e celebração em uma competição que vai 
                  além dos gramados, fortalecendo laços e promovendo valores através do futebol.
                </p>
                <p>
                  Durante o campeonato, times de diferentes iniciativas do Instituto Manduvi, 
                  voluntários, parceiros e apoiadores se reúnem para competir, celebrar e 
                  compartilhar experiências únicas através do esporte.
                </p>
                <p>
                  É um momento especial onde a paixão pelo futebol se encontra com nossa missão 
                  de transformação social, criando oportunidades de integração e celebração 
                  através do esporte mais popular do Brasil.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Destaques</h2>
              <div className="space-y-4">
                {[
                  { icon: Trophy, title: 'Competição de Futebol Society', desc: 'Campeonato com times de diferentes iniciativas do Instituto Manduvi' },
                  { icon: Award, title: 'Cerimônia de Premiação', desc: 'Reconhecimento dos melhores times, jogadores e fair play' },
                  { icon: Target, title: 'Torneio Eliminatório', desc: 'Sistema de disputa emocionante com mata-mata e finais' },
                  { icon: Zap, title: 'Atividades Paralelas', desc: 'Workshops, palestras e integração entre participantes' }
                ].map((highlight, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white/50 rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                      <p className="text-sm text-foreground/70">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Impact Numbers */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Números do Superralinha</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { number: '16+', label: 'Times participantes' },
                { number: '200+', label: 'Jogadores inscritos' },
                { number: '3', label: 'Dias de competição' },
                { number: '100%', label: 'Fair play garantido' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>


          {/* Publications Section */}
          <motion.div ref={publicationsRef} variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-center">Publicações do Evento</h2>
            
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Documents */}
              <div className="bg-white/95 border border-border/50 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Documentos Oficiais</h3>
                </div>
                
                <div className="space-y-4">
                  {publications.map((publication) => {
                    const docType = documentTypes.find(type => type.id === publication.type)
                    const category = documentCategories.find(cat => cat.id === publication.category)
                    
                    return (
                      <div key={publication.id} className="border border-border/30 rounded-2xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs text-foreground/60 bg-blue-50 px-2 py-1 rounded-full">
                                {new Date(publication.date).toLocaleDateString('pt-BR')}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${category?.color}`}>
                                {category?.icon} {category?.name}
                              </span>
                              <span className="text-xs text-blue-600 font-medium uppercase">
                                {docType?.icon} {docType?.name}
                              </span>
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">{publication.title}</h4>
                            <p className="text-sm text-foreground/70 mb-3">{publication.description}</p>
                            <div className="flex items-center gap-4 text-xs text-foreground/60">
                              <span className="flex items-center gap-1">
                                <File className="h-3 w-3" />
                                {publication.file.size}
                              </span>
                              <span>{publication.file.pages} páginas</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => openDocumentPopup(publication)}
                              className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                            >
                              <Eye className="h-4 w-4" />
                              Visualizar
                            </button>
                            <a
                              href={publication.file.url}
                              download={publication.file.name}
                              className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                            >
                              <Download className="h-4 w-4" />
                              Baixar
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Clarifications */}
              <div className="bg-white/95 border border-border/50 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Esclarecimentos</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Info,
                      title: 'Inscrições de Times',
                      content: 'As inscrições para o Superralinha 2024 estão abertas até 30/10. Cada time deve ter no mínimo 7 jogadores e no máximo 12.',
                      type: 'info'
                    },
                    {
                      icon: CheckCircle,
                      title: 'Documentação Necessária',
                      content: 'Todos os jogadores devem apresentar RG, CPF e atestado médico válido no dia da competição.',
                      type: 'success'
                    },
                    {
                      icon: AlertCircle,
                      title: 'Uniforme Obrigatório',
                      content: 'Cada time deve ter uniforme completo (camisa, short e meias) com numeração de 1 a 12. Uniformes serão verificados antes de cada jogo.',
                      type: 'warning'
                    },
                    {
                      icon: Info,
                      title: 'Premiação',
                      content: 'Serão premiados: 1º lugar (troféu + medalhas), 2º lugar (medalhas), 3º lugar (medalhas) e melhor jogador do campeonato.',
                      type: 'info'
                    },
                    {
                      icon: CheckCircle,
                      title: 'Alimentação',
                      content: 'O Instituto Manduvi fornecerá lanche e hidratação para todos os participantes durante os dias de competição.',
                      type: 'success'
                    },
                    {
                      icon: AlertCircle,
                      title: 'Comportamento',
                      content: 'Qualquer atitude antidesportiva resultará em exclusão do campeonato. O fair play é fundamental.',
                      type: 'warning'
                    }
                  ].map((clarification, index) => (
                    <div key={index} className="flex gap-3 p-3 rounded-2xl bg-gray-50">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        clarification.type === 'info' ? 'bg-blue-50 text-blue-600' :
                        clarification.type === 'success' ? 'bg-green-50 text-green-600' :
                        'bg-yellow-50 text-yellow-600'
                      }`}>
                        <clarification.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{clarification.title}</h4>
                        <p className="text-sm text-foreground/70">{clarification.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Aviso Importante</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Todas as informações sobre o Superralinha são atualizadas regularmente. 
                    Recomendamos que participantes e times acompanhem as publicações oficiais 
                    para ficarem informados sobre eventuais mudanças no regulamento, cronograma 
                    ou procedimentos do campeonato.
                  </p>
                  <p className="text-sm text-foreground/60 mt-2">
                    Para dúvidas específicas, entre em contato através do formulário de contato ou 
                    pelos canais oficiais do Instituto Manduvi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/95 border border-border/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quer participar do próximo Superralinha?
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para inscrever seu time ou receber informações sobre 
                a próxima edição do campeonato de futebol society da comunidade Manduvi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-lg hover:bg-secondary transition-colors"
                >
                  Entrar em contato
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/30 px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
                >
                  Conhecer nossas iniciativas
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Document Popup */}
      <AnimatePresence>
        {selectedDocument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeDocumentPopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{selectedDocument.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {new Date(selectedDocument.date).toLocaleDateString('pt-BR')} • {selectedDocument.file.size}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeDocumentPopup}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-foreground/80 leading-relaxed">{selectedDocument.description}</p>
                </div>
                
                {/* PDF Viewer */}
                <div className="border border-border/30 rounded-2xl overflow-hidden">
                  <iframe
                    src={`${selectedDocument.file.url}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="w-full h-[60vh]"
                    title={selectedDocument.title}
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={selectedDocument.file.url}
                    download={selectedDocument.file.name}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-medium"
                  >
                    <Download className="h-4 w-4" />
                    Baixar PDF
                  </a>
                  <button
                    onClick={() => window.open(selectedDocument.file.url, '_blank')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Abrir em nova aba
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SuperralinhaEvent
