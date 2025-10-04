// Dados de exemplo para demonstração do portfólio
export const demoData = {
  personal: {
    name: "Marina Silva Santos",
    title: "Desenvolvedora Full Stack & UX Designer",
    location: "São Paulo, Brasil",
    avatar: "👩‍💻",
    greeting: "👋",
    email: "marina.santos@email.com",
    phone: "+55 11 99999-9999",
    linkedin: "https://linkedin.com/in/marina-santos-dev",
    github: "https://github.com/marina-santos",
    website: "https://marinasantos.dev"
  },

  bio: {
    intro: "Desenvolvedora apaixonada por criar experiências digitais que fazem a diferença na vida das pessoas. Com mais de 5 anos de experiência, especializo-me em React, Node.js e design centrado no usuário.",
    experience: "5+ anos",
    projects: "40+",
    clients: "25+",
    description: "Formada em Ciência da Computação pela USP, sempre busquei unir tecnologia e criatividade. Trabalho principalmente com startups e empresas de médio porte, ajudando a transformar ideias em produtos digitais de sucesso. Quando não estou codando, você me encontra explorando novos cafés em São Paulo ou praticando yoga."
  },

  achievements: [
    { text: '40+ Projetos', bgColor: 'bg-secondary', textColor: 'text-secondary-foreground', icon: '🚀' },
    { text: '25+ Clientes', bgColor: 'bg-accent', textColor: 'text-accent-foreground', icon: '🤝' },
    { text: 'Full Stack', bgColor: 'bg-primary/10', textColor: 'text-primary', icon: '🦄' },
    { text: 'UX Designer', bgColor: 'bg-muted', textColor: 'text-muted-foreground', icon: '🎨' },
    { text: 'Mobile First', bgColor: 'bg-secondary', textColor: 'text-secondary-foreground', icon: '📱' },
    { text: 'Cloud Expert', bgColor: 'bg-primary/10', textColor: 'text-primary', icon: '☁️' },
    { text: 'React Ninja', bgColor: 'bg-accent', textColor: 'text-accent-foreground', icon: '⚛️' },
    { text: 'Node.js Pro', bgColor: 'bg-muted', textColor: 'text-muted-foreground', icon: '🟢' },
    { text: 'TypeScript', bgColor: 'bg-secondary', textColor: 'text-secondary-foreground', icon: '🔷' },
    { text: 'API Design', bgColor: 'bg-accent', textColor: 'text-accent-foreground', icon: '🔌' },
    { text: 'PostgreSQL', bgColor: 'bg-primary/10', textColor: 'text-primary', icon: '🐘' },
    { text: 'AWS Certified', bgColor: 'bg-muted', textColor: 'text-muted-foreground', icon: '🏆' },
    { text: 'Scrum Master', bgColor: 'bg-secondary', textColor: 'text-secondary-foreground', icon: '🏃‍♀️' },
    { text: 'Performance', bgColor: 'bg-accent', textColor: 'text-accent-foreground', icon: '⚡' },
    { text: 'Acessibilidade', bgColor: 'bg-primary/10', textColor: 'text-primary', icon: '♿' },
    { text: 'Mentora', bgColor: 'bg-muted', textColor: 'text-muted-foreground', icon: '👥' }
  ],

  skills: {
    current: [
      { name: "React 18", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "PostgreSQL", level: 82, icon: "🐘" }
    ],
    exploring: [
      { name: "Rust", icon: "🦀", description: "Explorando para desenvolvimento de sistemas de alta performance" },
      { name: "WebAssembly", icon: "🕸️", description: "Integrando com aplicações web para melhor performance" },
      { name: "Machine Learning", icon: "🤖", description: "Aplicando IA em projetos de UX personalizada" },
      { name: "Blockchain", icon: "⛓️", description: "Desenvolvendo soluções DeFi e NFT" }
    ]
  },

  projects: [
    {
      title: "EcoMarket",
      description: "Marketplace sustentável conectando produtores locais a consumidores conscientes",
      image: "/images/ecomarket.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://ecomarket.com.br",
      github: "https://github.com/marina-santos/ecomarket",
      testimonial: {
        text: "Marina transformou nossa visão em uma plataforma incrível. O crescimento foi de 300% em 6 meses!",
        author: "João Silva, CEO EcoMarket"
      }
    },
    {
      title: "MindfulApp",
      description: "Aplicativo de meditação e bem-estar com IA para personalização de experiências",
      image: "/images/mindfulapp.jpg",
      tech: ["React Native", "Python", "TensorFlow", "Firebase"],
      link: "https://mindfulapp.com.br",
      github: "https://github.com/marina-santos/mindfulapp",
      testimonial: {
        text: "A experiência do usuário é simplesmente perfeita. Marina entende tanto de código quanto de pessoas.",
        author: "Ana Costa, Fundadora MindfulApp"
      }
    },
    {
      title: "FinanceTracker Pro",
      description: "Dashboard financeiro para PMEs com análise preditiva e relatórios automatizados",
      image: "/images/financetracker.jpg",
      tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      link: "https://financetracker.pro",
      github: "https://github.com/marina-santos/financetracker",
      testimonial: {
        text: "Reduziu nosso tempo de análise financeira em 80%. Ferramenta indispensável!",
        author: "Carlos Mendes, CFO TechStart"
      }
    }
  ],

  techStack: [
    {
      category: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", icon: "⚛️", description: "Biblioteca principal para interfaces modernas e reativas" },
        { name: "Next.js", icon: "▲", description: "Framework React para aplicações full-stack e SSR" },
        { name: "TypeScript", icon: "🔷", description: "Superset JavaScript para código mais seguro e escalável" },
        { name: "Tailwind CSS", icon: "🎨", description: "Framework CSS utility-first para design responsivo" },
        { name: "Framer Motion", icon: "🎭", description: "Biblioteca de animações para React" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", icon: "🟢", description: "Runtime JavaScript para desenvolvimento server-side" },
        { name: "Express", icon: "🚂", description: "Framework web minimalista e flexível para Node.js" },
        { name: "PostgreSQL", icon: "🐘", description: "Banco de dados relacional robusto e confiável" },
        { name: "MongoDB", icon: "🍃", description: "Banco NoSQL para dados flexíveis e escaláveis" },
        { name: "Redis", icon: "🔴", description: "Cache em memória para alta performance" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: [
        { name: "AWS", icon: "🟠", description: "Plataforma cloud completa para deploy e escalabilidade" },
        { name: "Docker", icon: "🐳", description: "Containerização para ambientes consistentes" },
        { name: "GitHub Actions", icon: "🔄", description: "CI/CD automatizado para deploy contínuo" },
        { name: "Vercel", icon: "▲", description: "Plataforma de deploy otimizada para frontend" },
        { name: "Supabase", icon: "⚡", description: "Backend-as-a-Service com PostgreSQL e auth" }
      ]
    }
  ],

  stats: [
    { label: "Projetos Concluídos", value: "40+", icon: "🚀" },
    { label: "Clientes Satisfeitos", value: "25+", icon: "😊" },
    { label: "Anos de Experiência", value: "5+", icon: "📅" },
    { label: "Tecnologias Dominadas", value: "20+", icon: "🛠️" },
    { label: "Linhas de Código", value: "100K+", icon: "💻" },
    { label: "Cafés Consumidos", value: "∞", icon: "☕" }
  ],

  contact: {
    availability: "Disponível para novos projetos",
    status: "🟢 Online",
    timezone: "GMT-3 (São Paulo)",
    preferredContact: "Email ou LinkedIn",
    responseTime: "Respondo em até 24h",
    workingHours: "Seg-Sex, 9h-18h BRT"
  }
}
