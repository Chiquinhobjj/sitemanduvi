import { motion } from 'framer-motion'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { initiatives } from '@/data/initiatives.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

const InitiativeDetail = () => {
  const navigate = useNavigate()
  const { initiativeId } = useParams()
  const initiative = initiatives.find((item) => item.id === initiativeId)

  if (!initiative) {
    return <Navigate to="/projects" replace />
  }

  const { landing = {} } = initiative
  const {
    hero,
    metrics = [],
    proofPoints = [],
    experience,
    testimonials = [],
    gallery = [],
    timeline = [],
    faqs = [],
    support
  } = landing

  const Icon = initiative.icon

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-white to-secondary/5" />
        {hero?.media?.src && hero.media.type === 'image' && (
          <img
            src={hero.media.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
        )}
        <div className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para iniciativas
            </button>
            <span className="text-xs uppercase tracking-[0.3em] text-primary/80 hidden sm:inline-flex">
              {initiative.pillar}
            </span>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="inline-flex items-center gap-3 text-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">
                    {hero?.eyebrow ?? initiative.pillar}
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                    {hero?.title ?? initiative.name}
                  </h1>
                </div>
              </div>
              <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed max-w-3xl">
                {hero?.subtitle ?? initiative.headline}
              </p>
              <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
                {hero?.description ?? initiative.intro}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {hero?.primaryCta?.label && (
                  <a
                    href={hero.primaryCta.href ?? '#contato'}
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-lg hover:bg-secondary transition-colors"
                  >
                    {hero.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
                {hero?.secondaryCta?.label && (
                  <a
                    href={hero.secondaryCta.href ?? '#materiais'}
                    className="inline-flex items-center gap-2 rounded-2xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                  >
                    {hero.secondaryCta.label}
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[28px] border border-white/60 bg-white/85 backdrop-blur shadow-xl p-6 sm:p-8 space-y-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">Por que investir agora</p>
              <ul className="space-y-3 text-sm text-foreground/75 leading-relaxed">
                {proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-4 w-4 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {!!metrics.length && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[24px] border border-border/40 bg-white/95 shadow-lg px-5 py-6 space-y-2"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">
                  {metric.label}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  {metric.value}
                </p>
                {metric.trend && <p className="text-sm font-medium text-primary/80">{metric.trend}</p>}
                <p className="text-sm text-foreground/65 leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {experience?.steps?.length && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto rounded-[28px] border border-border/40 bg-white/95 shadow-xl p-6 sm:p-8">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-foreground mb-6"
            >
              {experience.title}
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {experience.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="rounded-3xl bg-primary/5 border border-primary/15 px-5 py-6 space-y-3"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-lg font-semibold text-foreground">{step.title}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {!!gallery.length && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-foreground">
              Bastidores e momentos que contam a história
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4">
              {gallery.map((item) => (
                <motion.div
                  key={item.caption ?? item.image}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group rounded-[28px] overflow-hidden border border-border/40 shadow-lg"
                >
                  <div
                    className="h-52 sm:h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="px-4 py-4 space-y-1 bg-white/95">
                    <p className="text-sm font-semibold text-foreground">{item.title ?? hero?.title ?? initiative.name}</p>
                    <p className="text-xs text-foreground/65">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {!!testimonials.length && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <motion.blockquote
                key={testimonial.quote}
                variants={fadeUp}
                className="rounded-[32px] bg-primary/10 border border-primary/20 px-6 sm:px-8 py-8 sm:py-10 shadow-lg"
              >
                <p className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-4 text-sm font-medium text-primary/90">
                  {testimonial.author} · <span className="text-primary/70">{testimonial.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </section>
      )}

      {!!timeline.length && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-foreground">
              Linha do tempo e próximos ciclos
            </motion.h2>
            <div className="relative border-l border-primary/30 pl-6 space-y-5">
              {timeline.map((milestone) => (
                <motion.div key={`${milestone.year}-${milestone.milestone}`} variants={fadeUp} className="relative space-y-1">
                  <div className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-primary/50 bg-primary/20" />
                  <p className="text-sm font-semibold text-primary">{milestone.year}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{milestone.milestone}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {!!faqs.length && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-5xl mx-auto space-y-4"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-foreground">
              Perguntas frequentes
            </motion.h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="rounded-2xl border border-border/40 bg-white/95 shadow-sm px-4 py-4"
                >
                  <p className="text-sm font-semibold text-foreground">{faq.question}</p>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {support?.headline && (
        <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto rounded-[32px] border border-primary/25 bg-primary/10 px-6 sm:px-8 py-10 shadow-xl text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">{support.headline}</h2>
            <p className="text-base text-foreground/75 leading-relaxed max-w-3xl mx-auto">
              {support.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {support.actions?.map((action) => (
                <a
                  key={action.label}
                  href={action.href ?? '#contato'}
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow hover:bg-secondary transition-colors"
                >
                  {action.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default InitiativeDetail
