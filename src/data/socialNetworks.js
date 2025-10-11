import { Instagram, Facebook, Linkedin, Youtube, ExternalLink, Heart, MessageCircle, Share2, Eye, MessageSquare, MapPin, Mail, Phone } from 'lucide-react'

export const socialNetworks = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@institutomanduvi',
    url: 'https://www.instagram.com/institutomanduvi/',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    description: 'Acompanhe nosso dia a dia, projetos e conquistas',
    accounts: [
      { handle: '@institutomanduvi', url: 'https://www.instagram.com/institutomanduvi/', name: 'Instituto Manduvi' },
      { handle: '@manduviararasteam', url: 'https://www.instagram.com/manduviararasteam/', name: 'Manduvi Araras Team' },
      { handle: '@academia.solidaria', url: 'https://www.instagram.com/academia.solidaria/', name: 'Academia Solidária' },
      { handle: '@programacoloiado', url: 'https://www.instagram.com/programacoloiado/', name: 'Programa Coloiado' },
      { handle: '@programasermaissaudavel', url: 'https://www.instagram.com/programasermaissaudavel/', name: 'Programa Ser Mais Saudável' },
      { handle: '@manduviacademy', url: 'https://www.instagram.com/manduviacademy/', name: 'Manduvi Academy' },
      { handle: '@chiquinhobjj', url: 'https://www.instagram.com/chiquinhobjj/', name: 'Chiquinho BJJ' },
      { handle: '@superralinha', url: 'https://www.instagram.com/superralinha/', name: 'Superralinha' }
    ]
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Instituto Manduvi',
    url: 'https://www.facebook.com/institutomanduvi',
    icon: Facebook,
    color: 'from-blue-600 to-blue-800',
    description: 'Conecte-se conosco e acompanhe nossas iniciativas'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Instituto Manduvi',
    url: 'https://www.linkedin.com/company/institutomanduvi/',
    icon: Linkedin,
    color: 'from-blue-700 to-blue-900',
    description: 'Conecte-se profissionalmente e acompanhe nosso impacto'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@institutomanduvi',
    url: 'https://www.tiktok.com/@institutomanduvi',
    icon: MessageSquare,
    color: 'from-gray-800 to-gray-900',
    description: 'Conteúdo em vídeo e tendências'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    handle: '@imanduvi',
    url: 'https://x.com/imanduvi',
    icon: MessageSquare,
    color: 'from-blue-400 to-blue-600',
    description: 'Notícias e atualizações em tempo real'
  }
]

export const contactInfo = {
  emails: [
    { address: 'institutomanduvi@gmail.com', type: 'Geral' },
    { address: 'institutolutar@gmail.com', type: 'Lutar' },
    { address: 'manduvi@manduvi.org.br', type: 'Institucional' }
  ],
  whatsapp: {
    phone: '(65) 99690-6281',
    url: 'https://wa.me/5565996906281',
    label: 'WhatsApp Instituto Manduvi'
  },
  addresses: [
    {
      name: 'Sede Principal',
      address: 'Rua Cândido Mariano 830, Av. Mal. Deodoro, n° 1580 - Centro Norte',
      city: 'Cuiabá - MT',
      zip: '78005-150',
      url: 'https://maps.app.goo.gl/dxkczdomZhLtshQC8'
    },
    {
      name: 'Unidade Pico do Amor',
      address: 'Av. Tancredo Neves, 190 - Córrego do Barbado',
      reference: 'em frente à Smart Fit - Pico do Amor / jardim kennedy',
      city: 'Cuiabá - MT',
      zip: '78065-005',
      url: 'https://maps.app.goo.gl/7GF3vJ3KFFVQ7Fj78'
    }
  ]
}

export const socialStats = {
  totalAccounts: '12+',
  totalReach: 'Crescendo',
  engagementRate: 'Alto',
  lastUpdate: '2024'
}
