import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ManduviChatKit = () => {
  const [status, setStatus] = useState('booting');
  const [errorMessage, setErrorMessage] = useState(null);
  const [sendingSuggestion, setSendingSuggestion] = useState(null);
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

  const handleSuggestionClick = async (suggestion) => {
    try {
      console.log('Sugestão clicada:', suggestion);
      setSendingSuggestion(suggestion);
      
      // Aguardar um pouco para o ChatKit estar pronto
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Enviar a sugestão como mensagem para o ChatKit
      if (control && control.sendMessage) {
        await control.sendMessage(suggestion);
      } else {
        // Fallback: tentar encontrar o input do ChatKit e simular digitação
        const chatInput = document.querySelector('[data-testid="composer-input"], .chatkit-composer-input, input[placeholder*="digitar"], textarea[placeholder*="digitar"]');
        if (chatInput) {
          // Simular digitação e envio
          chatInput.value = suggestion;
          chatInput.dispatchEvent(new Event('input', { bubbles: true }));
          
          // Tentar encontrar e clicar no botão de envio
          const sendButton = document.querySelector('[data-testid="send-button"], .chatkit-send-button, button[type="submit"]');
          if (sendButton) {
            sendButton.click();
          } else {
            // Fallback: pressionar Enter
            chatInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
          }
        }
      }
      
      // Limpar o estado de envio após um delay
      setTimeout(() => {
        setSendingSuggestion(null);
      }, 2000);
      
    } catch (error) {
      console.error('Erro ao enviar sugestão:', error);
      setSendingSuggestion(null);
    }
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
                  disabled={sendingSuggestion === suggestion}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200 border whitespace-nowrap ${
                    sendingSuggestion === suggestion
                      ? 'bg-primary/20 text-primary border-primary/40 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary/10 to-primary/5 text-gray-700 hover:from-primary/20 hover:to-primary/10 border-primary/20 hover:border-primary/30'
                  }`}
                >
                  {sendingSuggestion === suggestion ? (
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </span>
                  ) : (
                    suggestion
                  )}
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