// Dados das publicações do Superralinha
export const publications = [
  {
    id: 'regulamento-geral-2024',
    title: 'Regulamento Geral - Super Ralinha 2024',
    type: 'regulamento',
    date: '2025-10-09',
    description: 'Regulamento oficial completo com todas as regras, critérios de pontuação, sistema de disputa e diretrizes do Super Ralinha 2024.',
    file: {
      name: 'REGULAMENTO GERAL - SUPER RALINHA 2024.pdf',
      url: '/documents/REGULAMENTO GERAL - SUPER RALINHA 2024.pdf',
      size: '293 KB',
      pages: 15
    },
    status: 'ativo',
    category: 'oficial'
  },
  {
    id: 'boletim-comissao-disciplinar',
    title: 'Boletim Oficial - Comissão Disciplinar',
    type: 'comunicado',
    date: '2025-10-09',
    description: 'Boletim oficial da Comissão Disciplinar do Super Ralinha com decisões e orientações disciplinares.',
    file: {
      name: 'BOLETIM OFICIAL - COMISSÃO DISCIPLINAR DO SUPER RALINHA.pdf',
      url: '/documents/BOLETIM OFICIAL - COMISSÃO DISCIPLINAR DO SUPER RALINHA .pdf',
      size: '131 KB',
      pages: 3
    },
    status: 'ativo',
    category: 'comunicado'
  },
  {
    id: 'sumula-julgamento',
    title: 'Súmula de Julgamento - Comissão Disciplinar',
    type: 'comunicado',
    date: '2025-10-09',
    description: 'Súmula de julgamento da Comissão Disciplinar do Super Ralinha com decisões e penalidades aplicadas.',
    file: {
      name: 'SUMULA DE JULGAMENTO - COMISSÃO DISCIPLINAR DO SUPER RALINHA.pdf',
      url: '/documents/SUMULA DE JULGAMENTO - COMISSÃO DISCIPLINAR DO SUPER RALINHA.pdf',
      size: '230 KB',
      pages: 4
    },
    status: 'ativo',
    category: 'comunicado'
  }
]

// Categorias de documentos
export const documentCategories = [
  { id: 'oficial', name: 'Documentos Oficiais', color: 'bg-blue-50 text-blue-600', icon: '📋' },
  { id: 'comunicado', name: 'Comunicados', color: 'bg-orange-50 text-orange-600', icon: '📢' },
  { id: 'formulario', name: 'Formulários', color: 'bg-green-50 text-green-600', icon: '📝' },
  { id: 'organizacao', name: 'Organização', color: 'bg-purple-50 text-purple-600', icon: '⚙️' }
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
