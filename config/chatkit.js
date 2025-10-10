// Configuração do ChatKit para o Instituto Manduvi
export const CHATKIT_CONFIG = {
  // Workflow ID atualizado
  WORKFLOW_ID: 'wf_68e6a6d819d88190aee60893b4b8ef660de2547f19c73575',
  
  // API Key (deve ser definida como variável de ambiente)
  API_KEY: process.env.OPENAI_API_KEY,
  
  // Configurações do ChatKit
  CHATKIT_OPTIONS: {
    theme: {
      colorScheme: 'light',
      radius: 'round',
      density: 'compact',
      color: {
        accent: { primary: '#603813', level: 1 },
      },
      typography: {
        baseSize: 15,
      },
    },
    composer: {
      placeholder: 'Pergunte sobre nossos projetos, cursos, eventos ou metodologia...',
      attachments: { enabled: false },
    },
    startScreen: {
      greeting: 'Olá! Sou a MirIA, anfitriã especialista do Instituto Manduvi. Como posso te ajudar hoje?',
      prompts: [
        {
          label: 'Cursos',
          prompt: 'Quero conhecer os cursos certificados'
        },
        {
          label: 'Projetos',
          prompt: 'Quero conhecer os projetos do Instituto'
        },
        {
          label: 'Super Ralinha',
          prompt: 'Quero saber sobre o campeonato Super Ralinha'
        },
        {
          label: 'Sobre',
          prompt: 'Quero saber mais sobre o Instituto'
        }
      ],
    },
  }
};

export default CHATKIT_CONFIG;
