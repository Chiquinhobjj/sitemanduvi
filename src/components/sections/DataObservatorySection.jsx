import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BarChart4,
  CheckCircle2,
  Database,
  Loader2,
  Radar,
  Network,
  Server,
  ShieldCheck
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis
} from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { useObservatoryData } from '@/hooks/use-observatory-data'

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const chartNumberFormatter = (value) => {
  if (value === undefined || value === null) {
    return ''
  }

  if (value >= 1000) {
    return `${Math.round(value / 100) / 10}k`
  }

  return value
}

const millionFormatter = (value) => {
  if (value === undefined || value === null) {
    return ''
  }

  return `R$ ${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  })} mi`
}

const satisfactionFormatter = (value) => {
  if (value === undefined || value === null) {
    return ''
  }

  return `${value.toLocaleString('pt-BR')}%`
}

const instituteTrendConfig = {
  beneficiarios: {
    label: 'Pessoas alcançadas',
    color: 'hsl(var(--primary))'
  },
  investimento: {
    label: 'Investimento (R$ mi)',
    color: '#0f172a'
  },
  horasFormacao: {
    label: 'Horas de formação',
    color: '#4c1d95'
  }
}

const projectEngagementConfig = {
  familias: {
    label: 'Famílias / Jovens atendidos',
    color: 'hsl(var(--primary))'
  },
  trilhasConcluidas: {
    label: 'Trilhas concluídas',
    color: '#1d4ed8'
  },
  hubsAtivos: {
    label: 'Hubs/ Missões ativas',
    color: '#0f172a'
  },
  missoesCampo: {
    label: 'Missões de campo',
    color: '#0f172a'
  },
  satisfacao: {
    label: 'Satisfação',
    color: '#16a34a'
  },
  empregabilidade: {
    label: 'Empregabilidade',
    color: '#16a34a'
  },
  rendaMedia: {
    label: 'Renda média +%',
    color: '#f97316'
  },
  carbono: {
    label: 'Carbono evitado',
    color: '#14b8a6'
  },
  mentorias: {
    label: 'Mentorias',
    color: '#7c3aed'
  }
}

const statusColorMap = {
  online: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  sincronizando: 'bg-sky-100 text-sky-800 border-sky-200',
  manutencao: 'bg-amber-100 text-amber-800 border-amber-200'
}

const formatIndicatorValue = (indicator) => {
  if (indicator == null) {
    return '--'
  }

  const { value } = indicator
  if (value === undefined || value === null || Number.isNaN(value)) {
    return '--'
  }

  if (typeof value !== 'number') {
    return value
  }

  const label = indicator.label?.toLowerCase?.() ?? ''
  const targetHasPercent = typeof indicator.target === 'string' && indicator.target.includes('%')
  const percentKeywords = ['percentual', 'índice', 'satisfação', 'empregabilidade', 'renda', '%']
  if (targetHasPercent || percentKeywords.some((keyword) => label.includes(keyword))) {
    return `${value.toLocaleString('pt-BR')}%`
  }

  if (label.includes('investimento') || label.includes('receita') || label.includes('aporte')) {
    return `R$ ${value.toLocaleString('pt-BR')}`
  }

  return value.toLocaleString('pt-BR')
}

const ProjectChart = ({ projectTrend }) => {
  if (!projectTrend || !projectTrend.length) {
    return (
      <div className="rounded-3xl border border-dashed border-border/50 p-10 text-center text-sm text-foreground/60">
        Dados históricos indisponíveis para este projeto.
      </div>
    )
  }

  const first = projectTrend[0]
  const barKeys = [
    'missoesCampo',
    'hubsAtivos',
    'trilhasConcluidas',
    'mentorias',
    'familias',
    'carbono'
  ].filter((key) => first?.[key] !== undefined)

  const showSatisfaction = projectTrend.some((item) => item.satisfacao !== undefined)
  const showEmployability = projectTrend.some((item) => item.empregabilidade !== undefined)
  const showIncome = projectTrend.some((item) => item.rendaMedia !== undefined)

  return (
    <ChartContainer
      id="project-trend"
      config={projectEngagementConfig}
      className="rounded-3xl border border-border/50 bg-white/70 p-4"
    >
      <ComposedChart data={projectTrend} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="4 4" className="stroke-border/70" />
        <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
        <YAxis tickLine={false} axisLine={false} className="text-xs" />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => (
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-foreground/70">{projectEngagementConfig[name]?.label ?? name}</span>
                  <span className="font-semibold text-foreground">
                    {name === 'satisfacao' || name === 'empregabilidade'
                      ? `${value}%`
                      : value.toLocaleString('pt-BR')}
                  </span>
                </div>
              )}
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        {barKeys.map((key) => (
          <Bar key={key} dataKey={key} radius={[6, 6, 0, 0]} fill={`var(--color-${key})`} />
        ))}
        {showSatisfaction && (
          <Line
            type="monotone"
            dataKey="satisfacao"
            stroke="var(--color-satisfacao)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        )}
        {showEmployability && (
          <Line
            type="monotone"
            dataKey="empregabilidade"
            stroke="var(--color-empregabilidade)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        )}
        {showIncome && (
          <Line
            type="monotone"
            dataKey="rendaMedia"
            stroke="var(--color-rendaMedia)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        )}
      </ComposedChart>
    </ChartContainer>
  )
}

const ProjectSelector = ({ projects, selectedProjectId, onSelect, loading }) => {
  if (!projects?.length) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3">
      {projects.map((project) => {
        const isActive = project.id === selectedProjectId
        return (
          <button
            key={project.id}
            type="button"
            disabled={loading && !isActive}
            onClick={() => onSelect(project.id)}
            className={`rounded-2xl border px-4 py-2 text-sm transition-all ${
              isActive
                ? 'border-primary bg-primary text-primary-foreground shadow-md'
                : 'border-border bg-white/80 text-foreground/70 hover:bg-primary/10 hover:text-primary'
            } ${loading && !isActive ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {project.name}
          </button>
        )
      })}
    </div>
  )
}

const ObservatorioBadge = () => (
  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
    <Radar className="h-4 w-4" />
    Observatório Manduvi
  </div>
)

const InstituteIndicatorCard = ({ indicator }) => (
  <motion.div
    variants={containerVariants}
    className="rounded-3xl border border-primary/15 bg-white/80 backdrop-blur px-5 py-6 shadow-sm"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">{indicator.source}</p>
        <h3 className="mt-3 text-3xl font-bold text-foreground">
          {indicator.id === 'investment'
            ? millionFormatter(indicator.value)
            : indicator.id === 'satisfaction'
              ? satisfactionFormatter(indicator.value)
              : indicator.value.toLocaleString('pt-BR')}
        </h3>
      </div>
      <BarChart4 className="h-8 w-8 text-primary" />
    </div>
    <p className="mt-4 text-sm font-semibold text-primary/80">{indicator.variation}</p>
    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{indicator.description}</p>
  </motion.div>
)

const DataSourceCard = ({ source }) => {
  const statusKey = typeof source.status === 'string' ? source.status.toLowerCase() : 'online'
  const badgeClass = statusColorMap[statusKey] ?? 'bg-muted text-foreground border-border'
  const reliabilityLabel =
    typeof source.reliability === 'number'
      ? `${Math.round(source.reliability * 100)}%`
      : 'Consultar equipe'
  return (
    <motion.div
      variants={containerVariants}
      className="rounded-3xl border border-border/40 bg-white/80 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-foreground">{source.name}</h4>
          <p className="text-sm text-foreground/65 leading-relaxed mt-1">{source.description}</p>
        </div>
        <Database className="h-6 w-6 text-primary" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-semibold ${badgeClass}`}>
          <Activity className="h-4 w-4" />
          {statusKey === 'online'
            ? 'Operação estável'
            : statusKey === 'sincronizando'
              ? 'Sincronizando'
              : 'Em manutenção' }
        </span>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-primary/80 font-semibold">
          Última sincronização: {source.lastSync}
        </span>
        <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary font-semibold">
          Cobertura: {source.coverage}
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-semibold">
          Confiabilidade: {reliabilityLabel}
        </span>
      </div>
    </motion.div>
  )
}

const FlowCard = ({ step, index }) => (
  <motion.div
    variants={containerVariants}
    className="rounded-3xl border border-border/30 bg-gradient-to-br from-white via-primary/5 to-primary/10 p-6 shadow-sm"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
        <p className="text-sm text-foreground/70 leading-relaxed mt-1">{step.description}</p>
      </div>
    </div>
  </motion.div>
)

const ProjectIndicatorCard = ({ indicator }) => (
  <motion.div
    variants={containerVariants}
    className="rounded-3xl border border-border/40 bg-white/90 p-5 shadow-sm"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-primary/70 font-semibold">
          {indicator.source}
        </p>
        <h4 className="mt-3 text-2xl font-bold text-foreground">
          {formatIndicatorValue(indicator)}
        </h4>
      </div>
      <Server className="h-6 w-6 text-primary" />
    </div>
    <p className="mt-3 text-sm font-semibold text-primary/80">{indicator.variation}</p>
    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{indicator.description}</p>
    {indicator.target && (
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
        {indicator.target}
      </p>
    )}
  </motion.div>
)

const InsightList = ({ insights }) => (
  <ul className="space-y-3">
    {insights.map((insight) => (
      <li key={insight} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
        <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
        {insight}
      </li>
    ))}
  </ul>
)

const SectionHeader = ({ title, description }) => (
  <div className="space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">{title}</p>
    <h2 className="text-3xl font-bold text-foreground leading-tight">{description}</h2>
  </div>
)

const DataObservatorySection = () => {
  const {
    loading,
    projectLoading,
    error,
    instituteIndicators,
    trendSeries,
    projects,
    dataSources,
    integrationFlow,
    complianceHighlights,
    selectedProject,
    selectedProjectId,
    projectIndicators,
    projectTrend,
    projectInsights,
    selectProject
  } = useObservatoryData()

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="rounded-[40px] border border-primary/20 bg-white/80 backdrop-blur px-6 sm:px-10 py-12 shadow-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <ObservatorioBadge />
              <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight">
                Indicadores vivos para orientar decisões do Instituto Manduvi.
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                O observatório integra o MCP e as APIs públicas do instituto para transformar dados em inteligência acionável. Os indicadores abaixo são atualizados automaticamente conforme novas coletas, integrações e análises territoriais.
              </p>
              {error && (
                <div className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {error}
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  Governança LGPD ativa
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                  <Network className="h-4 w-4" />
                  APIs em tempo real
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-primary/10 bg-primary/5 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-primary/70 font-semibold">Atualização</p>
                <p className="mt-3 text-4xl font-bold text-primary">{loading ? '•••' : '15 min'}</p>
                <p className="mt-2 text-sm text-primary/80">Janela média de sincronização</p>
              </div>
              <div className="rounded-3xl border border-secondary/10 bg-secondary/5 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-secondary font-semibold">Conexões</p>
                <p className="mt-3 text-4xl font-bold text-secondary">{dataSources.length}</p>
                <p className="mt-2 text-sm text-secondary/80">Fontes MCP e APIs monitoradas</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {instituteIndicators.map((indicator) => (
            <InstituteIndicatorCard key={indicator.id} indicator={indicator} />
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border/40 bg-white/90 shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-border/40 space-y-6">
              <SectionHeader
                title="Panorama Institucional"
                description="Série histórica de beneficiários, investimentos e horas de formação"
              />
              <ChartContainer id="institute-trend" config={instituteTrendConfig} className="rounded-3xl border border-border/40 bg-white/80 p-4">
                <AreaChart data={trendSeries}>
                  <CartesianGrid strokeDasharray="4 4" className="stroke-border/70" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                  <YAxis tickFormatter={chartNumberFormatter} tickLine={false} axisLine={false} className="text-xs" />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => (
                          <div className="flex w-full items-center justify-between gap-4">
                            <span className="text-foreground/70">{instituteTrendConfig[name]?.label ?? name}</span>
                            <span className="font-semibold text-foreground">
                              {name === 'investimento'
                                ? millionFormatter(value)
                                : value.toLocaleString('pt-BR')}
                            </span>
                          </div>
                        )}
                      />
                    }
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Area
                    type="monotone"
                    dataKey="beneficiarios"
                    stroke="var(--color-beneficiarios)"
                    fill="var(--color-beneficiarios)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="horasFormacao"
                    stroke="var(--color-horasFormacao)"
                    fill="var(--color-horasFormacao)"
                    fillOpacity={0.12}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="investimento"
                    stroke="var(--color-investimento)"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
            <div className="p-6 sm:p-8 space-y-5">
              <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6">
                <h3 className="text-lg font-semibold text-primary">Como os dados chegam aqui</h3>
                <p className="mt-3 text-sm text-primary/80 leading-relaxed">
                  O pipeline do observatório cruza coletas do MCP, integrações financeiras, sensores ambientais e dados públicos. A cada nova sincronização os indicadores são reprocessados e versionados para garantir rastreabilidade.
                </p>
                <a
                  href="mailto:dados@institutomanduvi.org"
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-lg hover:bg-secondary transition-colors"
                >
                  Falar com a equipe de dados
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-3xl border border-border/40 bg-white/80 p-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/60">
                  Checklist de governança
                </h4>
                <ul className="space-y-2 text-sm text-foreground/70 leading-relaxed">
                  {complianceHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border/40 bg-white/95 shadow-xl"
        >
          <div className="p-6 sm:p-8 space-y-6">
            <SectionHeader
              title="Projetos Manduvi"
              description="Selecione uma iniciativa para acompanhar indicadores dedicados"
            />
            <ProjectSelector
              projects={projects}
              selectedProjectId={selectedProjectId}
              onSelect={selectProject}
              loading={projectLoading}
            />
          </div>
          <div className="border-t border-border/40 p-6 sm:p-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div className="space-y-6">
              {selectedProject ? (
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground leading-tight">{selectedProject.name}</h3>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary/70 font-semibold">
                    {selectedProject.pillar}
                  </p>
                  <p className="text-base text-foreground/70 leading-relaxed">{selectedProject.summary}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-primary/80">
                    <span className="rounded-full bg-primary/10 px-3 py-1">{selectedProject.coverage}</span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">{selectedProject.focus}</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-border/50 p-8 text-sm text-foreground/60">
                  Escolha um projeto para visualizar os indicadores.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                {(projectLoading
                  ? Array.from({ length: Math.max(projectIndicators.length, 3) })
                  : projectIndicators
                ).map((indicator, index) =>
                  projectLoading ? (
                    <div
                      key={`skeleton-${index}`}
                      className="h-36 rounded-3xl border border-border/40 bg-muted/30 animate-pulse"
                    />
                  ) : (
                    <ProjectIndicatorCard key={indicator.id} indicator={indicator} />
                  )
                )}
              </div>

              {projectInsights.length > 0 && (
                <div className="rounded-3xl border border-border/40 bg-primary/5 p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/70 mb-3">
                    Insights acionáveis
                  </h4>
                  <InsightList insights={projectInsights} />
                </div>
              )}
            </div>
            <div className="space-y-5">
              {projectLoading ? (
                <div className="flex h-72 items-center justify-center rounded-3xl border border-border/40 bg-muted/30">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <ProjectChart projectTrend={projectTrend} />
              )}
              <div className="rounded-3xl border border-border/40 bg-white/80 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/60">
                  Próximos passos recomendados
                </h4>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  Use estes dados para planejar investimentos, ajustar metas de campo e alinhar narrativas com parceiros. Os conectores MCP permitem exportar os dados completos via API REST com autenticação.
                </p>
                <a
                  href="/api/docs"
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                >
                  Acessar documentação da API
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border/40 bg-white/90 shadow-xl"
        >
          <div className="p-6 sm:p-8 space-y-6">
            <SectionHeader
              title="Arquitetura de dados"
              description="Fontes MCP e APIs monitoradas em tempo real"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {dataSources.map((source) => (
                <DataSourceCard key={source.id} source={source} />
              ))}
            </div>
          </div>
          <div className="border-t border-border/40 p-6 sm:p-8">
            <SectionHeader
              title="Pipeline automatizado"
              description="Do campo à publicação em poucos passos"
            />
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {integrationFlow.map((step, index) => (
                <FlowCard key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[40px] border border-primary/20 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-12 shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div className="space-y-3 max-w-3xl">
            <h3 className="text-3xl font-bold">Quer conectar seu sistema ao observatório?</h3>
            <p className="text-base text-primary-foreground/80 leading-relaxed">
              Disponibilizamos SDKs, webhooks e acesso controlado à API do Manduvi para parceiros institucionais, jornalistas e pesquisadores. Vamos cocriar novos indicadores para acelerar a transformação territorial.
            </p>
          </div>
          <a
            href="mailto:parcerias@institutomanduvi.org"
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-primary px-5 py-3 text-sm font-semibold shadow-lg hover:bg-primary/10 hover:text-primary-foreground transition-colors"
          >
            Agendar demonstração
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default DataObservatorySection
