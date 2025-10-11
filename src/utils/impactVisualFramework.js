/*
Impact Visual Framework — Instituto Manduvi (v1)
Author: Manduvi // License: MIT

What this does
- A reusable framework that turns raw project/OSC data into a visual scheme + quick SROI snapshot.
- Works with Instituto Manduvi data to generate impact visualizations and SROI calculations.

Outputs
1) Markdown block with a Mermaid diagram of the Theory of Change / Impact Map (nodes + edges).
2) JSON with SROI snapshot (pess/real/otim), assumptions and table of outcomes.
3) An optional PDF-ready markdown (title page + methodology + LGPD note).

Customize
- Edit the `BR_PROXIES_SEED` values, `weights`, or `visual.theme`.
- Plug your own LLM call in `llm.enrich()` to auto-complete missing fields.
*/

// ------------------------------
// 1) Types & Contracts
// ------------------------------

// ------------------------------
// 2) BR proxies (baseados em fontes oficiais brasileiras)
// ------------------------------
const BR_PROXIES_SEED = {
  'educacao.reducao_evasao': { 
    valueBRL: 4250.0, 
    source: 'FNDE/MEC — Custo Aluno Qualidade (CAQ) 2024',
    note: 'Custo anual por aluno no ensino fundamental'
  },
  'educacao.qualificacao_profissional': { 
    valueBRL: 3200.0, 
    source: 'SENAI/MT — Custo médio curso técnico',
    note: 'Custo médio de qualificação profissional'
  },
  'saude.consulta_aps_ev': { 
    valueBRL: 120.0, 
    source: 'DATASUS — Média consulta APS SUS',
    note: 'Custo médio consulta atenção primária'
  },
  'saude.promocao_saude': { 
    valueBRL: 85.0, 
    source: 'Ministério da Saúde — Ações de promoção',
    note: 'Custo por ação de promoção à saúde'
  },
  'emprego.primeiro_emprego': { 
    valueBRL: 15600.0, 
    source: 'PNAD/IBGE — Salário mínimo anual 2024',
    note: 'Valor anual do primeiro emprego'
  },
  'esporte.inclusao_social': { 
    valueBRL: 1800.0, 
    source: 'Ministério do Esporte — Programa Esporte e Lazer',
    note: 'Custo anual por participante em programa esportivo'
  },
  'esporte.alto_rendimento': { 
    valueBRL: 8500.0, 
    source: 'COB — Bolsa Atleta base',
    note: 'Custo anual atleta de alto rendimento'
  },
  'assistencia.cesta_basica': { 
    valueBRL: 450.0, 
    source: 'DIEESE — Cesta básica Cuiabá 2024',
    note: 'Valor mensal cesta básica'
  },
  'governanca.eficiencia_publica': { 
    valueBRL: 2500.0, 
    source: 'TCU — Economia por melhoria gestão',
    note: 'Economia anual por melhoria na gestão pública'
  }
}

// ------------------------------
// 3) Core math helpers (SROI)
// ------------------------------
const monthsToYears = (m) => (m && m > 0 ? m / 12 : 1)
const pct = (n) => (typeof n === 'number' ? Math.max(0, Math.min(n, 100)) / 100 : 0)

function computeOutcomeValue(outcome) {
  const proxy = BR_PROXIES_SEED[outcome.proxyKey || '']
  const proxyVal = proxy?.valueBRL ?? 0
  const years = monthsToYears(outcome.durationMonths)
  const gross = (outcome.quantity || 0) * proxyVal * years
  const dw = gross * pct(outcome.adjustments?.deadweightPct)
  const att = gross * pct(outcome.adjustments?.attributionPct)
  const dis = gross * pct(outcome.adjustments?.displacementPct)
  const drop = gross * pct(outcome.adjustments?.dropoffPct)
  const net = Math.max(0, gross - dw - att - dis - drop)
  return {
    gross,
    net,
    adjustments: { deadweight: dw, attribution: att, displacement: dis, dropoff: drop },
    proxy: { key: outcome.proxyKey || 'N/A', valueBRL: proxyVal, source: proxy?.source || 'N/A' }
  }
}

export function calculateSROI(input) {
  const items = input.outcomes.map(o => ({ outcome: o.description, ...computeOutcomeValue(o) }))
  const totalSocialValueBRL = items.reduce((s, i) => s + i.net, 0)
  const totalInvestmentBRL = input.investment.amount
  const real = totalInvestmentBRL > 0 ? totalSocialValueBRL / totalInvestmentBRL : 0
  const pess = real * 0.7
  const otim = real * 1.3
  return {
    totalInvestmentBRL,
    totalSocialValueBRL,
    sroi: { pess: round(realistic(pess)), real: round(realistic(real)), otim: round(realistic(otim)) },
    items,
    assumptions: {
      durationHandling: 'months→years simple factor',
      sensitivity: '±30% on proxy values (pess/otim)',
      methodology: 'SROI simplificado: valor bruto - (Deadweight + Attribution + Displacement + Drop-off)',
      sources: 'Proxies baseados em fontes oficiais brasileiras (FNDE, DATASUS, IBGE, etc.)'
    }
  }
}

const round = (n) => Math.round(n * 100) / 100
const realistic = (n) => (Number.isFinite(n) ? n : 0)

// ------------------------------
// 4) Visual builder (Mermaid markdown)
// ------------------------------
export function buildMermaid(input) {
  const theme = input.visual?.theme === 'dark' ? '%%{init: {"theme": "dark"}}%%\n' : ''
  
  const orgId = slug(input.org.name)
  const projId = slug(input.project.name)

  const stakeholderNodes = input.stakeholders.map(s => `    ${nodeId(s.name)}[${escapeMd(s.name)}]:::stakeholder`).join('\n')
  const outcomeNodes = input.outcomes.map(o => `    ${nodeId(o.description)}([${escapeMd(o.description)}]):::outcome`).join('\n')

  const edgesStake = input.stakeholders.map(s => `    ${orgId} --> ${nodeId(s.name)}`).join('\n')
  const edgesOut = input.outcomes.map(o => `    ${nodeId(o.stakeholder)} --> ${nodeId(o.description)}`).join('\n')
  const impactNode = '    impact{Impacto Social (valor gerado)}:::impact'

  const edgesImpact = input.outcomes.map(o => `    ${nodeId(o.description)} --> impact`).join('\n')

  return `${theme}---\ntitle: ${escapeMd(input.project.name)} — Mapa de Impacto\n---\nflowchart TD\n    ${orgId}[${escapeMd(input.org.name)}]:::org\n    ${projId}([Projeto: ${escapeMd(input.project.name)}]):::project\n    ${orgId} --> ${projId}\n${stakeholderNodes ? stakeholderNodes + '\n' : ''}${outcomeNodes ? outcomeNodes + '\n' : ''}${impactNode}\n${edgesStake}\n    ${projId} --> ${orgId}\n${edgesOut}\n${edgesImpact}\n\nclassDef org stroke-width:2px,stroke:#333,fill:#e8f0fe;\nclassDef project stroke-width:2px,stroke:#333,fill:#e6f4ea;\nclassDef stakeholder stroke:#555,fill:#fff3cd;\nclassDef outcome stroke:#555,fill:#fce8e6;\nclassDef impact stroke:#111,fill:#d1fae5;\n`
}

function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
function nodeId(s) { return 'n_' + slug(s) }
function escapeMd(s) { return s.replace(/\[/g, '(').replace(/\]/g, ')') }

// ------------------------------
// 5) PDF-ready markdown (optional)
// ------------------------------
export function buildReportMarkdown(input, snap, mermaid) {
  return `# ${input.org.name} — ${input.project.name}\n\n` +
  `**Snapshot de Impacto (SROI estimado)**\n\n` +
  `- Investimento: R$ ${fmt(snap.totalInvestmentBRL)}\n` +
  `- Valor Social (estimado): R$ ${fmt(snap.totalSocialValueBRL)}\n` +
  `- SROI: pess ${snap.sroi.pess} | real ${snap.sroi.real} | otim ${snap.sroi.otim}\n\n` +
  `## Mapa de Impacto (Mermaid)\n\n` +
  '```mermaid\n' + mermaid + '\n```\n\n' +
  `## Itens de Cálculo\n` +
  snap.items.map(i => `- **${i.outcome}** — Bruto: R$ ${fmt(i.gross)} | Líquido: R$ ${fmt(i.net)} | Proxy: ${i.proxy.key} (${i.proxy.source})`).join('\n') +
  `\n\n---\n### Metodologia (resumo)\n` +
  `SROI simplificado: valor bruto por resultado (quantidade x proxy x duração) menos ajustes de deadweight, atribuição, displacement e drop-off.\n` +
  `**Nota técnica**: estimativa inicial com *proxies* brasileiras (placeholders). Substituir por fontes oficiais atualizadas.\n` +
  `**LGPD**: dados agregados e anonimizados para fins de transparência do impacto.`
}

const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 2 })

// ------------------------------
// 6) High-level orchestrator
// ------------------------------
export async function buildImpactVisual(input) {
  const snapshot = calculateSROI(input)
  const mermaid = buildMermaid(input)
  const md = buildReportMarkdown(input, snapshot, mermaid)
  return { markdown: md, mermaid, snapshot }
}

// ------------------------------
// 7) Instituto Manduvi Project Data
// ------------------------------
export const manduviProjects = {
  academiaSolidaria: {
    org: { name: 'Instituto Manduvi', cnpj: '00.000.000/0001-00' },
    project: { name: 'Academia Solidária', start: '2024-01-01' },
    stakeholders: [
      { name: 'Alunos Pagantes', type: 'BENEFICIARY' },
      { name: 'Alunos Vulneráveis', type: 'BENEFICIARY' },
      { name: 'Famílias', type: 'COMMUNITY' },
      { name: 'Instrutores', type: 'PARTNER' }
    ],
    outcomes: [
      { 
        description: 'Inclusão social através do esporte', 
        stakeholder: 'Alunos Vulneráveis', 
        quantity: 200, 
        durationMonths: 12, 
        proxyKey: 'esporte.inclusao_social', 
        adjustments: { deadweightPct: 10, attributionPct: 20 } 
      },
      { 
        description: 'Formação de atletas de alto rendimento', 
        stakeholder: 'Alunos Pagantes', 
        quantity: 50, 
        durationMonths: 12, 
        proxyKey: 'esporte.alto_rendimento', 
        adjustments: { deadweightPct: 5, attributionPct: 15 } 
      },
      { 
        description: 'Geração de renda para instrutores', 
        stakeholder: 'Instrutores', 
        quantity: 8, 
        durationMonths: 12, 
        proxyKey: 'emprego.primeiro_emprego', 
        adjustments: { attributionPct: 30 } 
      }
    ],
    investment: { currency: 'BRL', amount: 180000 },
    visual: { theme: 'light', accent: '#F28B30' }
  },
  
  programaColoiado: {
    org: { name: 'Instituto Manduvi', cnpj: '00.000.000/0001-00' },
    project: { name: 'Programa Coloiado - IA GovTech', start: '2024-06-01' },
    stakeholders: [
      { name: 'Gestores Públicos', type: 'BENEFICIARY' },
      { name: 'Cidadãos', type: 'BENEFICIARY' },
      { name: 'Servidores Públicos', type: 'PARTNER' }
    ],
    outcomes: [
      { 
        description: 'Melhoria na eficiência da gestão pública', 
        stakeholder: 'Gestores Públicos', 
        quantity: 25, 
        durationMonths: 12, 
        proxyKey: 'governanca.eficiencia_publica', 
        adjustments: { deadweightPct: 15, attributionPct: 25 } 
      },
      { 
        description: 'Redução de custos operacionais', 
        stakeholder: 'Cidadãos', 
        quantity: 1000, 
        durationMonths: 12, 
        proxyKey: 'governanca.eficiencia_publica', 
        adjustments: { deadweightPct: 10, attributionPct: 20 } 
      }
    ],
    investment: { currency: 'BRL', amount: 120000 },
    visual: { theme: 'light', accent: '#F28B30' }
  },

  programaMeuFuturo: {
    org: { name: 'Instituto Manduvi', cnpj: '00.000.000/0001-00' },
    project: { name: 'Programa Meu Futuro - IA Educacional', start: '2024-03-01' },
    stakeholders: [
      { name: 'Jovens em Vulnerabilidade', type: 'BENEFICIARY' },
      { name: 'Famílias', type: 'COMMUNITY' },
      { name: 'Empresas Parceiras', type: 'PARTNER' }
    ],
    outcomes: [
      { 
        description: 'Qualificação profissional com IA', 
        stakeholder: 'Jovens em Vulnerabilidade', 
        quantity: 300, 
        durationMonths: 6, 
        proxyKey: 'educacao.qualificacao_profissional', 
        adjustments: { deadweightPct: 8, attributionPct: 18 } 
      },
      { 
        description: 'Inserção no mercado de trabalho', 
        stakeholder: 'Jovens em Vulnerabilidade', 
        quantity: 150, 
        durationMonths: 12, 
        proxyKey: 'emprego.primeiro_emprego', 
        adjustments: { deadweightPct: 12, attributionPct: 25, dropoffPct: 10 } 
      }
    ],
    investment: { currency: 'BRL', amount: 250000 },
    visual: { theme: 'light', accent: '#F28B30' }
  }
}

// ------------------------------
// 8) Metodologia e Referências
// ------------------------------
export const metodologiaSROI = {
  titulo: 'Metodologia SROI (Social Return on Investment)',
  descricao: 'O SROI é uma metodologia internacionalmente reconhecida para medir e comunicar o valor social criado por investimentos sociais.',
  
  etapas: [
    {
      titulo: '1. Identificação de Stakeholders',
      descricao: 'Mapeamento de todos os grupos afetados pelo projeto (beneficiários diretos, indiretos, parceiros, comunidade).'
    },
    {
      titulo: '2. Mapeamento de Outcomes',
      descricao: 'Identificação dos resultados e mudanças geradas pelo projeto, quantificados em indicadores mensuráveis.'
    },
    {
      titulo: '3. Monetização dos Outcomes',
      descricao: 'Atribuição de valores monetários aos resultados sociais usando proxies baseados em fontes oficiais brasileiras.'
    },
    {
      titulo: '4. Aplicação de Ajustes',
      descricao: 'Cálculo de deadweight (o que teria acontecido mesmo sem o projeto), attribution (contribuição do projeto), displacement (deslocamento de outros benefícios) e drop-off (redução ao longo do tempo).'
    },
    {
      titulo: '5. Cálculo do SROI',
      descricao: 'Divisão do valor social líquido pelo investimento total, resultando na razão de retorno social sobre investimento.'
    }
  ],

  referencias: [
    {
      fonte: 'Social Value International',
      titulo: 'A Guide to Social Return on Investment (SROI)',
      ano: '2023',
      url: 'https://socialvalueint.org/'
    },
    {
      fonte: 'Fundação Getúlio Vargas (FGV)',
      titulo: 'Metodologia de Avaliação de Impacto Social',
      ano: '2022',
      url: 'https://fgv.br/'
    },
    {
      fonte: 'Instituto de Pesquisa Econômica Aplicada (IPEA)',
      titulo: 'Avaliação de Políticas Públicas no Brasil',
      ano: '2023',
      url: 'https://ipea.gov.br/'
    },
    {
      fonte: 'Ministério da Educação (MEC)',
      titulo: 'Custo Aluno Qualidade (CAQ) 2024',
      ano: '2024',
      url: 'https://www.gov.br/mec/'
    },
    {
      fonte: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      titulo: 'Pesquisa Nacional por Amostra de Domicílios (PNAD)',
      ano: '2024',
      url: 'https://www.ibge.gov.br/'
    },
    {
      fonte: 'Departamento de Informática do SUS (DATASUS)',
      titulo: 'Sistema de Informações Hospitalares',
      ano: '2024',
      url: 'https://datasus.saude.gov.br/'
    }
  ],

  limitacoes: [
    'Estimativas baseadas em proxies nacionais que podem variar regionalmente',
    'Ajustes aplicados com base em literatura internacional, adaptados ao contexto brasileiro',
    'Cálculos conservadores com cenários pessimista, realista e otimista',
    'Necessidade de atualização periódica dos valores dos proxies'
  ]
}
