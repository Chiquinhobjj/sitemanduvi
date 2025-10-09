import {
  ActivitySquare,
  ArrowUpRightSquare,
  Award,
  CalendarDays,
  Camera,
  HeartHandshake,
  LineChart,
  MapPinned,
  Share2,
  Sparkles,
  Target,
  Users,
  Database,
  Boxes,
  GraduationCap
} from 'lucide-react'

export const initiatives = [
  {
    id: 'jiujitsu',
    name: 'Jiu-Jitsu para Todos – APAE',
    pillar: 'Esporte que Acolhe',
    icon: HeartHandshake,
    headline: 'Inclusão que virou faixa preta',
    intro:
      'Iniciativa pioneira que levou o jiu-jitsu para crianças, jovens e pessoas com deficiência, criando um ambiente de respeito, autoconfiança e superação.',
    highlights: [
      '150 atendimentos anuais com turmas multigeracionais e inclusivas.',
      'Fabricio Galvão: primeiro faixa-preta de jiu-jitsu com Síndrome de Down do mundo.',
      'Parceria histórica com a APAE de Cuiabá, referência em acessibilidade esportiva.'
    ],
    metric: 'Esporte inclusivo desde 2006',
    landing: {
      hero: {
        eyebrow: 'Esporte que acolhe',
        title: 'Jiu-Jitsu para Todos – a faixa preta da inclusão',
        subtitle: 'O programa que transforma potência em pertencimento com treinos, dados e um ecossistema de parceiros',
        description:
          'Construímos trajetórias completas para pessoas com deficiência, famílias e educadores. Metodologia própria, avaliação 360º, tecnologia assistiva e mentoria emocional garantem progresso real.',
        media: {
          type: 'image',
          src: '/images/ecomarket.jpg'
        },
        primaryCta: { label: 'Solicitar apresentação exclusiva', href: '#contato' },
        secondaryCta: { label: 'Baixar kit patrocinador', href: '#materiais' }
      },
      metrics: [
        {
          label: 'Atletas acolhidos',
          value: '3.280',
          description: 'Formações continuadas em Mato Grosso, RJ e SP',
          trend: '+24% vs. último ano'
        },
        {
          label: 'Turmas ativas',
          value: '41 núcleos',
          description: 'APAE, escolas públicas e espaços Manduvia',
          trend: 'Expansão com metodologia HEXA'
        },
        {
          label: 'Captação recorrente',
          value: 'R$ 2,4 mi/ano',
          description: 'Recursos incentivados, leis de esporte e naming rights',
          trend: 'ROI social auditado'
        }
      ],
      proofPoints: [
        '1º faixa-preta do mundo com Síndrome de Down (Fabricio Galvão) formado pelo programa.',
        'Protocolos de avaliação física e socioemocional integrados ao ManduvIA Insights.',
        'Rede de voluntários especializados em educação inclusiva, fisioterapia e psicologia.'
      ],
      experience: {
        title: 'A jornada que entregamos',
        steps: [
          {
            title: 'Diagnóstico e onboarding',
            description: 'Mapeamento de participantes, entrevistas familiares e plano individual de desenvolvimento.'
          },
          {
            title: 'Treinos adaptados e mentorias',
            description: 'Equipes multidisciplinares com treinos semanais, apoio nutricional e mentorias para responsáveis.'
          },
          {
            title: 'Dados, festivais e legado',
            description: 'Eventos inclusivos, dashboards de evolução e conexão com oportunidades de emprego e estudo.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'Ver o Fabricio conquistar a faixa preta mudou a percepção da comunidade sobre inclusão. O Manduvi entrega resultados concretos e emocionais.',
          author: 'Clarice Mendes',
          role: 'Presidente APAE Cuiabá'
        }
      ],
      gallery: [
        { image: '/images/ecomarket.jpg', caption: 'Festival Inclusivo – Cuiabá 2024' },
        { image: '/images/mindfulapp.jpg', caption: 'Mentoria familiar ManduvIA' }
      ],
      timeline: [
        { year: '2006', milestone: 'Início em Cuiabá com 20 atletas' },
        { year: '2015', milestone: 'Expansão para APAE e escolas públicas' },
        { year: '2023', milestone: 'Plataforma de dados e ManduvIA Mentor' }
      ],
      faqs: [
        {
          question: 'Como financiar o núcleo Jiu-Jitsu para Todos?',
          answer: 'Trabalhamos com leis de incentivo ao esporte, patrocínio direto e modelos de naming rights. Entregamos relatórios trimestrais auditados.'
        },
        {
          question: 'Quais são as entregas obrigatórias?',
          answer: 'Mínimo de 4 treinos semanais, mentorias familiares, avaliações semestrais e festival inclusivo anual.'
        }
      ],
      support: {
        headline: 'Vamos construir inclusão com você',
        description: 'Apresentamos simulações financeiras, matriz de impacto e plano de comunicação personalizado para sua marca.',
        actions: [
          { label: 'Agendar conversa com especialista', href: '#contato' },
          { label: 'Receber proposta detalhada', href: '#materiais' }
        ]
      }
    }
  },
  {
    id: 'araras',
    name: 'Manduvi Araras Team',
    pillar: 'Esporte de Alto Rendimento',
    icon: Target,
    headline: 'Talentos locais no pódio nacional',
    intro:
      'Programa permanente que identifica, nutre e potencializa atletas olímpicos, elevando Mato Grosso ao topo do wrestling brasileiro.',
    highlights: [
      'Guilherme Porto leva o Prêmio Brasil Olímpico 2019 – Melhor Atleta Escolar.',
      'Wandson de Deus, atleta com autismo, integra a seleção brasileira de wrestling.',
      'Mato Grosso entre os três melhores estados do país em excelência esportiva.'
    ],
    metric: '2014–2023: excelência olímpica',
    landing: {
      hero: {
        eyebrow: 'Alto rendimento acessível',
        title: 'Manduvi Araras Team – talentos do Pantanal nas arenas do mundo',
        subtitle: 'Programa olímpico que mapeia, desenvolve e acelera atletas de wrestling com suporte socioemocional',
        description:
          'Integramos captação em escolas, treino técnico, monitoramento biométrico, mentoria ManduvIA e conexões internacionais para performance e carreira.',
        media: { type: 'image', src: '/images/financetracker.jpg' },
        primaryCta: { label: 'Patrocinar atleta ou equipe', href: '#contato' },
        secondaryCta: { label: 'Ver dossiê de resultados', href: '#materiais' }
      },
      metrics: [
        {
          label: 'Atletas de base e elite',
          value: '96 atletas',
          description: 'Dos 12 aos 23 anos, com trilha educacional e de carreira',
          trend: 'Comitê Olímpico reconhece programa'
        },
        {
          label: 'Resultados internacionais',
          value: '27 pódios',
          description: 'Américas, Pan Jr. e competições escolares',
          trend: '+11 medalhas em 2024'
        },
        {
          label: 'Investimento alavancado',
          value: 'R$ 4,8 mi',
          description: 'Lei de Incentivo ao Esporte + patrocínio direto',
          trend: 'Balanço auditado KPMG'
        }
      ],
      proofPoints: [
        'Guilherme Porto eleito Melhor Atleta Escolar do Brasil pelo COB (2019).',
        'Wandson de Deus, atleta com autismo, integra a seleção brasileira de wrestling.',
        'Hub Manduvia conecta atletas a bolsas de estudo, moradia e carreira tech.'
      ],
      experience: {
        title: 'Pipeline de performance Manduvia',
        steps: [
          {
            title: 'Scouting e onboarding socioemocional',
            description: 'Busca ativa em escolas, avaliações físicas, ManduvIA Mentor e plano individual.'
          },
          {
            title: 'Treinamento integral',
            description: 'Treinos técnicos, preparação física, nutrição, educação financeira e media training.'
          },
          {
            title: 'Carreira e legado',
            description: 'Bolsas, intercâmbio, transição para carreira e mentoria de ex-atletas.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'Patrocinar o Araras Team é investir em histórias reais de superação e em pipeline de talentos olímpicos com responsabilidade social.',
          author: 'Ricardo Bianchi',
          role: 'Diretor de ESG – Grupo Rumo'
        }
      ],
      gallery: [
        { image: '/images/financetracker.jpg', caption: 'Treinos de alto rendimento Manduvia Araras' },
        { image: '/images/hero-background.webp', caption: 'Mentoria ManduvIA com atletas e famílias' }
      ],
      timeline: [
        { year: '2014', milestone: 'Criação do centro de alto rendimento' },
        { year: '2019', milestone: 'Título Prêmio Brasil Olímpico' },
        { year: '2024', milestone: 'Centro integrado Manduvia + Hub Tech' }
      ],
      faqs: [
        {
          question: 'Como funciona o patrocínio por atleta?',
          answer: 'Você adota um talentos, acompanha indicadores e ativa benefícios de marca nas arenas.'
        },
        {
          question: 'Quais entregas de mídia estão incluídas?',
          answer: 'Relatórios, visibilidade em uniformes, storytelling personalizado e ativações esportivas.'
        }
      ],
      support: {
        headline: 'Vamos acelerar o próximo campeão',
        description: 'Montamos propostas personalizadas com contrapartidas de branding, hospitalidade e impacto ESG.',
        actions: [
          { label: 'Montar proposta', href: '#contato' },
          { label: 'Ver calendário de competições', href: '#agenda' }
        ]
      }
    }
  },
  {
    id: 'meufuturo',
    name: 'Programa Meu Futuro',
    pillar: 'Inovação que Acolhe',
    icon: Sparkles,
    headline: 'Microlearning + IA para o fim da desistência',
    intro:
      'Motor de qualificação profissional com aulas curtas pelo WhatsApp e o Mentor-IA Empático cuidando de cada jornada.',
    highlights: [
      'Meta de 13.454 vagas gratuitas até 2026.',
      '75% de conclusão esperada e 60% dos formandos empregados em até 6 meses.',
      'Mentor-IA oferece apoio 24/7 com linguagem acolhedora e avaliações técnicas.'
    ],
    metric: 'SocialTech na palma da mão',
    landing: {
      hero: {
        eyebrow: 'Educação & renda',
        title: 'Programa Meu Futuro – microlearning com ManduvIA mentor',
        subtitle: 'A solução que reduz evasão, gera empregos e mede impacto em tempo real',
        description:
          'Conteúdos ultracurtos via WhatsApp, IA empática ManduvIA, trilhas certificadas com empresas e indicadores socioemocionais. Escalamos formação e empregabilidade.',
        media: { type: 'image', src: '/images/mindfulapp.jpg' },
        primaryCta: { label: 'Implantar na sua cidade/empresa', href: '#contato' },
        secondaryCta: { label: 'Experimentar ManduvIA Mentor', href: '#demo' }
      },
      metrics: [
        {
          label: 'Vagas abertas',
          value: '13.454',
          description: 'Tecnologia, economia verde e serviços essenciais',
          trend: 'Meta 2026'
        },
        {
          label: 'Taxa de conclusão',
          value: '75%',
          description: 'Aprendizagem assistida pela ManduvIA e tutores humanos',
          trend: '+32% vs. cursos tradicionais'
        },
        {
          label: 'Empregabilidade',
          value: '60% em 6 meses',
          description: 'Acordos com empresas parceiras e monitoramento pós-formação',
          trend: 'Dados auditados ManduvIA Insights'
        }
      ],
      proofPoints: [
        'ManduvIA Mentor conversa 24/7 e adapta o percurso para cada estudante.',
        'Plataforma hospedada em nuvem com LGPD e dashboard de impacto em tempo real.',
        'Parcerias com Google, Amazon e SENAI para certificações profissionais.'
      ],
      experience: {
        title: 'Como entregamos empregabilidade',
        steps: [
          {
            title: 'Diagnóstico e mobilização',
            description: 'Mapeamos territórios, divulgamos vagas e engajamos agentes comunitários.'
          },
          {
            title: 'Trilhas guiadas por IA',
            description: 'Conteúdo snackable, mentor ManduvIA, avaliações práticas e suporte emocional.'
          },
          {
            title: 'Conexão com vagas e renda',
            description: 'Feiras de contratação, trilhas de empreendedorismo e monitoramento de resultados.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'O Meu Futuro transformou nossa política de juventude. A taxa de conclusão superou tudo o que já investimos em cursos presenciais.',
          author: 'Tatiane Silva',
          role: 'Secretária de Desenvolvimento – Governo de Mato Grosso'
        }
      ],
      gallery: [
        { image: '/images/mindfulapp.jpg', caption: 'Trilha ManduvIA Mentor em comunidades ribeirinhas' },
        { image: '/images/ecomarket.jpg', caption: 'Jornada de contratação com empresas parceiras' }
      ],
      timeline: [
        { year: '2022', milestone: 'Piloto com 1.200 jovens em Mato Grosso' },
        { year: '2023', milestone: 'ManduvIA Mentor e trilhas via WhatsApp' },
        { year: '2025', milestone: 'Expansão para mercados verdes no Norte/Nordeste' }
      ],
      faqs: [
        {
          question: 'Qual o investimento por turma?',
          answer: 'Modelos flexíveis por desempenho, patrocínio corporativo ou emendas parlamentares.'
        },
        {
          question: 'É possível integrar com a base de vagas da minha empresa?',
          answer: 'Sim! Conectamos ManduvIA a ATS corporativos e plataformas de RH para fluxo contínuo.'
        }
      ],
      support: {
        headline: 'Vamos ativar oportunidades de renda',
        description: 'Criamos propostas turnkey com matrículas imediatas, equipe local e indicadores ESG.',
        actions: [
          { label: 'Conversar com especialista', href: '#contato' },
          { label: 'Ver trilhas disponíveis', href: '#materiais' }
        ]
      }
    }
  },
  {
    id: 'coloiado',
    name: 'Coloiado – Saúde, Esporte e Lazer',
    pillar: 'Inovação Data-Driven',
    icon: Database,
    headline: 'Dados e IA para governança social',
    intro:
      'Plataforma que coleta, analisa e visualiza dados para revolucionar a gestão social com transparência e eficiência.',
    highlights: [
      'Observatório com dashboards intuitivos e assessoramento por IA.',
      'Crawlers, formulários e chatbots monitoram engajamento e resultados.',
      'Hub de P&D que impulsiona startups e agendas ESG.'
    ],
    metric: 'Governança inteligente',
    landing: {
      hero: {
        eyebrow: 'Dados & inteligência',
        title: 'Coloiado – observatório vivo para políticas públicas e parceiros ESG',
        subtitle: 'Combina crawlers, formulários inteligentes, analytics e IA para decisões rápidas e transparentes',
        description:
          'Integramos fontes públicas e privadas, construímos dashboards customizados e entregamos recomendações via ManduvIA para gestores sociais e patrocinadores.',
        media: { type: 'image', src: '/images/financetracker.jpg' },
        primaryCta: { label: 'Ver demonstração ao vivo', href: '#demo' },
        secondaryCta: { label: 'Solicitar proposta sob medida', href: '#contato' }
      },
      metrics: [
        {
          label: 'Dados monitorados',
          value: '2,4 mi registros',
          description: 'Assistência social, educação, esporte e renda',
          trend: 'Atualização diária'
        },
        {
          label: 'Painéis ativos',
          value: '38 observatórios',
          description: 'Prefeituras, empresas e coalizões ESG',
          trend: 'Implementation-as-a-service'
        },
        {
          label: 'Insights acionáveis',
          value: '92 decisões/ano',
          description: 'Recomendações com IA e monitoria humana',
          trend: 'Compliance e auditoria contínua'
        }
      ],
      proofPoints: [
        'Dashboards personalizados com alertas ManduvIA para equipes de campo.',
        'Integração com CRMs, sistemas de saúde e plataformas governamentais.',
        'Times dedicados de cientistas de dados, UX e especialistas sociais.'
      ],
      experience: {
        title: 'Do dado bruto à decisão',
        steps: [
          {
            title: 'Discovery e design de indicadores',
            description: 'Entrevistas, definição de métricas e arquitetura de dados com foco em impacto.'
          },
          {
            title: 'Coleta inteligente',
            description: 'Crawlers, formulários no WhatsApp, integrações API e ManduvIA para completar informações.'
          },
          {
            title: 'Insights e governance',
            description: 'Dashboards, relatórios automatizados, planos de ação assistidos pela IA.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'Com o Coloiado conseguimos direcionar orçamento e comprovar impacto com evidências, ganhando a confiança de parceiros e órgãos de controle.',
          author: 'Fernanda Rocha',
          role: 'Secretária de Assistência Social de Várzea Grande'
        }
      ],
      gallery: [
        { image: '/images/financetracker.jpg', caption: 'Painel Coloiado para municípios parceiros' },
        { image: '/images/mindfulapp.jpg', caption: 'ManduvIA aconselhando gestores em tempo real' }
      ],
      timeline: [
        { year: '2020', milestone: 'Lançamento com 5 municípios pilotos' },
        { year: '2022', milestone: 'Integração com ManduvIA e crawlers sociais' },
        { year: '2024', milestone: 'Plataforma SaaS com hub de parceiros ESG' }
      ],
      faqs: [
        {
          question: 'Qual o tempo médio de implementação?',
          answer: 'Entre 45 e 70 dias com dados históricos e setup completo de dashboards.'
        },
        {
          question: 'É possível hospedar on-premise?',
          answer: 'A plataforma é cloud-first, mas oferecemos integrações seguras com ambientes legados.'
        }
      ],
      support: {
        headline: 'Vamos dar transparência ao impacto',
        description: 'Planejamento de implantação, trilha de capacitação e suporte ManduvIA premium para equipes.',
        actions: [
          { label: 'Agendar demonstração', href: '#demo' },
          { label: 'Solicitar proposta de dados', href: '#contato' }
        ]
      }
    }
  },
  {
    id: 'academia',
    name: 'Academia Solidária',
    pillar: 'Esporte que Acolhe',
    icon: Boxes,
    headline: 'Não é caridade, é investimento social',
    intro:
      'Quartel-general das iniciações esportivas que une desenvolvimento físico, acompanhamento social e avaliação contínua.',
    highlights: [
      'Redução de 5% no sobrepeso e 20% na evasão escolar.',
      '68% de melhora nas notas e 94% se sentem em espaço seguro.',
      'Boxe, Jiu-Jitsu, Futebol, Ginástica Rítmica + Planos Individuais de Desenvolvimento.'
    ],
    metric: 'Impacto mensurável desde 2024',
    landing: {
      hero: {
        eyebrow: 'Bem-estar comunitário',
        title: 'Academia Solidária – quartel-general do desenvolvimento integral',
        subtitle: 'Complexo socioesportivo que une plano de vida, tecnologia e rede de cuidado',
        description:
          'Boxe, jiu-jitsu, futebol, ginástica rítmica, ManduvIA Mentor, acompanhamento nutricional e apoio psicossocial. Tudo integrado em dados e metodologias Manduvia.',
        media: { type: 'image', src: '/images/ecomarket.jpg' },
        primaryCta: { label: 'Investir em uma Academia Solidária', href: '#contato' },
        secondaryCta: { label: 'Visitar unidade piloto', href: '#agenda' }
      },
      metrics: [
        {
          label: 'Famílias acompanhadas',
          value: '1.460',
          description: 'Acolhimento integral e ManduvIA Mentor familiar',
          trend: '+67% percepção segurança'
        },
        {
          label: 'Melhora escolar',
          value: '68% participantes',
          description: 'Notas superiores após 6 meses de programa',
          trend: 'Dados ManduvIA Insights 2024'
        },
        {
          label: 'Redução evasão',
          value: '-20%',
          description: 'Parceria com escolas e acompanhamento socioemocional',
          trend: 'Resultados auditados'
        }
      ],
      proofPoints: [
        'Planos Individuais de Desenvolvimento conduzidos por ManduvIA e equipe multidisciplinar.',
        'Infraestrutura sustentável com energia solar, captação de água e espaços maker.',
        'Modelo replicável via leis de incentivo, fundos municipais e patrocínio corporativo.'
      ],
      experience: {
        title: 'Como entregamos transformação',
        steps: [
          {
            title: 'Projeto arquitetônico e onboarding',
            description: 'Diagnóstico territorial, desenho arquitetônico modular e captação de recursos.'
          },
          {
            title: 'Operação com ManduvIA',
            description: 'Trilhas esportivas, educação socioemocional, nutrição, mandala familiar e analytics.'
          },
          {
            title: 'Legado e expansão',
            description: 'Formação de lideranças locais, franquia social e monitoramento contínuo.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'A Academia Solidária mudou a dinâmica da comunidade. É um equipamento completo de acolhimento, inovação e renda.',
          author: 'Marcelo Oliveira',
          role: 'Prefeito de Município Parceiro'
        }
      ],
      gallery: [
        { image: '/images/hero-background.webp', caption: 'Complexo Academia Solidária – vista aérea' },
        { image: '/images/mindfulapp.jpg', caption: 'ManduvIA Mentor acompanhando famílias' }
      ],
      timeline: [
        { year: '2023', milestone: 'Unidade piloto em Várzea Grande' },
        { year: '2024', milestone: 'Expansão com módulos esportivos e ManduvIA Familiar' },
        { year: '2025', milestone: 'Rede de Academias Solidárias em 3 estados' }
      ],
      faqs: [
        {
          question: 'Qual o modelo de investimento?',
          answer: 'Estruturamos via leis de incentivo, fundos municipais ou patrocínio naming rights.'
        },
        {
          question: 'Quanto tempo leva para implantar?',
          answer: 'Projetos modulares entregues em 6–8 meses, já com equipe treinada.'
        }
      ],
      support: {
        headline: 'Vamos levar acolhimento para seu território',
        description: 'Apresentamos estudo de viabilidade, plano arquitetônico e governança Manduvia.',
        actions: [
          { label: 'Solicitar estudo personalizado', href: '#contato' },
          { label: 'Conhecer casos de sucesso', href: '#materiais' }
        ]
      }
    }
  },
  {
    id: 'assistencia',
    name: 'Assistência & Saúde Manduvi',
    pillar: 'Rede de Cuidado',
    icon: Users,
    headline: 'Resposta rápida e cuidado contínuo',
    intro:
      'Programas que garantem segurança alimentar, saúde física e mental em comunidades vulneráveis.',
    highlights: [
      'Lutar Contra a Fome alinha-se ao ODS-2 com logística eficiente de doações.',
      'Esporte que Acolhe acumula 20.000 atendimentos em Cuiabá e Várzea Grande.',
      'Ser + Saudável combate DNTs com projetos como Longevidade Saudável e Super Ralinha (2.000 participantes).'
    ],
    metric: 'Cuidado ativo em crises',
    landing: {
      hero: {
        eyebrow: 'Rede Manduvia de cuidado',
        title: 'Assistência & Saúde Manduvi – resposta rápida, cuidado contínuo',
        subtitle: 'Programas de segurança alimentar, saúde física e mental com tecnologia e voluntariado estruturado',
        description:
          'Da cesta emergencial ao plano de longevidade, conectamos ManduvIA, voluntários, parceiros públicos e investimento social para garantir dignidade nas crises e além.',
        media: { type: 'image', src: '/images/financetracker.jpg' },
        primaryCta: { label: 'Apoiar a rede de cuidado', href: '#contato' },
        secondaryCta: { label: 'Ver plano de resposta', href: '#materiais' }
      },
      metrics: [
        {
          label: 'Atendimentos totais',
          value: '20 mil/ano',
          description: 'Saúde, alimentação e ManduvIA bem-estar',
          trend: '+35% cobertura em 2024'
        },
        {
          label: 'Cestas entregues',
          value: '48 toneladas',
          description: 'Logística inteligente e monitoramento ManduvIA',
          trend: '0% desperdício'
        },
        {
          label: 'Voluntários ativos',
          value: '312',
          description: 'Capacitados com ManduvIA Concierge',
          trend: 'Rede nacional expandindo'
        }
      ],
      proofPoints: [
        'Logística rastreável com ManduvIA e parceiros last-mile.',
        'Programas Ser + Saudável e Longevidade com acompanhamento médico e nutricional.',
        'Resposta a emergências climáticas com kits e acolhimento psicossocial.'
      ],
      experience: {
        title: 'Da emergência ao empoderamento',
        steps: [
          {
            title: 'Mapeamento e triagem ManduvIA',
            description: 'Identificamos famílias, priorizamos casos críticos e ativamos voluntários.'
          },
          {
            title: 'Entrega coordenada',
            description: 'Kits alimentares, atendimentos de saúde, ManduvIA Bem-estar e suporte emocional.'
          },
          {
            title: 'Plano de autonomia',
            description: 'Conexão com programas de renda, benefícios sociais e trilhas educacionais.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'Em momentos críticos, a Manduvia é a primeira a chegar e a última a sair. Resultado, dados e acolhimento caminham juntos.',
          author: 'Joana Paredes',
          role: 'Coordenadora CRAS Várzea Grande'
        }
      ],
      gallery: [
        { image: '/images/mindfulapp.jpg', caption: 'Mutirão Manduvia de cuidado integral' },
        { image: '/images/ecomarket.jpg', caption: 'Rede de voluntários e logística ManduvIA' }
      ],
      timeline: [
        { year: '2004', milestone: 'Primeiras ações Manduvia no Pantanal' },
        { year: '2020', milestone: 'ManduvIA Concierge para voluntários' },
        { year: '2024', milestone: 'Expansão nacional da rede de cuidado' }
      ],
      faqs: [
        {
          question: 'Como direcionar doações?',
          answer: 'Processamos recursos financeiros, itens e logística via ManduvIA, com relatórios transparentes.'
        },
        {
          question: 'É possível replicar a rede em outros estados?',
          answer: 'Sim. Entregamos blueprint Manduvia, tecnologia, cronograma e treinamento voluntário.'
        }
      ],
      support: {
        headline: 'Vamos cuidar juntos',
        description: 'Estruturamos planos de contingência, voluntariado corporativo e relatórios ESG em tempo real.',
        actions: [
          { label: 'Doar agora', href: '#contato' },
          { label: 'Criar programa de cuidado', href: '#materiais' }
        ]
      }
    }
  },
  {
    id: 'cursos-ead',
    name: 'Cursos EAD Manduvi',
    pillar: 'Educação Digital',
    icon: GraduationCap,
    headline: 'De amador a empreendedor, nós te levamos lá',
    intro:
      'Plataforma de educação a distância com mais de 100 cursos certificados em tecnologia, administração, saúde e desenvolvimento pessoal.',
    highlights: [
      'Mais de 100 cursos disponíveis em 4 categorias principais.',
      'Preços acessíveis a partir de R$ 99,00 com certificação oficial.',
      'Cursos gratuitos disponíveis em programas especiais de capacitação.'
    ],
    metric: 'Educação que transforma vidas',
    landing: {
      hero: {
        eyebrow: 'Educação & capacitação',
        title: 'Cursos EAD Manduvi – sua jornada de aprendizado começa aqui',
        subtitle: 'Plataforma completa de educação a distância com cursos certificados e preços acessíveis',
        description:
          'Oferecemos cursos em Administração, Economia e Finanças, Bem Estar e Qualidade de Vida, Idiomas e Vendas. Todos com certificação oficial e suporte especializado.',
        media: { type: 'image', src: '/images/hero-background.webp' },
        primaryCta: { label: 'Acessar plataforma de cursos', href: 'https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos' },
        secondaryCta: { label: 'Ver cursos gratuitos', href: 'https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos' }
      },
      metrics: [
        {
          label: 'Cursos disponíveis',
          value: '100+',
          description: 'Tecnologia, administração, saúde e desenvolvimento pessoal',
          trend: 'Novos cursos mensais'
        },
        {
          label: 'Categorias',
          value: '4 principais',
          description: 'Administração, Bem Estar, Idiomas e Vendas',
          trend: 'Conteúdo atualizado'
        },
        {
          label: 'Investimento',
          value: 'A partir de R$ 99',
          description: 'Preços acessíveis com certificação oficial',
          trend: 'Cursos gratuitos disponíveis'
        }
      ],
      proofPoints: [
        'Cursos certificados com validade nacional e reconhecimento profissional.',
        'Plataforma intuitiva com suporte técnico especializado.',
        'Programas especiais com cursos gratuitos para comunidades vulneráveis.'
      ],
      experience: {
        title: 'Como funciona nossa plataforma',
        steps: [
          {
            title: 'Escolha seu curso',
            description: 'Navegue por mais de 100 opções em 4 categorias principais com descrições detalhadas.'
          },
          {
            title: 'Matricule-se online',
            description: 'Processo simples e seguro com pagamento facilitado e acesso imediato.'
          },
          {
            title: 'Estude no seu ritmo',
            description: 'Conteúdo disponível 24/7 com suporte e certificação ao final.'
          }
        ]
      },
      testimonials: [
        {
          quote:
            'Os cursos do Manduvi me ajudaram a conseguir uma promoção no trabalho. O conteúdo é excelente e o preço justo.',
          author: 'Maria Silva',
          role: 'Aluna de Administração'
        }
      ],
      gallery: [
        { image: '/images/hero-background.webp', caption: 'Plataforma de cursos EAD Manduvi' },
        { image: '/images/mindfulapp.jpg', caption: 'Estudantes acessando conteúdo online' }
      ],
      timeline: [
        { year: '2020', milestone: 'Lançamento da plataforma EAD' },
        { year: '2022', milestone: 'Expansão para 100+ cursos' },
        { year: '2024', milestone: 'Programas gratuitos para comunidades' }
      ],
      faqs: [
        {
          question: 'Os certificados são válidos?',
          answer: 'Sim, todos os nossos certificados têm validade nacional e são reconhecidos pelo mercado de trabalho.'
        },
        {
          question: 'Como funciona o suporte?',
          answer: 'Oferecemos suporte técnico e pedagógico através de chat, email e telefone durante todo o curso.'
        }
      ],
      support: {
        headline: 'Comece sua jornada de aprendizado hoje',
        description: 'Acesse nossa plataforma, escolha seu curso e transforme sua carreira com educação de qualidade.',
        actions: [
          { label: 'Acessar cursos', href: 'https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos' },
          { label: 'Falar com consultor', href: '#contato' }
        ]
      }
    }
  }
]

export const initiativeKpis = [
  {
    label: 'Comunidade acolhida',
    value: '72 mil pessoas',
    delta: '+18% em 12 meses',
    description: 'Famílias impactadas diretamente por nossas iniciativas contínuas',
    icon: HeartHandshake
  },
  {
    label: 'Investimento social',
    value: 'R$ 12,5 mi',
    delta: '5 programas em escala',
    description: 'Captação articulada com líderes empresariais e políticas de incentivo fiscal',
    icon: LineChart
  },
  {
    label: 'Rede ativa',
    value: '214 parceiros',
    delta: '32 novos em 2024',
    description: 'Empresas, governo e sociedade civil cocriando soluções de impacto',
    icon: Share2
  },
  {
    label: 'Satisfação',
    value: '94% índice NPS',
    delta: 'Pesquisa contínua Manduvia Insights',
    description: 'Participantes recomendariam as iniciativas para familiares e amigos',
    icon: Award
  }
]

export const initiativeGallery = [
  {
    title: 'Jornadas de acolhimento',
    caption: 'Rodas de conversa e diagnósticos de impacto social em Cuiabá e região',
    image: '/images/mindfulapp.jpg'
  },
  {
    title: 'Academia Solidária em ação',
    caption: 'Metodologia HEXA aplicada a treinos integrados e mentoria familiar',
    image: '/images/ecomarket.jpg'
  },
  {
    title: 'Tecnologia para governança',
    caption: 'Coloiado coleta dados em tempo real para orientar políticas públicas',
    image: '/images/financetracker.jpg'
  }
]

export const initiativeAgenda = [
  {
    title: 'Demo Day ManduvIA Mentores',
    date: '18 MAR · 14h',
    location: 'Arena Pantanal – Cuiabá/MT',
    description: 'Apresentação dos resultados do Programa Meu Futuro com parceiros empregadores.',
    icon: CalendarDays,
    badge: 'Inscrições abertas',
    ctaLabel: 'Reservar vaga'
  },
  {
    title: 'Circuito Jiu-Jitsu para Todos',
    date: '06 ABR · 08h',
    location: 'APAE Cuiabá',
    description: 'Festival inclusivo com avaliações físicas, oficinas e celebração das conquistas.',
    icon: ActivitySquare,
    badge: 'Experiência imersiva',
    ctaLabel: 'Quero participar'
  },
  {
    title: 'Fórum Coloiado Dados & Impacto',
    date: '24 ABR · 09h',
    location: 'Hub Manduvia – Rio de Janeiro/RJ',
    description: 'Debate sobre governança social data-driven com gestores públicos e empresas aliadas.',
    icon: MapPinned,
    badge: 'Híbrido',
    ctaLabel: 'Receber convite'
  }
]

export const initiativeActions = [
  {
    title: 'Seja parte da rede Manduvia',
    description: 'Conecte sua empresa ou território ao ecossistema que acelera impacto socioambiental.',
    primaryLabel: 'Agendar apresentação',
    secondaryLabel: 'Baixar media kit',
    icon: ArrowUpRightSquare
  },
  {
    title: 'Invista nas iniciativas',
    description: 'Direcione recursos incentivados, aporte ESG ou naming rights para programas escaláveis.',
    primaryLabel: 'Simular investimento',
    secondaryLabel: 'Falar com especialista',
    icon: LineChart
  },
  {
    title: 'Transforme vidas conosco',
    description: 'Seja voluntário, mentor ou parceiro técnico nas frentes de educação, esporte e inovação.',
    primaryLabel: 'Quero contribuir',
    secondaryLabel: 'Conhecer projetos',
    icon: HeartHandshake
  }
]

export const initiativePartners = [
  {
    name: 'Sebrae MT',
    role: 'Inovação empreendedora'
  },
  {
    name: 'Cuiabá Esporte Clube',
    role: 'Alto rendimento e base'
  },
  {
    name: 'Secretaria Estadual de Assistência',
    role: 'Políticas públicas e cofinanciamento'
  },
  {
    name: 'Fundação Vale',
    role: 'Investimento social privado'
  }
]
