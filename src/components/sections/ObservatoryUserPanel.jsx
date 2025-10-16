import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Lock,
  Shield,
  UserCog,
  UserPlus
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' }
  }
}

const ObservatoryUserPanel = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="rounded-[32px] border border-primary/20 bg-white/85 backdrop-blur px-6 sm:px-10 py-12 shadow-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                <UserCog className="h-4 w-4" />
                Gestão de acessos
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight">
                Painel de usuários do Observatório Manduvi.
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Esta visualização está protegida e exibe apenas a estrutura dos indicadores. Dados reais de usuários e atendimentos ficam visíveis apenas para perfis autorizados.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="h-4 w-4" />
                  Autenticação multifator ativa
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
                  <Shield className="h-4 w-4" />
                  Logs auditáveis MCP
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <button
                disabled
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl bg-muted text-foreground/50 px-5 py-3 text-sm font-semibold shadow-lg cursor-not-allowed"
              >
                <UserPlus className="h-4 w-4" />
                Criar novo usuário
              </button>
              <button
                disabled
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50 cursor-not-allowed"
              >
                <Lock className="h-4 w-4" />
                Sincronizar com MCP
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {['Usuários ativos', 'Distribuição por projeto', 'Atendimentos por região'].map((title) => (
            <motion.div
              key={title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative overflow-hidden rounded-3xl border border-border/40 bg-white/80 px-6 py-6 shadow-sm"
            >
              <div className="absolute inset-0 bg-muted/60 backdrop-blur-sm" />
              <div className="relative flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                  {title}
                </p>
                <p className="text-3xl font-bold text-foreground/30">•••</p>
                <p className="text-sm text-foreground/40">
                  Dados protegidos — acesse com credenciais autorizadas.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[28px] border border-border/40 bg-white/90 shadow-lg"
        >
          <div className="absolute inset-0 bg-muted/60 backdrop-blur-sm" />
          <div className="relative flex flex-col items-center justify-center gap-4 px-6 sm:px-8 py-16 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground/60 uppercase tracking-[0.3em]">
              Acesso restrito
            </span>
            <h2 className="text-2xl font-bold text-foreground/70">
              Diretório de usuários protegido
            </h2>
            <p className="max-w-2xl text-sm text-foreground/55 leading-relaxed">
              As listas completas de usuários, projetos e atendimentos só ficam visíveis após autenticação e deferimento da equipe guardiã de dados. Solicite credencial para liberar esta visão.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[28px] border border-border/40 bg-white/90 shadow-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Checklist rápido</h3>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Shield className="h-4 w-4" />
                Governança viva
              </span>
            </div>
            <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                Todos os guardiões precisam revisar logs críticos a cada 48 horas.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                Convites pendentes expiram automaticamente após 7 dias sem aceite.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                Parceiros externos possuem escopos limitados para indicadores públicos.
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-border/40 bg-white/90 shadow-lg p-6 sm:p-8">
            <div className="absolute inset-0 bg-muted/60 backdrop-blur-sm" />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground/50">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground/70">Atividades recentes</h3>
              <p className="text-sm text-foreground/55 leading-relaxed">
                Logs e eventos ficam disponíveis apenas para guardiões autenticados. Entre em contato com a equipe de dados para receber um relatório assinado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ObservatoryUserPanel
