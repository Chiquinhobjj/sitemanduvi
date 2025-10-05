import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  initiatives,
  initiativeKpis,
  initiativeGallery,
  initiativeAgenda,
  initiativeActions,
  initiativePartners
} from '@/data/initiatives.js'
import { ArrowRight, PlayCircle } from 'lucide-react'

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
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const ProjectsSection = () => {
  const [activeId, setActiveId] = useState(initiatives[0]?.id)
  const activeInitiative = useMemo(
    () => initiatives.find((initiative) => initiative.id === activeId) ?? initiatives[0],
    [activeId]
  )

  return (
    <section className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[36px] border border-primary/15 bg-primary/10 px-6 sm:px-10 py-10 sm:py-14 shadow-xl overflow-hidden"
        >
          <motion.div variants={itemVariants} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Portfólio de impacto Manduvi
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Iniciativas que unem acolhimento, tecnologia e investimentos para transformar territórios.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
              Cada programa foi desenhado como uma oferta completa: diagnóstico territorial, metodologia própria, indicadores em tempo real e uma rede de parceiros que acelera resultados socioambientais.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {initiativeKpis.map((kpi) => (
              <motion.div
                key={kpi.label}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-3xl bg-white/80 backdrop-blur px-5 py-6 border border-white/70 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-primary">
                  <kpi.icon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                    {kpi.label}
                  </span>
                </div>
                <div className="text-2xl font-semibold text-foreground leading-tight">{kpi.value}</div>
                <p className="text-sm text-primary/80 font-medium">{kpi.delta}</p>
                <p className="text-sm text-foreground/65 leading-relaxed">{kpi.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] bg-white/95 border border-border/50 shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[320px_1fr]">
            <div className="bg-gradient-to-br from-primary/15 via-white to-primary/5 border-b lg:border-b-0 lg:border-r border-border/40 px-5 sm:px-6 py-6 sm:py-8 space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">Portfólio</p>
              <h3 className="text-2xl font-bold text-foreground leading-snug">
                Escolha uma iniciativa e veja dados, histórias e oportunidades de entrada.
              </h3>
              <div className="space-y-2 pt-4">
                {initiatives.map((initiative) => {
                  const isActive = activeInitiative?.id === initiative.id
                  return (
                    <button
                      key={initiative.id}
                      type="button"
                      onClick={() => setActiveId(initiative.id)}
                      className={`w-full text-left rounded-2xl px-4 py-3 transition-all flex items-start gap-3 border ${
                        isActive ? 'bg-primary text-primary-foreground border-primary' : 'bg-white border-border/50 text-foreground/75'
                      }`}
                    >
                      <span
                        className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full ${
                          isActive ? 'bg-white/20' : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <initiative.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{initiative.name}</p>
                        <p className="text-xs text-foreground/60">{initiative.pillar}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInitiative?.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold">
                      {activeInitiative?.pillar}
                    </p>
                    <h3 className="text-3xl font-bold text-foreground leading-tight">
                      {activeInitiative?.headline}
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      {activeInitiative?.intro}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {activeInitiative?.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground/80"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-lg hover:bg-secondary transition-colors">
                      Abrir dossiê da iniciativa
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-2xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                      Agendar conversa estratégica
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8"
        >
          <motion.div variants={itemVariants} className="rounded-[32px] border border-border/40 bg-white/90 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <PlayCircle className="h-8 w-8 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">Agenda viva</p>
                <h3 className="text-2xl font-bold text-foreground leading-tight">Experiências e entregas nos próximos 45 dias</h3>
              </div>
            </div>
            <div className="space-y-4">
              {initiativeAgenda.map((event) => (
                <motion.div
                  key={event.title}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-2xl border border-border/40 bg-white px-4 py-4 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      <event.icon className="h-4 w-4" />
                      {event.date}
                    </div>
                    <span className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                      {event.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{event.description}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{event.location}</p>
                  <button className="self-start mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
                    {event.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-[32px] border border-border/40 bg-white/95 shadow-xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 text-primary p-3">
                <PlayCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">Galeria viva</p>
                <h3 className="text-xl font-bold text-foreground leading-tight">Narrativas visuais das entregas Manduvia</h3>
              </div>
            </div>
            <div className="space-y-4">
              {initiativeGallery.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/5"
                >
                  <div className="h-44 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="px-4 py-3 space-y-1">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-foreground/70 leading-relaxed">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {initiativeActions.map((action) => (
            <motion.div
              key={action.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-border/40 bg-white/95 shadow-lg p-6 sm:p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 text-primary p-3">
                  <action.icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{action.title}</h4>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed flex-1">{action.description}</p>
              <div className="flex flex-col gap-2">
                <button className="inline-flex items-center justify-center rounded-2xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold shadow hover:bg-secondary transition-colors">
                  {action.primaryLabel}
                </button>
                <button className="inline-flex items-center justify-center rounded-2xl border border-primary/25 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                  {action.secondaryLabel}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[28px] border border-border/40 bg-white/95 shadow-lg px-6 sm:px-8 py-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">Alianças Manduvia</p>
              <h3 className="text-2xl font-bold text-foreground leading-tight">Parceiros que sustentam entregas contínuas</h3>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10">
              Quero ser parceiro
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {initiativePartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-3xl border border-border/40 bg-white px-4 py-6 text-center flex flex-col items-center gap-2"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {partner.name.charAt(0)}
                  </div>
                )}
                <p className="text-sm font-semibold text-foreground">{partner.name}</p>
                <p className="text-xs text-foreground/60 leading-snug">{partner.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
