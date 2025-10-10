// Polyfill para resolver o aviso StorageType.persistent deprecated
// Este arquivo resolve o aviso: "StorageType.persistent is deprecated. Please use standardized navigator.storage instead."

if (typeof window !== 'undefined' && window.navigator && window.navigator.storage) {
  // Verificar se o navegador suporta a API moderna de storage
  if (!window.navigator.storage.persist) {
    // Polyfill para navegadores que não suportam navigator.storage.persist
    window.navigator.storage.persist = async () => {
      try {
        // Tentar usar a API moderna se disponível
        if (window.navigator.storage && window.navigator.storage.persist) {
          return await window.navigator.storage.persist()
        }
        // Fallback para navegadores mais antigos
        return false
      } catch (error) {
        console.warn('Storage persist não suportado:', error)
        return false
      }
    }
  }
}

// Polyfill para StorageType se ainda estiver sendo usado
if (typeof window !== 'undefined' && window.StorageType) {
  // Substituir StorageType.persistent por uma implementação moderna
  if (window.StorageType.persistent) {
    window.StorageType.persistent = 'persistent'
  }
}

export default {}
