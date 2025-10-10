// Workflow avançado baseado no código fornecido
import { OpenAI } from "openai";

const client = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

// Classificação de intenções
const INTENT_CLASSIFICATION = {
  conhecer_instituto: ['história', 'missão', 'transparência', 'relatórios', 'sobre', 'instituto'],
  conhecer_iniciativas: ['projetos', 'programas', 'academia solidária', 'araras', 'apae', 'iniciativas'],
  apoiar_financeiro: ['doação', 'patrocínio', 'financiar', 'investir'],
  apoiar_voluntario: ['voluntário', 'mentoria', 'ajudar', 'participar'],
  apoiar_parceria: ['parceria', 'convênio', 'empresa', 'ong', 'governo'],
  matricular_meu_futuro: ['curso', 'ead', 'certificado', 'inscrição', 'login'],
  matricular_esporte: ['academia', 'modalidade', 'jiu-jitsu', 'boxe', 'futebol', 'horário', 'endereço'],
  eventos_superralinha: ['super ralinha', 'campeonato', 'futebol society', 'inscrição do time'],
  ajuda_urgente: ['socorro', 'denúncia', 'risco', 'urgente', 'ajuda'],
  solicitar_informacoes: ['informação', 'dúvida', 'pergunta'],
  contatar_equipe: ['contato', 'suporte', 'agendar', 'falar'],
  outros: []
};

// Respostas especializadas por intenção
const RESPONSES = {
  conhecer_instituto: {
    text: "O Instituto Manduvi é uma SocialTech fundada em 2004 em Cuiabá, focada em desenvolvimento sustentável e impacto social. Conheça nossa história, missão, valores e metodologia HEXA.",
    links: [
      { title: "Sobre o Instituto", url: "https://manduvi.org.br/about" },
      { title: "Transparência", url: "https://manduvi.org.br/transparencia" },
      { title: "Nossa História", url: "https://manduvi.org.br/about" }
    ]
  },
  
  conhecer_iniciativas: {
    text: "O Instituto Manduvi desenvolve 7 iniciativas principais: Jiu-Jitsu para Todos, Manduvi Araras Team, Programa Meu Futuro, Coloiado, Academia Solidária, Assistência & Saúde, e Cursos EAD.",
    links: [
      { title: "Nossos Projetos", url: "https://manduvi.org.br/projetos" },
      { title: "Academia Solidária", url: "https://manduvi.org.br/projetos/academia" },
      { title: "Programa Meu Futuro", url: "https://manduvi.org.br/projetos/meufuturo" }
    ]
  },
  
  apoiar_financeiro: {
    text: "Você pode apoiar financeiramente o Instituto Manduvi através de doações. Conheça nossos projetos e acesse nossa área de transparência para mais informações.",
    links: [
      { title: "Nossos Projetos", url: "https://manduvi.org.br/projetos" },
      { title: "Transparência", url: "https://manduvi.org.br/transparencia" },
      { title: "Contato", url: "https://manduvi.org.br/contact" }
    ]
  },
  
  apoiar_voluntario: {
    text: "O Instituto Manduvi valoriza o voluntariado. Conheça nossas iniciativas e entre em contato para saber como pode contribuir como voluntário.",
    links: [
      { title: "Nossos Projetos", url: "https://manduvi.org.br/projetos" },
      { title: "Contato", url: "https://manduvi.org.br/contact" }
    ]
  },
  
  apoiar_parceria: {
    text: "O Instituto Manduvi está sempre aberto a parcerias institucionais. Conheça nossos projetos e entre em contato para discutir possibilidades de colaboração.",
    links: [
      { title: "Nossos Projetos", url: "https://manduvi.org.br/projetos" },
      { title: "Transparência", url: "https://manduvi.org.br/transparencia" },
      { title: "Contato", url: "https://manduvi.org.br/contact" }
    ]
  },
  
  matricular_meu_futuro: {
    text: "O Programa Meu Futuro oferece cursos EAD certificados com metodologia de microlearning e suporte 24/7 via WhatsApp. Acesse o catálogo oficial para matrícula.",
    links: [
      { title: "Catálogo de Cursos", url: "https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos" },
      { title: "Programa Meu Futuro", url: "https://playcurso.com/manduvi/loja_virtual/vercombo.php?curso=Programa+de+Formação+e+Capacitação+em+Comunidades+de+Baixa+Renda" }
    ]
  },
  
  matricular_esporte: {
    text: "Nossa Academia Solidária oferece diversas modalidades esportivas. Para informações sobre horários, modalidades e localização, consulte nossa página de projetos.",
    links: [
      { title: "Projetos Esportivos", url: "https://manduvi.org.br/projetos" },
      { title: "Academia Solidária", url: "https://manduvi.org.br/projetos/academia" }
    ]
  },
  
  eventos_superralinha: {
    text: "O Super Ralinha é nosso campeonato de futebol society em Mato Grosso. Para inscrições, regulamentos e informações oficiais, acesse o site do evento.",
    links: [
      { title: "Site Oficial do Super Ralinha", url: "https://superralinha.com.br" },
      { title: "Projeto no Manduvi", url: "https://manduvi.org.br/projetos/ser-esporte-lazer-super-ralinha" }
    ]
  },
  
  ajuda_urgente: {
    text: "Sua segurança é muito importante. Recomendamos procurar apoio junto aos canais institucionais do Manduvi para orientação segura e sigilosa.",
    links: [
      { title: "Home Manduvi", url: "https://manduvi.org.br/" },
      { title: "Transparência", url: "https://manduvi.org.br/transparencia" }
    ]
  },
  
  solicitar_informacoes: {
    text: "Olá! Sou a MirIA, anfitriã especialista do Instituto Manduvi. Como posso te ajudar hoje? Posso te direcionar para nossos cursos, projetos, eventos ou informações institucionais.",
    links: [
      { title: "Cursos EAD", url: "https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos" },
      { title: "Nossos Projetos", url: "https://manduvi.org.br/projetos" },
      { title: "Sobre o Instituto", url: "https://manduvi.org.br/about" }
    ]
  },
  
  contatar_equipe: {
    text: "Para falar diretamente com nossa equipe, acesse nossa página de contato ou utilize os canais oficiais disponíveis no site.",
    links: [
      { title: "Contato", url: "https://manduvi.org.br/contact" },
      { title: "Home", url: "https://manduvi.org.br" }
    ]
  },
  
  outros: {
    text: "Olá! Sou a MirIA, anfitriã especialista do Instituto Manduvi. Como posso te ajudar hoje? Posso te direcionar para nossos cursos, projetos, eventos ou informações institucionais.",
    links: [
      { title: "Cursos EAD", url: "https://www.manduvi.social/loja_virtual/pesquisacurso.php?search=todos" },
      { title: "Nossos Projetos", url: "https://manduvi.org.br/projetos" },
      { title: "Sobre o Instituto", url: "https://manduvi.org.br/about" }
    ]
  }
};

// Função para classificar intenção
function classifyIntent(message) {
  const text = message.toLowerCase();
  let bestMatch = 'outros';
  let maxScore = 0;
  
  for (const [intent, keywords] of Object.entries(INTENT_CLASSIFICATION)) {
    let score = 0;
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        score += 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = intent;
    }
  }
  
  return {
    intent: bestMatch,
    confidence: maxScore > 0 ? Math.min(maxScore / 3, 1) : 0.1
  };
}

// Função principal do workflow
export async function runAdvancedWorkflow(inputText) {
  try {
    // 1. Classificar intenção
    const classification = classifyIntent(inputText);
    console.log('🎯 Intenção classificada:', classification);
    
    // 2. Gerar resposta baseada na intenção
    const response = RESPONSES[classification.intent] || RESPONSES.outros;
    
    // 3. Aplicar guardrails básicos (sem conteúdo inadequado)
    const safeResponse = {
      ...response,
      intent: classification.intent,
      confidence: classification.confidence,
      timestamp: new Date().toISOString()
    };
    
    return safeResponse;
    
  } catch (error) {
    console.error('❌ Erro no workflow avançado:', error);
    return {
      text: "Desculpe, ocorreu um erro ao processar sua solicitação. Tente novamente.",
      links: [
        { title: "Home Manduvi", url: "https://manduvi.org.br" }
      ],
      intent: 'erro',
      confidence: 0,
      timestamp: new Date().toISOString()
    };
  }
}

// Handler para API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  try {
    const result = await runAdvancedWorkflow(message);
    res.status(200).json(result);
  } catch (error) {
    console.error('Workflow error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
