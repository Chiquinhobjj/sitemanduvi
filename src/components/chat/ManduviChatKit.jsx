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
        console.log('✅ ChatKit está pronto! Control object:', control);
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
      
      // Verificar se o ChatKit está pronto
      if (status !== 'ready') {
        console.log('ChatKit não está pronto ainda, aguardando...');
        setSendingSuggestion(null);
        return;
      }
      
      // Aguardar o ChatKit estar completamente pronto
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Método 1: Tentar usar a API nativa do ChatKit
      if (control && typeof control.sendMessage === 'function') {
        console.log('Tentando enviar via API nativa...');
        await control.sendMessage(suggestion);
        console.log('Mensagem enviada via API nativa');
      } else {
        console.log('API nativa não disponível, tentando fallback...');
        
        // Método 2: Aguardar o ChatKit estar renderizado e tentar múltiplos seletores
        let chatInput = null;
        let attempts = 0;
        const maxAttempts = 10;
        
        while (!chatInput && attempts < maxAttempts) {
          // Tentar diferentes seletores do ChatKit
          chatInput = document.querySelector(
            'textarea[placeholder*="digitar"], ' +
            'input[placeholder*="digitar"], ' +
            'textarea[placeholder*="Comece"], ' +
            'input[placeholder*="Comece"], ' +
            '[data-testid="composer-input"], ' +
            '.chatkit-composer-input, ' +
            'textarea, ' +
            'input[type="text"]'
          );
          
          if (!chatInput) {
            await new Promise(resolve => setTimeout(resolve, 200));
            attempts++;
          }
        }
        
        if (chatInput) {
          console.log('Input encontrado:', chatInput);
          
          // Focar no input primeiro
          chatInput.focus();
          
          // Limpar o input
          chatInput.value = '';
          
          // Simular digitação caractere por caractere para ser mais realista
          for (let i = 0; i < suggestion.length; i++) {
            chatInput.value += suggestion[i];
            chatInput.dispatchEvent(new Event('input', { bubbles: true }));
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          
          // Disparar eventos de mudança
          chatInput.dispatchEvent(new Event('change', { bubbles: true }));
          chatInput.dispatchEvent(new Event('input', { bubbles: true }));
          
          // Aguardar um pouco antes de enviar
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Tentar encontrar o botão de envio
          const sendButton = document.querySelector(
            'button[type="submit"], ' +
            '[data-testid="send-button"], ' +
            '.chatkit-send-button, ' +
            'button[aria-label*="send"], ' +
            'button[title*="send"], ' +
            'button:has(svg), ' +
            'button[class*="send"]'
          );
          
          if (sendButton) {
            console.log('Botão de envio encontrado:', sendButton);
            sendButton.click();
          } else {
            console.log('Botão não encontrado, tentando Enter...');
            // Fallback: pressionar Enter
            chatInput.dispatchEvent(new KeyboardEvent('keydown', { 
              key: 'Enter', 
              code: 'Enter',
              keyCode: 13,
              which: 13,
              bubbles: true 
            }));
          }
        } else {
          console.error('Input do ChatKit não encontrado após', maxAttempts, 'tentativas');
        }
      }
      
      // Limpar o estado de envio após um delay
      setTimeout(() => {
        setSendingSuggestion(null);
      }, 3000);
      
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
                  disabled={sendingSuggestion === suggestion || status !== 'ready'}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200 border whitespace-nowrap ${
                    sendingSuggestion === suggestion
                      ? 'bg-primary/20 text-primary border-primary/40 cursor-not-allowed'
                      : status !== 'ready'
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
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