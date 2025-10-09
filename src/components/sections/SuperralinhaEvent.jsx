import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, Award, Heart, Star, ArrowLeft, Trophy, Target, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SuperralinhaEvent = () => {
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
    </section>
  )
}

export default SuperralinhaEvent
