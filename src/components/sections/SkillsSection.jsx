import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { buildImpactVisual, manduviProjects, metodologiaSROI } from '@/utils/impactVisualFramework.js'

const SkillsSection = () => {
  const [selectedProject, setSelectedProject] = useState('academiaSolidaria')
  const [showMethodology, setShowMethodology] = useState(false)
  const [sroiData, setSroiData] = useState(null)
  
  // Calcular SROI para o projeto selecionado
  const currentProject = manduviProjects[selectedProject]
  
  // useEffect para calcular SROI quando o projeto muda
  React.useEffect(() => {
    const calculateSROI = async () => {
      try {
        const data = await buildImpactVisual(currentProject)
        setSroiData(data)
      } catch (error) {
        console.error('Erro ao calcular SROI:', error)
        setSroiData(null)
      }
    }
    calculateSROI()
  }, [selectedProject])
  const tripéValores = [
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
    },
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
    }
  ]

  const areasDominio = [
    {
      area: 'Esporte, Inclusão e Alto Rendimento',
      icon: '🥋',
      roi: { valor: 1.5, label: 'ROI' },
      sroi: { valor: 3.2, label: 'SROI' },
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
      roi: { valor: 2.8, label: 'ROI' },
      sroi: { valor: 4.1, label: 'SROI' },
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
      roi: { valor: 3.2, label: 'ROI' },
      sroi: { valor: 5.8, label: 'SROI' },
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
      roi: { valor: 2.1, label: 'ROI' },
      sroi: { valor: 4.5, label: 'SROI' },
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
      roi: { valor: 2.5, label: 'ROI' },
      sroi: { valor: 4.8, label: 'SROI' },
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
            <h3 className="text-2xl font-bold text-foreground text-center mb-4">
              O Que Dominamos Hoje
            </h3>
            <p className="text-center text-foreground/70 mb-8 max-w-3xl mx-auto">
              Nossas competências técnicas e sociais, com métricas objetivas de retorno sobre investimento (ROI) e retorno social sobre investimento (SROI)
            </p>
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
                      <h4 className="text-xl font-bold text-foreground mb-3">{area.area}</h4>
                      
                      {/* ROI/SROI Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-3 text-center border border-green-200">
                          <div className="text-lg font-bold text-green-700">
                            R$ {area.roi.valor.toFixed(1)}
                          </div>
                          <div className="text-xs text-green-600 font-medium">
                            {area.roi.label} - Para cada R$ 1,00 investido
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 text-center border border-blue-200">
                          <div className="text-lg font-bold text-blue-700">
                            {area.sroi.valor.toFixed(1)}x
                          </div>
                          <div className="text-xs text-blue-600 font-medium">
                            {area.sroi.label} - Valor social gerado
                          </div>
                        </div>
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

          {/* SROI Detalhado por Projeto */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">Análise SROI Detalhada</h3>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Social Return on Investment (SROI) - Metodologia internacional para medir o valor social gerado por nossos projetos
              </p>
            </div>

            {/* Seletor de Projetos */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(manduviProjects).map(([key, project]) => (
                <button
                  key={key}
                  onClick={() => setSelectedProject(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedProject === key
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-white border border-border hover:bg-primary/10'
                  }`}
                >
                  {project.project.name}
                </button>
              ))}
            </div>

            {/* Cards SROI */}
            {sroiData ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center border border-red-200">
                  <div className="text-3xl font-bold text-red-700 mb-2">
                    {sroiData.snapshot.sroi.pess.toFixed(1)}x
                  </div>
                  <div className="text-sm text-red-600 font-medium">Cenário Pessimista</div>
                  <div className="text-xs text-red-500 mt-1">-30% dos proxies</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    {sroiData.snapshot.sroi.real.toFixed(1)}x
                  </div>
                  <div className="text-sm text-green-600 font-medium">Cenário Realista</div>
                  <div className="text-xs text-green-500 mt-1">Valores base</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
                  <div className="text-3xl font-bold text-blue-700 mb-2">
                    {sroiData.snapshot.sroi.otim.toFixed(1)}x
                  </div>
                  <div className="text-sm text-blue-600 font-medium">Cenário Otimista</div>
                  <div className="text-xs text-blue-500 mt-1">+30% dos proxies</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-lg text-foreground/70">Carregando análise SROI...</div>
              </div>
            )}

            {/* Detalhamento Financeiro */}
            {sroiData && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {currentProject.project.name} - Detalhamento Financeiro
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-foreground">Investimento Total</span>
                      <span className="text-xl font-bold text-red-600">
                        R$ {sroiData.snapshot.totalInvestmentBRL.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium text-foreground">Valor Social Gerado</span>
                      <span className="text-xl font-bold text-green-600">
                        R$ {sroiData.snapshot.totalSocialValueBRL.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground mb-3">Outcomes Detalhados:</h5>
                    {sroiData.snapshot.items.map((item, index) => (
                      <div key={index} className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-sm text-foreground mb-1">{item.outcome}</div>
                        <div className="text-xs text-foreground/70">
                          Bruto: R$ {item.gross.toLocaleString('pt-BR')} | 
                          Líquido: R$ {item.net.toLocaleString('pt-BR')}
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          Proxy: {item.proxy.key} ({item.proxy.source})
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Botão Metodologia */}
            <div className="text-center">
              <button
                onClick={() => setShowMethodology(!showMethodology)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-secondary transition-colors"
              >
                {showMethodology ? 'Ocultar' : 'Ver'} Metodologia SROI
                <span className="text-lg">{showMethodology ? '▲' : '▼'}</span>
              </button>
            </div>

            {/* Metodologia Expandida */}
            {showMethodology && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
              >
                <h4 className="text-2xl font-bold text-foreground text-center">
                  {metodologiaSROI.titulo}
                </h4>
                
                <p className="text-foreground/70 text-center max-w-3xl mx-auto">
                  {metodologiaSROI.descricao}
                </p>

                {/* Etapas da Metodologia */}
                <div className="space-y-4">
                  <h5 className="text-xl font-bold text-foreground">Etapas da Metodologia:</h5>
                  {metodologiaSROI.etapas.map((etapa, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground">{etapa.titulo}</h6>
                        <p className="text-sm text-foreground/70">{etapa.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Referências Bibliográficas */}
                <div className="space-y-4">
                  <h5 className="text-xl font-bold text-foreground">Referências Bibliográficas:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {metodologiaSROI.referencias.map((ref, index) => (
                      <div key={index} className="p-4 bg-blue-50 rounded-xl">
                        <div className="font-semibold text-foreground text-sm">{ref.fonte}</div>
                        <div className="text-sm text-foreground/70">{ref.titulo}</div>
                        <div className="text-xs text-blue-600 mt-1">{ref.ano}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Limitações */}
                <div className="space-y-4">
                  <h5 className="text-xl font-bold text-foreground">Limitações e Considerações:</h5>
                  <ul className="space-y-2">
                    {metodologiaSROI.limitacoes.map((limitacao, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-orange-500 mt-1">⚠️</span>
                        <span>{limitacao}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection