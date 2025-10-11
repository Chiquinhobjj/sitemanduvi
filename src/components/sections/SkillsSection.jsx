import { motion } from 'framer-motion'

const SkillsSection = () => {
  const tripéValores = [
    {
      pilar: 'INOVAR',
      subtitulo: 'Tecnologia & Inovação',
      icon: '🚀',
      descricao: 'Buscamos constantemente soluções inovadoras que vão além do simples apoio, utilizando tecnologia de ponta para escalar impacto social.',
      capacidades: [
        'Inteligência Artificial (IA) para educação personalizada',
        'Chatbots e plataformas online integradas',
        'Data Science e análise de conteúdo multimídia',
        'Ambiente Virtual de Aprendizagem (AVA)',
        'Microlearning e capacitação digital'
      ]
    },
    {
      pilar: 'IMPACTAR',
      subtitulo: 'Resultado & Transformação',
      icon: '🎯',
      descricao: 'Geramos impacto social positivo e duradouro, transformando sonhos em realidade e contribuindo para um futuro sustentável.',
      capacidades: [
        '150 mil+ atendimentos históricos',
        'Primeiro faixa-preta com Síndrome de Down do mundo',
        'Mato Grosso entre os 3 melhores estados em Wrestling',
        'Alinhamento aos ODS da ONU e princípios ESG',
        'Modelo autossustentável Academia Solidária'
      ]
    },
    {
      pilar: 'ACOLHER',
      subtitulo: 'Afeto & Inclusão',
      icon: '🌳',
      descricao: 'Valorizamos a diversidade, criando ambiente inclusivo, colaborativo e inspirador, proporcionando oportunidades de desenvolvimento.',
      capacidades: [
        'Inclusão social através do esporte',
        'Ambiente colaborativo e inspirador',
        'Desenvolvimento de valores e disciplina',
        'Acolhimento a pessoas em vulnerabilidade',
        'Empoderamento e oportunidades para todos'
      ]
    }
  ]

  const areasDominio = [
    {
      area: 'Esporte, Inclusão e Alto Rendimento',
      icon: '🥋',
      nivel: 95,
      evidencias: [
        'Clube de formação registrado no CBC',
        'Jiu-Jitsu Para Todos - APAE (150 atendimentos/ano)',
        'Manduvi Araras Team - Wrestling de excelência',
        'Esporte que Acolhe - 20.000+ atendimentos',
        'Super Ralinha - 2.000 participantes diretos'
      ]
    },
    {
      area: 'Tecnologia e Dados (SocialTech)',
      icon: '🤖',
      nivel: 88,
      evidencias: [
        'Programa Coloiado - IA de assessoramento',
        'Academia Digital de Profissionais',
        'Formação Digital Social - 3.000 beneficiários',
        'Crawlers e análise de conteúdo por IA',
        'Plataforma de gestão social'
      ]
    },
    {
      area: 'Educação e Formação Profissional',
      icon: '📚',
      nivel: 90,
      evidencias: [
        'Programa Meu Futuro - IA e microlearning',
        'Lutar pela Educação (2006-2020) - 100+ bolsas',
        'Capacitação digital integrada ao WhatsApp',
        'Qualificação profissional personalizada',
        'Conexão com mercado de trabalho'
      ]
    },
    {
      area: 'Assistência Social e Saúde',
      icon: '🏥',
      nivel: 92,
      evidencias: [
        'Ser + Saudável - combate DNTs',
        'Lutar Contra a Fome - alinhado ODS-2',
        'Longevidade Saudável - parceria UFMT',
        'Ações COVID-19 - cestas e kits higiene',
        'Promoção saúde mental em comunidades'
      ]
    },
    {
      area: 'Governança e Políticas Públicas (GovTech)',
      icon: '🏛️',
      nivel: 85,
      evidencias: [
        'Revolução na governança social',
        'Transparência e eficiência em políticas públicas',
        'Observatório de dados intuitivo',
        'IA de assessoramento para análises',
        'Foco Baixada Cuiabana'
      ]
    }
  ]

  const frentesExpansao = [
    {
      nome: 'Academia Solidária',
      icon: '🏟️',
      descricao: 'Modelo autossustentável onde matrículas pagas financiam vagas para vulneráveis',
      meta: '2.000 atendimentos/mês',
      status: 'Em expansão'
    },
    {
      nome: 'Programa Coloiado',
      icon: '📊',
      descricao: 'Plataforma de gestão social com IA para revolucionar governança',
      meta: 'Revolução em políticas públicas',
      status: 'Desenvolvimento ativo'
    },
    {
      nome: 'HUB de Inovação',
      icon: '🔬',
      descricao: 'Centro de pesquisa e desenvolvimento tecnológico para startups',
      meta: 'Fomento à inovação',
      status: 'Planejamento'
    },
    {
      nome: 'Alcance Global',
      icon: '🌍',
      descricao: 'Expansão além de Cuiabá: SP, RJ, EUA (Alabama), China (Xangai)',
      meta: 'Impacto internacional',
      status: 'Visão estratégica'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
              ECOSSISTEMA DE TRANSFORMAÇÃO SOCIAL
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Instituto Manduvi: <span className="text-primary">SocialTech</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Unimos afeto, tecnologia e acolhimento para transformar vidas no Pantanal, no Brasil e além. 
              Inspirados na árvore Manduvi, crescemos juntos para gerar impacto sustentável.
            </p>
          </motion.div>

          {/* Tripé de Valores */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Nosso Tripé de Valores
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {tripéValores.map((pilar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/95 border border-border/50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{pilar.icon}</div>
                    <h4 className="text-2xl font-bold text-primary mb-2">{pilar.pilar}</h4>
                    <p className="text-foreground/70 font-medium">{pilar.subtitulo}</p>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {pilar.descricao}
                  </p>
                  <ul className="space-y-2">
                    {pilar.capacidades.map((capacidade, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary mt-1">•</span>
                        <span>{capacidade}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Áreas de Domínio */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              O Que Dominamos Hoje
            </h3>
            <div className="space-y-6">
              {areasDominio.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/95 border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{area.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{area.area}</h4>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                            variants={progressVariants}
                            custom={area.nivel}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-primary">{area.nivel}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {area.evidencias.map((evidencia, evIndex) => (
                      <div key={evIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{evidencia}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frentes em Expansão */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Frentes em Expansão
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frentesExpansao.map((frente, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{frente.icon}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{frente.nome}</h4>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                    {frente.descricao}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Meta: {frente.meta}
                    </div>
                    <div className="text-xs text-foreground/60">
                      Status: {frente.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Faça Parte da Nossa Jornada de Impacto!
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Seja como parceiro, voluntário ou beneficiário, junte-se ao ecossistema Manduvi 
                e ajude-nos a transformar vidas através da tecnologia, afeto e acolhimento.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/80 rounded-xl px-6 py-3 text-sm font-semibold text-foreground">
                  🌳 Inspirados na árvore Manduvi
                </div>
                <div className="bg-white/80 rounded-xl px-6 py-3 text-sm font-semibold text-foreground">
                  🚀 SocialTech dedicada
                </div>
                <div className="bg-white/80 rounded-xl px-6 py-3 text-sm font-semibold text-foreground">
                  🎯 Impacto sustentável
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection