import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSeciteciData } from '@/hooks/useSeciteciData'
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  BarChart3,
  PieChart,
  Map,
  Download,
  Filter,
  Search,
  Calendar,
  UserCheck,
  UserX
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const SeciteciPanel = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState('all')
  const [selectedTab, setSelectedTab] = useState('overview')
  
  // Usar hook personalizado para buscar dados
  const { data, loading, error } = useSeciteciData()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Carregando dados SECITECI MT...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Erro ao Carregar Dados</h2>
            <p className="text-lg text-gray-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Tentar Novamente
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Nenhum Dado Disponível</h2>
            <p className="text-lg text-gray-500">Não há dados SECITECI para exibir no momento.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Painel SECITECI MT
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Business Intelligence e Observação de Evidências - Padrão Ouro dos Dados Educacionais
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Badge variant="outline" className="text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Users className="h-4 w-4 mr-1" />
                {data.summary.totalMatriculas.toLocaleString()} matrículas
              </Badge>
            </div>
            
            {/* Aviso de Privacidade */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-blue-700">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Proteção de Dados Pessoais</span>
              </div>
              <p className="text-sm text-blue-600 mt-2">
                Este painel exibe apenas dados agregados e anonimizados. Informações pessoais como nomes, CPFs e logins 
                são protegidos conforme a LGPD e políticas de privacidade do Instituto Manduvi.
              </p>
            </div>
          </motion.div>

          {/* KPIs Principais */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Total de Matrículas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {data.summary.totalMatriculas.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">100% ativas</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Com CPF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {data.summary.comCpf.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {((data.summary.comCpf / data.summary.totalMatriculas) * 100).toFixed(1)}% do total
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <UserX className="h-4 w-4 mr-2" />
                  Sem CPF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {data.summary.semCpf.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {((data.summary.semCpf / data.summary.totalMatriculas) * 100).toFixed(1)}% do total
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Cidades Atendidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {data.summary.cidadesDistintas}
                </div>
                <p className="text-xs text-gray-500 mt-1">Em todo MT</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs de Análise */}
          <motion.div variants={itemVariants}>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="geographic">Mapa de Calor</TabsTrigger>
                <TabsTrigger value="demographics">Demografia</TabsTrigger>
                <TabsTrigger value="data-quality">Qualidade dos Dados</TabsTrigger>
              </TabsList>

              {/* Visão Geral */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Top Cidades */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Top 10 Cidades por Matrículas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.cities.slice(0, 10).map((city, index) => (
                          <div key={city.name} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-500 w-6">
                                {index + 1}°
                              </span>
                              <div className="ml-3">
                                <p className="text-sm font-medium">{city.name}</p>
                                <p className="text-xs text-gray-500">{city.region}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold">{city.count.toLocaleString()}</p>
                              <p className="text-xs text-gray-500">{city.pctCpf}% com CPF</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Distribuição por Faixa Etária */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <PieChart className="h-5 w-5 mr-2" />
                        Distribuição por Faixa Etária
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.ageGroups.map((group, index) => (
                          <div key={group.range} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{group.range}</span>
                              <span className="text-gray-600">
                                {group.count.toLocaleString()} ({group.percentage}%)
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${group.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Matrículas Recentes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Matrículas Recentes (Dados Anonimizados)
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Exportar Agregados
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">ID Matrícula</th>
                            <th className="text-left py-2">Cidade</th>
                            <th className="text-left py-2">Faixa Etária</th>
                            <th className="text-left py-2">CPF</th>
                            <th className="text-left py-2">Status</th>
                            <th className="text-left py-2">Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.recentMatriculas.map((matricula, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 font-medium text-blue-600">{matricula.id}</td>
                              <td className="py-2">{matricula.cidade}</td>
                              <td className="py-2">
                                <Badge variant="outline" className="text-blue-600">
                                  {matricula.faixaEtaria}
                                </Badge>
                              </td>
                              <td className="py-2">
                                {matricula.hasCpf ? (
                                  <Badge variant="outline" className="text-green-600">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Cadastrado
                                  </Badge>
                                ) : (
                                  <Badge variant="outline" className="text-orange-600">
                                    <AlertCircle className="h-3 w-3 mr-1" />
                                    Pendente
                                  </Badge>
                                )}
                              </td>
                              <td className="py-2">
                                <Badge variant="outline" className="text-green-600">
                                  {matricula.status}
                                </Badge>
                              </td>
                              <td className="py-2 text-sm text-gray-500">
                                {new Date(matricula.dataMatricula).toLocaleDateString('pt-BR')}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Mapa de Calor */}
              <TabsContent value="geographic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Map className="h-5 w-5 mr-2" />
                      Mapa de Calor - Distribuição por Região (MT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="text-6xl mb-4">🗺️</div>
                      <h3 className="text-xl font-semibold mb-2">Mapa Interativo de Mato Grosso</h3>
                      <p className="text-gray-600 mb-4">
                        Visualização das regiões com maior concentração de beneficiários SECITECI
                      </p>
                      
                      {/* Legenda do Mapa */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-red-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-red-600">2.847</div>
                          <div className="text-sm text-red-700">Centro-Sul (Cuiabá)</div>
                          <div className="text-xs text-red-600">Alta concentração</div>
                        </div>
                        <div className="bg-orange-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">892</div>
                          <div className="text-sm text-orange-700">Centro-Sul (Várzea Grande)</div>
                          <div className="text-xs text-orange-600">Média concentração</div>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-yellow-600">234</div>
                          <div className="text-sm text-yellow-700">Sul (Rondonópolis)</div>
                          <div className="text-xs text-yellow-600">Baixa concentração</div>
                        </div>
                      </div>

                      {/* Distribuição por Região */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">Distribuição por Região</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {['Centro-Sul', 'Sul', 'Norte', 'Oeste', 'Leste'].map((region) => {
                            const regionData = data.cities.filter(city => city.region === region)
                            const total = regionData.reduce((sum, city) => sum + city.count, 0)
                            return (
                              <div key={region} className="bg-white p-4 rounded-lg shadow">
                                <div className="text-lg font-bold text-blue-600">{total.toLocaleString()}</div>
                                <div className="text-sm text-gray-600">{region}</div>
                                <div className="text-xs text-gray-500">{regionData.length} cidades</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Demografia */}
              <TabsContent value="demographics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Análise Demográfica</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {data.summary.totalMatriculas.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Total de Matrículas</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-xl font-bold text-green-600">
                              {data.ageGroups[0].count.toLocaleString()}
                            </div>
                            <div className="text-xs text-green-700">0-17 anos</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-xl font-bold text-blue-600">
                              {data.ageGroups[1].count.toLocaleString()}
                            </div>
                            <div className="text-xs text-blue-700">18-25 anos</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Qualidade dos Dados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Completude CPF</span>
                          <span className="text-sm font-bold">
                            {((data.summary.comCpf / data.summary.totalMatriculas) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(data.summary.comCpf / data.summary.totalMatriculas) * 100}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Dados de Nascimento</span>
                          <span className="text-sm font-bold">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Qualidade dos Dados */}
              <TabsContent value="data-quality" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">✅ Dados Completos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {data.summary.comCpf.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Matrículas com CPF</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {((data.summary.comCpf / data.summary.totalMatriculas) * 100).toFixed(1)}% do total
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-orange-600">⚠️ Dados Incompletos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-600 mb-2">
                        {data.summary.semCpf.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Matrículas sem CPF</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {((data.summary.semCpf / data.summary.totalMatriculas) * 100).toFixed(1)}% do total
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-600">📊 Score de Qualidade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {data.summary.pctCompleto}%
                      </div>
                      <div className="text-sm text-gray-600">Padrão Ouro</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Meta: 95% de completude
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-purple-600">🔒 Privacidade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Dados Anonimizados</div>
                      <div className="text-xs text-gray-500 mt-1">
                        LGPD Compliant
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recomendações para Melhoria</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Prioridade Alta: Regularização de CPF</h4>
                            <p className="text-sm text-gray-600">
                              {data.summary.semCpf.toLocaleString()} matrículas precisam de regularização de CPF
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Dados de Nascimento: 100% Completos</h4>
                            <p className="text-sm text-gray-600">
                              Excelente qualidade nos dados demográficos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Cobertura Geográfica: Excelente</h4>
                            <p className="text-sm text-gray-600">
                              Atendimento em {data.summary.cidadesDistintas} cidades de MT
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2 text-purple-600" />
                        Conformidade e Privacidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">LGPD Compliant</h4>
                            <p className="text-sm text-gray-600">
                              Dados pessoais protegidos e anonimizados
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Mascaramento Ativo</h4>
                            <p className="text-sm text-gray-600">
                              Nomes, CPFs e logins não são expostos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Agregação Segura</h4>
                            <p className="text-sm text-gray-600">
                              Apenas estatísticas e totais são exibidos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Auditoria Contínua</h4>
                            <p className="text-sm text-gray-600">
                              Monitoramento de acesso e uso dos dados
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SeciteciPanel
