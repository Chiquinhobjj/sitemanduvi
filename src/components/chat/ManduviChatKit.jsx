import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ManduviChatKit = () => {
  const [status, setStatus] = useState('booting');
  const [errorMessage, setErrorMessage] = useState(null);
  const suggestionsRef = useRef(null);

  // Sugestões de interação dinâmicas
  const suggestions = [
    'Quais são as aplicações das quatro grandes categorias de desenvolvimento?',
    'Que critérios práticos são essenciais para o sucesso?',
    'Como funciona a metodologia HEXA?',
    'Quais projetos estão disponíveis atualmente?',
    'Como posso me inscrever nos cursos?',
    'Onde posso encontrar mais informações sobre o Superralinha?',
    'Conte-me sobre a história do Instituto Manduvi',
    'Quais são os valores e missão do Manduvi?',
    'Como posso participar dos projetos sociais?',
    'Há certificação nos cursos oferecidos?'
  ];

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
      placeholder: 'Comece a digitar...',
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

  const scrollSuggestions = (direction) => {
    if (!suggestionsRef.current) return;
    
    const container = suggestionsRef.current;
    const scrollAmount = 300; // Largura de uma sugestão + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Aqui você pode implementar a lógica para enviar a sugestão como mensagem
    console.log('Sugestão clicada:', suggestion);
    // Por enquanto, apenas logamos. Em uma implementação completa,
    // você enviaria isso como uma mensagem para o ChatKit
  };

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
          {errorMessage}
        </div>
      )}

      {/* Carrossel de Sugestões */}
      <div className="mb-4">
        <div className="flex items-center gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
          {/* Botão esquerda */}
          <button
            onClick={() => scrollSuggestions('left')}
            className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Sugestão anterior"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          {/* Container de sugestões com scroll horizontal */}
          <div
            ref={suggestionsRef}
            className="flex-1 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-3 pb-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-sm text-gray-700 hover:from-primary/20 hover:to-primary/10 transition-all duration-200 border border-primary/20 hover:border-primary/30 whitespace-nowrap"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          {/* Botão direita */}
          <button
            onClick={() => scrollSuggestions('right')}
            className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Próxima sugestão"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* ChatKit Component */}
      <div className="bg-stone-100 shadow-2xl rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden">
        <ChatKit 
          control={control} 
          className="h-[600px] w-full"
        />
      </div>
    </div>
  );
};

export default ManduviChatKit;