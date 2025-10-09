import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const EventsSection = () => {
  const navigate = useNavigate()

  const events = [
    {
      id: 'superralinha',
      name: 'Superralinha',
      date: '2024',
      location: 'Mato Grosso',
      description: 'Evento especial de integração e celebração das conquistas da comunidade Manduvi',
      image: '/images/hero-background.webp',
      status: 'ativo',
      participants: '500+',
      highlights: [
        'Celebração das conquistas da comunidade',
        'Integração entre participantes',
        'Atividades esportivas e culturais',
        'Reconhecimento de voluntários'
      ]
    }
  ]

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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Eventos <span className="text-primary">Manduvi</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Celebrações, integrações e momentos especiais que unem nossa comunidade em torno da missão de transformar vidas.
            </p>
          </motion.div>

          {/* Events Grid */}
          <motion.div variants={itemVariants} className="grid gap-8 lg:grid-cols-2">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -8 }}
                className="bg-white/95 border border-border/50 rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground">{event.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {event.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants} participantes</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Evento anual</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">{event.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Destaques:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate(`/events/${event.id}`)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-lg hover:bg-secondary transition-colors"
                  >
                    Ver detalhes do evento
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quer participar dos nossos eventos?
              </h3>
              <p className="text-foreground/70 mb-6">
                Fique por dentro das próximas celebrações e integrações da comunidade Manduvi.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-lg hover:bg-secondary transition-colors"
              >
                Entre em contato
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection
