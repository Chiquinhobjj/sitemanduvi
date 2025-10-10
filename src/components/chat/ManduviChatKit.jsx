import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useState } from 'react';

const ManduviChatKit = () => {
  const [status, setStatus] = useState('booting');
  const [errorMessage, setErrorMessage] = useState(null);
  const [chatKey, setChatKey] = useState(0);

  const { control } = useChatKit({
    startScreen: {
      greeting: `Olá! Sou a MirIA, Anfitriã do Instituto Manduvi.
Como posso te ajudar hoje?`,
      prompts: [
        { label: 'Sobre o Instituto Manduvi', prompt: 'Conte-me sobre o Instituto Manduvi' },
        { label: 'Cursos e Formações', prompt: 'Quais cursos vocês oferecem?' },
        { label: 'Projetos e Iniciativas', prompt: 'Mostre-me os projetos do Manduvi' },
        { label: 'Como entrar em contato', prompt: 'Como posso entrar em contato?' }
      ],
    },
    composer: {
      placeholder: 'Dê-me uma missão...',
    },
    theme: {
      radius: 'pill',
      density: 'spacious',
      grayscale: { hue: 30, tint: 7 },
      baseSize: 15,
      fontFamily: 'OpenAI Sans, system-ui, sans-serif',
      fontSources: ['https://cdn.openai.com/fonts/openai-sans.css']
    },
    api: {
      async getClientSecret(existing) {
        console.log('🚀 ChatKit: Iniciando criação de sessão...');
        
        try {
          if (existing) {
            console.log('🔄 ChatKit: Refreshing existing session...');
            // Implementar refresh de sessão se necessário
          }

          const res = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deviceId: crypto.randomUUID() })
          });

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const { client_secret } = await res.json();
          console.log('✅ ChatKit: Sessão criada com sucesso!');
          setStatus('ready');
          setErrorMessage(null);
          
          return client_secret;
        } catch (error) {
          console.error('❌ ChatKit: Erro ao criar sessão:', error);
          setStatus('error');
          setErrorMessage('Erro ao conectar com a MirIA. Tente novamente.');
          throw error;
        }
      },
    },
    onError: (detail) => {
      console.error('❌ ChatKit: Erro no widget', detail);
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao acessar a base de conhecimento. Tente novamente.');
    },
    onStatusChange: (newStatus) => {
      console.log('📡 ChatKit: Status mudou para', newStatus);
      setStatus(newStatus);
      if (newStatus === 'ready') {
        setErrorMessage(null);
      }
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Status Messages */}
      {status !== 'ready' && !errorMessage && (
        <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-foreground/70 mb-4">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <span>
            {status === 'booting' ? 'Inicializando MirIA...' : 'Conectando com a MirIA especialista...'}
          </span>
        </div>
      )}

      {errorMessage && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="flex-1">{errorMessage}</span>
            <button
              type="button"
              className="text-primary underline text-xs sm:text-sm font-medium hover:text-primary/80 transition-colors"
              onClick={() => {
                setErrorMessage(null);
                setStatus('booting');
                setChatKey(prev => prev + 1);
              }}
            >
              Tentar novamente
            </button>
          </div>
        </div>
      )}

      {/* ChatKit Component */}
      <div className="bg-stone-100 shadow-2xl rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden">
        <ChatKit 
          key={chatKey}
          control={control} 
          className="h-[600px] w-full"
        />
      </div>
    </div>
  );
};

export default ManduviChatKit;