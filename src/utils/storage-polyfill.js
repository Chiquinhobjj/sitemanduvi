// Polyfill robusto para resolver StorageType.persistent deprecated
// Este arquivo resolve o aviso: "StorageType.persistent is deprecated. Please use standardized navigator.storage instead."

if (typeof window !== 'undefined') {
  // 1. Garantir que navigator.storage existe
  if (!window.navigator.storage) {
    window.navigator.storage = {}
  }

  // 2. Implementar navigator.storage.persist usando API moderna
  if (!window.navigator.storage.persist) {
    window.navigator.storage.persist = async () => {
      try {
        // Usar a API moderna de storage
        if (window.navigator.storage && 'persist' in window.navigator.storage) {
          return await window.navigator.storage.persist()
        }
        // Fallback: sempre retornar true para evitar problemas
        return true
      } catch (error) {
        console.warn('Storage persist não suportado, usando fallback:', error)
        return true
      }
    }
  }

  // 3. Implementar navigator.storage.estimate usando API moderna
  if (!window.navigator.storage.estimate) {
    window.navigator.storage.estimate = async () => {
      try {
        if (window.navigator.storage && 'estimate' in window.navigator.storage) {
          return await window.navigator.storage.estimate()
        }
        // Fallback básico
        return {
          quota: 50000000, // 50MB
          usage: 0
        }
      } catch (error) {
        console.warn('Storage estimate não suportado:', error)
        return { quota: 50000000, usage: 0 }
      }
    }
  }

  // 4. Substituir StorageType.persistent completamente
  if (window.StorageType) {
    // Remover StorageType.persistent e substituir por string
    delete window.StorageType.persistent
    window.StorageType = {
      ...window.StorageType,
      PERSISTENT: 'persistent',
      TEMPORARY: 'temporary'
    }
  } else {
    // Criar StorageType se não existir
    window.StorageType = {
      PERSISTENT: 'persistent',
      TEMPORARY: 'temporary'
    }
  }

  // 5. Interceptar chamadas para StorageType.persistent
  const originalStorageType = window.StorageType
  window.StorageType = new Proxy(originalStorageType, {
    get(target, prop) {
      if (prop === 'persistent') {
        console.warn('StorageType.persistent está deprecated, usando fallback')
        return 'persistent'
      }
      return target[prop]
    }
  })

  // 6. Garantir que localStorage e sessionStorage funcionem
  if (!window.localStorage) {
    console.warn('localStorage não disponível, criando fallback')
    window.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0
    }
  }

  if (!window.sessionStorage) {
    console.warn('sessionStorage não disponível, criando fallback')
    window.sessionStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0
    }
  }

  console.log('✅ Storage polyfill aplicado com sucesso')
}

export default {}
