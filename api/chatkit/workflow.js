// Workflow simplificado para o ChatKit do Instituto Manduvi
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const { message } = req.body

  if (!message) {
    res.status(400).json({ error: 'Message is required' })
    return
  }

  try {
    // Classificar a intenção do usuário
    const intent = classifyIntent(message)
    
    // Gerar resposta baseada na intenção
    const response = await generateResponse(intent, message)
    
    res.status(200).json({ 
      response,
      intent,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Workflow error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Classificar intenção do usuário
function classifyIntent(message) {
  const text = message.toLowerCase()
  
  if (text.includes('curso') || text.includes('ead') || text.includes('certificado')) {
    return 'cursos'
  }
  
  if (text.includes('projeto') || text.includes('iniciativa') || text.includes('programa')) {
    return 'projetos'
  }
  
  if (text.includes('super ralinha') || text.includes('campeonato') || text.includes('futebol')) {
    return 'super_ralinha'
  }
  
  if (text.includes('academia') || text.includes('esporte') || text.includes('jiu-jitsu') || text.includes('boxe')) {
    return 'esporte'
  }
  
  if (text.includes('sobre') || text.includes('instituto') || text.includes('história') || text.includes('missão')) {
    return 'sobre'
  }
  
  if (text.includes('doação') || text.includes('apoiar') || text.includes('voluntário') || text.includes('parceria')) {
    return 'apoio'
  }
  
  if (text.includes('contato') || text.includes('falar') || text.includes('equipe')) {
    return 'contato'
  }
  
  return 'geral'
}

// Gerar resposta baseada na intenção
async function generateResponse(intent, message) {
  const responses = {
    cursos: {
      text: "O Instituto Manduvi oferece cursos EAD certificados em diversas áreas. Você pode consultar o catálogo completo e fazer sua matrícula diretamente na plataforma oficial.",
      links: [
        {
          title: "Catálogo de Cursos",
          url: "https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos"
        },
        {
          title: "Programa Meu Futuro",
          url: "https://playcurso.com/manduvi/loja_virtual/vercombo.php?curso=Programa+de+Formação+e+Capacitação+em+Comunidades+de+Baixa+Renda"
        }
      ]
    },
    
    projetos: {
      text: "O Instituto Manduvi desenvolve 7 iniciativas principais focadas em esporte, educação, inovação e assistência social. Conheça todos os nossos projetos e seus impactos.",
      links: [
        {
          title: "Nossos Projetos",
          url: "https://manduvi.org.br/projetos"
        },
        {
          title: "Academia Solidária",
          url: "https://manduvi.org.br/projetos/academia"
        },
        {
          title: "Programa Meu Futuro",
          url: "https://manduvi.org.br/projetos/meufuturo"
        }
      ]
    },
    
    super_ralinha: {
      text: "O Super Ralinha é nosso campeonato de futebol society em Mato Grosso. Para inscrições, regulamentos e informações oficiais, acesse o site do evento.",
      links: [
        {
          title: "Site Oficial do Super Ralinha",
          url: "https://superralinha.com.br"
        },
        {
          title: "Projeto no Manduvi",
          url: "https://manduvi.org.br/projetos/ser-esporte-lazer-super-ralinha"
        }
      ]
    },
    
    esporte: {
      text: "Nossa Academia Solidária oferece diversas modalidades esportivas. Para informações sobre horários, modalidades e localização, consulte nossa página de projetos.",
      links: [
        {
          title: "Projetos Esportivos",
          url: "https://manduvi.org.br/projetos"
        },
        {
          title: "Academia Solidária",
          url: "https://manduvi.org.br/projetos/academia"
        }
      ]
    },
    
    sobre: {
      text: "O Instituto Manduvi é uma SocialTech fundada em 2004 em Cuiabá, focada em desenvolvimento sustentável e impacto social. Conheça nossa história, missão e valores.",
      links: [
        {
          title: "Sobre o Instituto",
          url: "https://manduvi.org.br/about"
        },
        {
          title: "Nossa História",
          url: "https://manduvi.org.br/about"
        },
        {
          title: "Transparência",
          url: "https://manduvi.org.br/transparencia"
        }
      ]
    },
    
    apoio: {
      text: "Você pode apoiar o Instituto Manduvi através de doações, voluntariado ou parcerias institucionais. Conheça nossas iniciativas e formas de contribuir.",
      links: [
        {
          title: "Nossos Projetos",
          url: "https://manduvi.org.br/projetos"
        },
        {
          title: "Transparência",
          url: "https://manduvi.org.br/transparencia"
        },
        {
          title: "Contato",
          url: "https://manduvi.org.br/contact"
        }
      ]
    },
    
    contato: {
      text: "Para falar diretamente com nossa equipe, acesse nossa página de contato ou utilize os canais oficiais disponíveis no site.",
      links: [
        {
          title: "Contato",
          url: "https://manduvi.org.br/contact"
        },
        {
          title: "Home",
          url: "https://manduvi.org.br"
        }
      ]
    },
    
    geral: {
      text: "Olá! Sou a MirIA, anfitriã especialista do Instituto Manduvi. Como posso te ajudar hoje? Posso te direcionar para nossos cursos, projetos, eventos ou informações institucionais.",
      links: [
        {
          title: "Cursos EAD",
          url: "https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos"
        },
        {
          title: "Nossos Projetos",
          url: "https://manduvi.org.br/projetos"
        },
        {
          title: "Sobre o Instituto",
          url: "https://manduvi.org.br/about"
        }
      ]
    }
  }
  
  return responses[intent] || responses.geral
}
