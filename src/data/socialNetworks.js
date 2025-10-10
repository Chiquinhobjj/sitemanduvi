import { Instagram, Facebook, Linkedin, Youtube, ExternalLink, Heart, MessageCircle, Share2, Eye } from 'lucide-react'

export const socialNetworks = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@institutomanduvi',
    url: 'https://www.instagram.com/institutomanduvi/',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    followers: '12.5K',
    description: 'Acompanhe nosso dia a dia, projetos e conquistas',
    posts: [
      {
        id: '1',
        image: '/images/hero-background.webp',
        caption: '🎉 Mais de 150 mil vidas transformadas! Obrigado por fazer parte desta jornada de impacto social. #Manduvi #ImpactoSocial #Transformação',
        likes: 234,
        comments: 18,
        date: '2 horas atrás',
        type: 'post'
      },
      {
        id: '2',
        image: '/images/hero-background.webp',
        caption: '🏆 Fabricio Galvão, nosso campeão! Primeiro faixa-preta com Síndrome de Down do mundo no Jiu-Jitsu. Inspiração pura! #JiuJitsuParaTodos #Inclusão',
        likes: 456,
        comments: 32,
        date: '1 dia atrás',
        type: 'post'
      },
      {
        id: '3',
        image: '/images/hero-background.webp',
        caption: '📚 Programa Meu Futuro: 13.454 vagas disponíveis! Capacitação profissional com ManduvIA Mentor. Inscreva-se! #Educação #Tecnologia',
        likes: 189,
        comments: 25,
        date: '3 dias atrás',
        type: 'post'
      }
    ]
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Instituto Manduvi',
    url: 'https://www.facebook.com/institutomanduvi',
    icon: Facebook,
    color: 'from-blue-600 to-blue-800',
    followers: '8.2K',
    description: 'Conecte-se conosco e acompanhe nossas iniciativas',
    posts: [
      {
        id: '1',
        image: '/images/hero-background.webp',
        caption: '🎯 Academia Solidária: "Não é caridade, é investimento social". Mais de 1.460 famílias acompanhadas com resultados incríveis!',
        likes: 156,
        comments: 12,
        shares: 8,
        date: '4 horas atrás',
        type: 'post'
      },
      {
        id: '2',
        image: '/images/hero-background.webp',
        caption: '🏅 Superralinha 2024: Campeonato de futebol society que une esporte e integração. Inscrições abertas!',
        likes: 89,
        comments: 15,
        shares: 5,
        date: '2 dias atrás',
        type: 'post'
      },
      {
        id: '3',
        image: '/images/hero-background.webp',
        caption: '📊 Coloiado: Nossa plataforma de gestão social com 2,4 milhões de registros monitorados. Tecnologia a serviço da comunidade!',
        likes: 67,
        comments: 9,
        shares: 3,
        date: '5 dias atrás',
        type: 'post'
      }
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Instituto Manduvi',
    url: 'https://www.linkedin.com/company/instituto-manduvi/',
    icon: Linkedin,
    color: 'from-blue-700 to-blue-900',
    followers: '3.8K',
    description: 'Conecte-se profissionalmente e acompanhe nosso impacto',
    posts: [
      {
        id: '1',
        image: '/images/hero-background.webp',
        caption: '🚀 Nossa metodologia HEXA está transformando vidas! 6 pilares: Competência, Confiança, Conexão, Caráter, Cuidado e Contribuição. #MetodologiaHEXA #Desenvolvimento',
        likes: 45,
        comments: 8,
        shares: 12,
        date: '6 horas atrás',
        type: 'post'
      },
      {
        id: '2',
        image: '/images/hero-background.webp',
        caption: '💼 Parceria estratégica: Times/UFMT para o projeto LONGEVIDADE SAUDÁVEL. Ciência e tecnologia a serviço da qualidade de vida dos idosos.',
        likes: 32,
        comments: 6,
        shares: 7,
        date: '1 dia atrás',
        type: 'post'
      },
      {
        id: '3',
        image: '/images/hero-background.webp',
        caption: '📈 Relatório de Impacto 2024: NPS de 94%, mais de 150 mil atendimentos, presença em 3 países. Transparência total!',
        likes: 78,
        comments: 15,
        shares: 18,
        date: '3 dias atrás',
        type: 'post'
      }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@institutomanduvi',
    url: 'https://www.youtube.com/@institutomanduvi',
    icon: Youtube,
    color: 'from-red-500 to-red-700',
    followers: '2.1K',
    description: 'Vídeos educativos, depoimentos e conteúdo exclusivo',
    posts: [
      {
        id: '1',
        image: '/images/hero-background.webp',
        caption: '🎥 "O Fim da Desistência" - Documentário sobre o Programa Meu Futuro',
        views: '1.2K',
        likes: 89,
        comments: 12,
        duration: '15:30',
        date: '1 semana atrás',
        type: 'video'
      },
      {
        id: '2',
        image: '/images/hero-background.webp',
        caption: '🏆 Cerimônia de Premiação Superralinha 2023 - Momentos emocionantes!',
        views: '856',
        likes: 67,
        comments: 8,
        duration: '8:45',
        date: '2 semanas atrás',
        type: 'video'
      },
      {
        id: '3',
        image: '/images/hero-background.webp',
        caption: '📚 Tutorial: Como usar a plataforma ManduvIA Mentor',
        views: '2.1K',
        likes: 134,
        comments: 23,
        duration: '12:15',
        date: '3 semanas atrás',
        type: 'video'
      }
    ]
  }
]

export const socialStats = {
  totalFollowers: '26.6K',
  totalPosts: '156',
  totalViews: '45.2K',
  engagementRate: '8.7%'
}
