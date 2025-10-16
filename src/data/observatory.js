export const observatoryDefaults = {
  instituteIndicators: [
    {
      id: 'reach',
      label: 'Pessoas alcançadas',
      value: 12840,
      variation: '+18% versus 2023',
      description:
        'Inclui beneficiários diretos dos programas de educação, empregabilidade e regeneração ambiental monitorados pelo instituto.',
      source: 'MCP Data Lake'
    },
    {
      id: 'territories',
      label: 'Territórios monitorados',
      value: 17,
      variation: '4 novos territórios em 2024',
      description:
        'Painel territorial conectado ao MCP acompanha indicadores de moradia, clima e renda em regiões prioritárias.',
      source: 'Atlas Manduvi de Impacto'
    },
    {
      id: 'investment',
      label: 'Investimento mobilizado',
      value: 9.6,
      variation: 'R$ 9,6 mi no acumulado de 12 meses',
      description:
        'Recursos financeiros e aportes em serviços captados junto a parceiros estratégicos para programas do instituto.',
      source: 'API Financeira Manduvi'
    },
    {
      id: 'satisfaction',
      label: 'Índice de satisfação',
      value: 92,
      variation: 'Meta 2024: manter acima de 90%',
      description:
        'Percentual de participantes que avaliaram positivamente as entregas e metodologias do Manduvi.',
      source: 'Aplicativo MCP Field'
    }
  ],
  trendSeries: [
    { month: 'Jul/24', beneficiarios: 820, investimento: 0.45, horasFormacao: 620 },
    { month: 'Ago/24', beneficiarios: 930, investimento: 0.52, horasFormacao: 710 },
    { month: 'Set/24', beneficiarios: 1040, investimento: 0.6, horasFormacao: 760 },
    { month: 'Out/24', beneficiarios: 1105, investimento: 0.72, horasFormacao: 820 },
    { month: 'Nov/24', beneficiarios: 1180, investimento: 0.81, horasFormacao: 870 },
    { month: 'Dez/24', beneficiarios: 1255, investimento: 0.9, horasFormacao: 910 },
    { month: 'Jan/25', beneficiarios: 1320, investimento: 0.96, horasFormacao: 980 }
  ],
  projects: [
    {
      id: 'atlas-impacto',
      name: 'Atlas Manduvi de Impacto Territorial',
      pillar: 'Dados e Diagnóstico',
      summary:
        'Mapeia vulnerabilidades socioambientais em tempo real e orienta investimentos regenerativos em territórios periféricos.',
      coverage: '12 municípios monitorados',
      focus:
        'Integra camadas de dados climáticos, socioeconômicos e culturais para orientar ações baseadas em evidências.',
      indicators: [
        {
          id: 'familias-acompanhadas',
          label: 'Famílias acompanhadas',
          value: 980,
          variation: '+12% no trimestre',
          target: 'Meta: 1.200 até dez/25',
          description: 'Famílias com planos integrados de desenvolvimento territorial e apoio direto.',
          source: 'MCP Data Lake'
        },
        {
          id: 'mapas-dinamicos',
          label: 'Mapas dinâmicos publicados',
          value: 38,
          variation: 'Atualização quinzenal',
          target: 'Meta: 45 mapas ativos',
          description: 'Painéis analíticos e mapas interativos acessados por prefeituras e parceiros.',
          source: 'API Observatório'
        },
        {
          id: 'indicadores-lgpd',
          label: 'Indicadores com consentimento LGPD',
          value: 100,
          variation: 'Cobertura total',
          target: '100% dos registros com consentimento',
          description: 'Registros com termos de consentimento digital armazenados e auditáveis.',
          source: 'MCP Consent Manager'
        }
      ],
      trend: [
        { month: 'Jul/24', missoesCampo: 8, familias: 620, satisfacao: 88 },
        { month: 'Ago/24', missoesCampo: 9, familias: 680, satisfacao: 89 },
        { month: 'Set/24', missoesCampo: 11, familias: 720, satisfacao: 91 },
        { month: 'Out/24', missoesCampo: 12, familias: 780, satisfacao: 93 },
        { month: 'Nov/24', missoesCampo: 14, familias: 830, satisfacao: 94 },
        { month: 'Dez/24', missoesCampo: 15, familias: 910, satisfacao: 95 },
        { month: 'Jan/25', missoesCampo: 16, familias: 980, satisfacao: 96 }
      ],
      insights: [
        '80% dos territórios cruzam dados climáticos e sociais para orientar investimentos.',
        '2 novas prefeituras integraram a API do observatório em janeiro/25.',
        'Próximo passo: liberar camada pública com indicadores básicos e dados abertos.'
      ]
    },
    {
      id: 'trilhas-juventude',
      name: 'Trilhas de Juventude Manduvi',
      pillar: 'Formação e Empregabilidade',
      summary:
        'Programa de capacitação tecnológica e socioemocional focado em juventudes periféricas para acesso a trabalho digno.',
      coverage: '600 jovens ativos em 7 territórios',
      focus:
        'Metodologia blended com acompanhamento individual via aplicativo MCP e mentorias de parceiros corporativos.',
      indicators: [
        {
          id: 'jovens-formados',
          label: 'Jovens formados',
          value: 420,
          variation: '+35% vs. mesmo período 2023',
          target: 'Meta: 550 até abr/25',
          description: 'Participantes que concluíram todas as trilhas de formação.',
          source: 'MCP Learning'
        },
        {
          id: 'empregabilidade',
          label: 'Empregabilidade após 90 dias',
          value: 68,
          variation: '+8 p.p. no semestre',
          target: 'Meta: 75%',
          description: 'Percentual de jovens com vínculo formal ou empreendendo após conclusão.',
          source: 'API Empregos Manduvi'
        },
        {
          id: 'mentorias-realizadas',
          label: 'Mentorias realizadas',
          value: 210,
          variation: '14 novas empresas parceiras',
          target: 'Meta: 260 mentorias',
          description: 'Sessões mentoradas por especialistas de parceiros investidores.',
          source: 'MCP Agenda'
        }
      ],
      trend: [
        { month: 'Jul/24', trilhasConcluidas: 48, empregabilidade: 54, mentorias: 32 },
        { month: 'Ago/24', trilhasConcluidas: 52, empregabilidade: 56, mentorias: 28 },
        { month: 'Set/24', trilhasConcluidas: 57, empregabilidade: 60, mentorias: 30 },
        { month: 'Out/24', trilhasConcluidas: 60, empregabilidade: 63, mentorias: 34 },
        { month: 'Nov/24', trilhasConcluidas: 63, empregabilidade: 65, mentorias: 36 },
        { month: 'Dez/24', trilhasConcluidas: 66, empregabilidade: 67, mentorias: 38 },
        { month: 'Jan/25', trilhasConcluidas: 70, empregabilidade: 68, mentorias: 40 }
      ],
      insights: [
        'Tempo médio de colocação caiu para 37 dias com apoio da rede de parceiros.',
        'Dados de permanência permitem acionar mentores MCP quando há risco de evasão.',
        'Trilha de tecnologia verde será lançada no próximo trimestre com 120 vagas.'
      ]
    },
    {
      id: 'superralinha',
      name: 'Superralinha - Regeneração Comunitária',
      pillar: 'Economia Regenerativa',
      summary:
        'Acelera negócios comunitários liderados por mulheres com microcrédito, assistência técnica e hubs de produção.',
      coverage: '42 empreendimentos apoiados',
      focus:
        'Modelo baseado em dados de ciclo de vida dos negócios para medir impacto ambiental e econômico.',
      indicators: [
        {
          id: 'empreendimentos-ativos',
          label: 'Empreendimentos ativos',
          value: 42,
          variation: '+6 desde o último ciclo',
          target: 'Meta: 55 até jul/25',
          description: 'Negócios acompanhados com diagnóstico socioambiental em dia.',
          source: 'MCP Data Lake'
        },
        {
          id: 'renda-media',
          label: 'Aumento médio de renda',
          value: 36,
          variation: '+5 p.p. vs. linha de base',
          target: 'Meta: +40%',
          description: 'Percentual de incremento médio na renda das participantes após 6 meses.',
          source: 'API Financeira Manduvi'
        },
        {
          id: 'carbono-evitado',
          label: 'Carbono evitado',
          value: 128,
          variation: '+32 toneladas no semestre',
          target: 'Meta: 180 tCO₂e',
          description: 'Emissões evitadas pela adoção de processos circulares e energia limpa.',
          source: 'Plataforma Clima MCP'
        }
      ],
      trend: [
        { month: 'Jul/24', hubsAtivos: 9, rendaMedia: 28, carbono: 72 },
        { month: 'Ago/24', hubsAtivos: 10, rendaMedia: 29, carbono: 82 },
        { month: 'Set/24', hubsAtivos: 11, rendaMedia: 31, carbono: 90 },
        { month: 'Out/24', hubsAtivos: 12, rendaMedia: 33, carbono: 102 },
        { month: 'Nov/24', hubsAtivos: 13, rendaMedia: 34, carbono: 112 },
        { month: 'Dez/24', hubsAtivos: 14, rendaMedia: 35, carbono: 118 },
        { month: 'Jan/25', hubsAtivos: 14, rendaMedia: 36, carbono: 128 }
      ],
      insights: [
        'Integração MCP + API permite atualizar dashboards financeiros a cada 15 minutos.',
        'Empreendimentos com mentoria digital tiveram 22% mais receitas no último ciclo.',
        'Expansão prevista para dois novos territórios ribeirinhos com foco agroecológico.'
      ]
    }
  ],
  dataSources: [
    {
      id: 'mcp',
      name: 'MCP Data Lake',
      status: 'online',
      lastSync: 'há 2 horas',
      coverage: '12 coleções ativas',
      reliability: 0.98,
      description: 'Consolida dados transacionais, formulários de campo e coleções territoriais do Manduvi.'
    },
    {
      id: 'observatory-api',
      name: 'API pública do Observatório',
      status: 'sincronizando',
      lastSync: 'há 12 minutos',
      coverage: '24 endpoints REST',
      reliability: 0.93,
      description: 'Serviço externo que expõe indicadores priorizados para imprensa, parceiros e integrações.'
    },
    {
      id: 'field-app',
      name: 'Aplicativo MCP Field',
      status: 'manutencao',
      lastSync: 'há 5 horas',
      coverage: '8 roteiros ativos',
      reliability: 0.88,
      description: 'Coleta offline de dados qualitativos com sincronização automatizada ao retornar à rede segura.'
    }
  ],
  integrationFlow: [
    {
      id: 'captura',
      title: 'Captura Inteligente',
      description: 'MCP coleta dados de campo, planilhas legadas e integrações automáticas com parceiros.'
    },
    {
      id: 'qualidade',
      title: 'Qualidade & LGPD',
      description: 'Pipeline com checagens automáticas, versionamento e gestão de consentimento digital.'
    },
    {
      id: 'publicacao',
      title: 'Publicação Multicanal',
      description: 'APIs do observatório abastecem dashboards internos, site público e relatórios automatizados.'
    }
  ],
  complianceHighlights: [
    'Todos os indicadores expostos possuem consentimento LGPD e rastreabilidade no MCP.',
    'Logs de sincronização ficam disponíveis para auditoria e governança de dados.',
    'APIs seguem padrões REST com paginação e chaves de acesso granular.'
  ]
}

export const findDefaultProjectById = (projectId) =>
  observatoryDefaults.projects.find((project) => project.id === projectId)
