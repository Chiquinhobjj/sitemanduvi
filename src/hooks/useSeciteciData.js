import { useState, useEffect } from 'react'

// Hook para buscar dados SECITECI do Supabase
export const useSeciteciData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Em produção, substituir por chamadas reais ao Supabase
        // const { data: summary } = await supabase.from('admin.vw_seciteci_resumo').select('*')
        // const { data: cities } = await supabase.from('admin.vw_seciteci_por_cidade').select('*')
        // const { data: ageGroups } = await supabase.from('admin.vw_seciteci_faixa_etaria').select('*')
        // const { data: recent } = await supabase.from('core.seciteci_matriculas').select('*').order('created_at', { ascending: false }).limit(10)
        
        // Mock data anonimizado para desenvolvimento
        const mockData = {
          summary: {
            totalMatriculas: 4128,
            matriculasAtivas: 4128,
            comCpf: 1247,
            semCpf: 2881,
            cidadesDistintas: 15,
            pctCompleto: 30.2
          },
          cities: [
            { name: 'Cuiabá', count: 2847, pctCpf: 35.2, region: 'Centro-Sul' },
            { name: 'Várzea Grande', count: 892, pctCpf: 28.1, region: 'Centro-Sul' },
            { name: 'Rondonópolis', count: 234, pctCpf: 42.3, region: 'Sul' },
            { name: 'Sinop', count: 156, pctCpf: 25.6, region: 'Norte' },
            { name: 'Cáceres', count: 98, pctCpf: 18.4, region: 'Oeste' },
            { name: 'Tangará da Serra', count: 87, pctCpf: 22.1, region: 'Oeste' },
            { name: 'Barra do Garças', count: 76, pctCpf: 31.6, region: 'Leste' },
            { name: 'Sorriso', count: 65, pctCpf: 26.2, region: 'Norte' },
            { name: 'Primavera do Leste', count: 54, pctCpf: 33.3, region: 'Leste' },
            { name: 'Lucas do Rio Verde', count: 43, pctCpf: 27.9, region: 'Norte' }
          ],
          ageGroups: [
            { range: '0-17 anos', count: 2847, percentage: 69.0 },
            { range: '18-25 anos', count: 892, percentage: 21.6 },
            { range: '26-35 anos', count: 234, percentage: 5.7 },
            { range: '36-50 anos', count: 98, percentage: 2.4 },
            { range: '50+ anos', count: 57, percentage: 1.4 }
          ],
          // Dados anonimizados - sem informações pessoais
          recentMatriculas: [
            { 
              id: 'MAT-001', 
              cidade: 'Cuiabá', 
              login: '****', 
              status: 'ATIVO', 
              hasCpf: true,
              faixaEtaria: '18-25 anos',
              dataMatricula: '2024-10-15'
            },
            { 
              id: 'MAT-002', 
              cidade: 'Várzea Grande', 
              login: '****', 
              status: 'ATIVO', 
              hasCpf: false,
              faixaEtaria: '0-17 anos',
              dataMatricula: '2024-10-14'
            },
            { 
              id: 'MAT-003', 
              cidade: 'Rondonópolis', 
              login: '****', 
              status: 'ATIVO', 
              hasCpf: true,
              faixaEtaria: '26-35 anos',
              dataMatricula: '2024-10-13'
            },
            { 
              id: 'MAT-004', 
              cidade: 'Sinop', 
              login: '****', 
              status: 'ATIVO', 
              hasCpf: false,
              faixaEtaria: '0-17 anos',
              dataMatricula: '2024-10-12'
            },
            { 
              id: 'MAT-005', 
              cidade: 'Cuiabá', 
              login: '****', 
              status: 'ATIVO', 
              hasCpf: true,
              faixaEtaria: '18-25 anos',
              dataMatricula: '2024-10-11'
            }
          ]
        }

        // Simular delay de rede
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setData(mockData)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Erro ao buscar dados SECITECI:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

// Hook para buscar dados em tempo real do Supabase
export const useSeciteciRealTime = () => {
  const [realTimeData, setRealTimeData] = useState(null)

  useEffect(() => {
    // Em produção, configurar subscription do Supabase
    // const subscription = supabase
    //   .channel('seciteci-changes')
    //   .on('postgres_changes', 
    //     { event: '*', schema: 'core', table: 'seciteci_matriculas' },
    //     (payload) => {
    //       console.log('Mudança detectada:', payload)
    //       // Atualizar dados em tempo real
    //     }
    //   )
    //   .subscribe()

    // return () => {
    //   subscription.unsubscribe()
    // }
  }, [])

  return realTimeData
}

// Funções de mascaramento e anonimização
export const maskPersonalData = (data) => {
  if (!data) return data
  
  // Mascarar CPFs
  if (data.cpf) {
    data.cpf = data.cpf.replace(/\d/g, '*').replace(/(.{3})(.{3})(.{3})(.{2})/, '$1.$2.$3-$4')
  }
  
  // Mascarar nomes (manter apenas primeira letra)
  if (data.nome) {
    const parts = data.nome.split(' ')
    data.nome = parts.map(part => part.charAt(0) + '*'.repeat(part.length - 1)).join(' ')
  }
  
  // Mascarar logins
  if (data.login) {
    data.login = '****'
  }
  
  return data
}

// Função para agregar dados mantendo privacidade
export const aggregateData = (rawData) => {
  if (!rawData) return null
  
  return {
    summary: {
      totalMatriculas: rawData.length,
      matriculasAtivas: rawData.filter(d => d.status === 'ATIVO').length,
      comCpf: rawData.filter(d => d.cpf && d.cpf !== '0').length,
      semCpf: rawData.filter(d => !d.cpf || d.cpf === '0').length,
      cidadesDistintas: new Set(rawData.map(d => d.cidade)).size,
      pctCompleto: ((rawData.filter(d => d.cpf && d.cpf !== '0').length / rawData.length) * 100).toFixed(1)
    },
    // Agregações por cidade
    cities: Object.entries(
      rawData.reduce((acc, item) => {
        if (!acc[item.cidade]) {
          acc[item.cidade] = { count: 0, withCpf: 0 }
        }
        acc[item.cidade].count++
        if (item.cpf && item.cpf !== '0') {
          acc[item.cidade].withCpf++
        }
        return acc
      }, {})
    ).map(([city, data]) => ({
      name: city,
      count: data.count,
      pctCpf: ((data.withCpf / data.count) * 100).toFixed(1),
      region: getRegionByCity(city)
    })).sort((a, b) => b.count - a.count)
  }
}

// Função auxiliar para determinar região por cidade
const getRegionByCity = (city) => {
  const regions = {
    'Cuiabá': 'Centro-Sul',
    'Várzea Grande': 'Centro-Sul',
    'Rondonópolis': 'Sul',
    'Sinop': 'Norte',
    'Cáceres': 'Oeste',
    'Tangará da Serra': 'Oeste',
    'Barra do Garças': 'Leste',
    'Sorriso': 'Norte',
    'Primavera do Leste': 'Leste',
    'Lucas do Rio Verde': 'Norte'
  }
  return regions[city] || 'Outras'
}

// Função para exportar dados (apenas agregados)
export const exportSeciteciData = async (format = 'csv') => {
  try {
    // Em produção, implementar exportação real de dados agregados
    console.log(`Exportando dados agregados SECITECI em formato ${format}`)
    
    // Mock de exportação - apenas dados agregados
    const data = {
      summary: 'Dados Agregados SECITECI MT',
      timestamp: new Date().toISOString(),
      format,
      note: 'Dados anonimizados - sem informações pessoais'
    }
    
    return data
  } catch (error) {
    console.error('Erro ao exportar dados:', error)
    throw error
  }
}
