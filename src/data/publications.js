// Dados das publicações do Superralinha
export const publications = [
  {
    id: 'regulamento-2024',
    title: 'Regulamento do Campeonato 2024',
    type: 'regulamento',
    date: '2024-10-15',
    description: 'Regulamento oficial com todas as regras, critérios de pontuação e sistema de disputa do Superralinha 2024.',
    file: {
      name: 'Regulamento_Superralinha_2024.pdf',
      url: '/documents/regulamento-superralinha-2024.pdf',
      size: '2.3 MB',
      pages: 12
    },
    status: 'ativo',
    category: 'oficial'
  },
  {
    id: 'lista-times-2024',
    title: 'Lista de Times Inscritos',
    type: 'inscricoes',
    date: '2024-10-10',
    description: 'Lista completa dos 16 times confirmados para participar do campeonato com informações dos jogadores.',
    file: {
      name: 'Lista_Times_Superralinha_2024.pdf',
      url: '/documents/lista-times-superralinha-2024.pdf',
      size: '1.8 MB',
      pages: 8
    },
    status: 'ativo',
    category: 'oficial'
  },
  {
    id: 'cronograma-2024',
    title: 'Cronograma de Jogos',
    type: 'cronograma',
    date: '2024-10-08',
    description: 'Cronograma completo com horários, campos e sistema de disputa para todas as partidas do campeonato.',
    file: {
      name: 'Cronograma_Superralinha_2024.pdf',
      url: '/documents/cronograma-superralinha-2024.pdf',
      size: '1.5 MB',
      pages: 6
    },
    status: 'ativo',
    category: 'oficial'
  },
  {
    id: 'fair-play-2024',
    title: 'Critérios de Fair Play',
    type: 'fairplay',
    date: '2024-10-05',
    description: 'Critérios de fair play e conduta esperada de todos os participantes durante o campeonato.',
    file: {
      name: 'Fair_Play_Superralinha_2024.pdf',
      url: '/documents/fair-play-superralinha-2024.pdf',
      size: '0.9 MB',
      pages: 4
    },
    status: 'ativo',
    category: 'oficial'
  },
  {
    id: 'formulario-inscricao',
    title: 'Formulário de Inscrição',
    type: 'formulario',
    date: '2024-10-01',
    description: 'Formulário oficial para inscrição de times no Superralinha 2024.',
    file: {
      name: 'Formulario_Inscricao_Superralinha_2024.pdf',
      url: '/documents/formulario-inscricao-superralinha-2024.pdf',
      size: '0.7 MB',
      pages: 3
    },
    status: 'ativo',
    category: 'formulario'
  },
  {
    id: 'manual-organizacao',
    title: 'Manual da Organização',
    type: 'manual',
    date: '2024-09-28',
    description: 'Manual completo para organizadores, árbitros e equipe de apoio do campeonato.',
    file: {
      name: 'Manual_Organizacao_Superralinha_2024.pdf',
      url: '/documents/manual-organizacao-superralinha-2024.pdf',
      size: '3.2 MB',
      pages: 18
    },
    status: 'ativo',
    category: 'organizacao'
  }
]

// Categorias de documentos
export const documentCategories = [
  { id: 'oficial', name: 'Documentos Oficiais', color: 'bg-blue-50 text-blue-600', icon: '📋' },
  { id: 'formulario', name: 'Formulários', color: 'bg-green-50 text-green-600', icon: '📝' },
  { id: 'organizacao', name: 'Organização', color: 'bg-purple-50 text-purple-600', icon: '⚙️' },
  { id: 'comunicado', name: 'Comunicados', color: 'bg-orange-50 text-orange-600', icon: '📢' }
]

// Tipos de documentos
export const documentTypes = [
  { id: 'regulamento', name: 'Regulamento', icon: '📜' },
  { id: 'inscricoes', name: 'Inscrições', icon: '📝' },
  { id: 'cronograma', name: 'Cronograma', icon: '📅' },
  { id: 'fairplay', name: 'Fair Play', icon: '🤝' },
  { id: 'formulario', name: 'Formulário', icon: '📋' },
  { id: 'manual', name: 'Manual', icon: '📖' },
  { id: 'comunicado', name: 'Comunicado', icon: '📢' }
]
