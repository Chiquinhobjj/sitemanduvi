import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

const AboutSection = ({ className = '' }) => {
  const navigate = useNavigate()
  const [expandedSection, setExpandedSection] = useState('mission')

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

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
    <section
      id="about"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="about-gradient rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 space-y-12 max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                <span className="text-secondary">Inovamos para Acolher.</span>{' '}
                <span className="text-foreground/80">Impactamos para Transformar.</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Somos uma SocialTech que transforma vidas e comunidades, desenvolvendo soluções sustentáveis com impacto imediato e duradouro. Inspirados na árvore Manduvi, unimos tecnologia, dados e afeto para acolher e despertar o potencial de cada pessoa no nosso tripé ACOLHER · INOVAR · IMPACTAR.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Atendimentos históricos', value: '150 mil+' },
                  { label: 'Vagas Meu Futuro', value: '13.454' },
                  { label: 'Sensação de segurança', value: '94%' }
                ].map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-border/40 bg-white/70 px-3 py-3 text-left">
                    <p className="text-lg font-semibold text-primary leading-none">{metric.value}</p>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/60 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              <Button
                className="bg-primary hover:bg-secondary text-primary-foreground px-5"
                onClick={() => navigate('/projects')}
              >
                Conheça nossas iniciativas
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Onde estamos',
                    detail: 'Mato Grosso · Rio · São Paulo · Alabama'
                  },
                  {
                    icon: <Calendar className="w-5 h-5" />,
                    title: 'Desde 2004',
                    detail: 'Assistência social, educação, cultura, esporte e renda'
                  },
                  {
                    icon: <Sparkles className="w-5 h-5" />,
                    title: 'Valores',
                    detail: 'Abraço, acolhimento, afeto, inclusão, inovação'
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/40 bg-white/70 px-4 py-4 text-sm text-foreground/75">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      {item.icon}
                      <span className="font-semibold text-foreground text-sm">{item.title}</span>
                    </div>
                    <p className="leading-relaxed text-xs sm:text-sm text-foreground/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg p-4 text-sm bg-[#603813] text-[#f2f2f2] shadow-inner">
              <div className="font-mono space-y-1">
                <div><span className="text-[#f6d5be]">const</span> <span className="text-[#f28b30]">manduvia</span> <span className="text-[#f2f2f2]">= {'{'}</span></div>
                <div className="ml-4">forma: <span className="text-[#f6d5be]">'SocialTech acolhedora'</span>,</div>
                <div className="ml-4">pilastras: <span className="text-[#f28b30]">['Acolher', 'Inovar', 'Impactar']</span>,</div>
                <div className="ml-4">metodologia: <span className="text-[#f6d5be]">'HEXA (Competência • Confiança • Conexão • Caráter • Cuidado • Contribuição)'</span>,</div>
                <div className="ml-4">braços: <span className="text-[#f28b30]">['Educação', 'Inovação', 'Esporte', 'Cultura']</span></div>
                <div><span className="text-[#f2f2f2]">{'}'}</span></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="border border-secondary/30 rounded-lg overflow-hidden bg-white/70">
                <button
                  onClick={() => toggleSection('mission')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/10 transition-colors"
                >
                  <span className="font-medium text-foreground">Missão</span>
                  {expandedSection === 'mission' ? (
                    <ChevronUp className="w-5 h-5 text-foreground/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground/70" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === 'mission' ? 'auto' : 0,
                    opacity: expandedSection === 'mission' ? 1 : 0
                  }}
                  transition={{
                    height: { duration: 0.3, ease: 'easeInOut' },
                    opacity: { duration: 0.2, ease: 'easeInOut' }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-foreground/75 text-sm leading-relaxed">
                    Promover desenvolvimento sustentável e impacto social em parceria com diversos setores, atuando em projetos de esporte, educação, cultura, saúde, tecnologia e geração de renda para transformar vidas e comunidades.
                  </div>
                </motion.div>
              </div>

              <div className="border border-secondary/30 rounded-lg overflow-hidden bg-white/70">
                <button
                  onClick={() => toggleSection('vision')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/10 transition-colors"
                >
                  <span className="font-medium text-foreground">Visão</span>
                  {expandedSection === 'vision' ? (
                    <ChevronUp className="w-5 h-5 text-foreground/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground/70" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === 'vision' ? 'auto' : 0,
                    opacity: expandedSection === 'vision' ? 1 : 0
                  }}
                  transition={{
                    height: { duration: 0.3, ease: 'easeInOut' },
                    opacity: { duration: 0.2, ease: 'easeInOut' }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-foreground/75 text-sm leading-relaxed">
                    Ser referência em desenvolvimento sustentável e impacto social positivo, ampliando iniciativas colaborativas e inovadoras para garantir um futuro justo, inclusivo e sustentável.
                  </div>
                </motion.div>
              </div>

              <div className="border border-secondary/30 rounded-lg overflow-hidden bg-white/70">
                <button
                  onClick={() => toggleSection('values')}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/10 transition-colors"
                >
                  <span className="font-medium text-foreground">Valores e Cultura</span>
                  {expandedSection === 'values' ? (
                    <ChevronUp className="w-5 h-5 text-foreground/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground/70" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === 'values' ? 'auto' : 0,
                    opacity: expandedSection === 'values' ? 1 : 0
                  }}
                  transition={{
                    height: { duration: 0.3, ease: 'easeInOut' },
                    opacity: { duration: 0.2, ease: 'easeInOut' }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-foreground/75 text-sm leading-relaxed space-y-2">
                    <p>Inovação e transformação, inclusão e diversidade, colaboração e parceria, responsabilidade social e transparência guiam nossas decisões. Todas as ações são alimentadas pelo compromisso com a sustentabilidade e o empoderamento comunitário.</p>
                    <p>Realizamos tudo isso por meio da Manduvia — nossa anfitriã digital —, do Observatório Coloiado e da rede de voluntários que mantém o Manduvi vivo.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
