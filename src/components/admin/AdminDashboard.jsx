import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Shield, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  BarChart3,
  UserCheck,
  UserX,
  Settings,
  FileText,
  Eye,
  Calendar
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/lib/auth'
import { usePermissions } from '@/hooks/usePermissions'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const { user } = useAuth()
  const { isAdmin, canManageUsers, canViewAudit } = usePermissions(user)
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsersToday: 0,
    systemHealth: 'good',
    lastActivity: null,
    loading: true
  })

  // Mock data - em produção, viria do Supabase
  useEffect(() => {
    const loadStats = async () => {
      // Simular carregamento de dados
      setTimeout(() => {
        setStats({
          totalUsers: 156,
          activeUsers: 142,
          newUsersToday: 8,
          systemHealth: 'good',
          lastActivity: new Date().toISOString(),
          loading: false
        })
      }, 1000)
    }

    loadStats()
  }, [])

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

  if (stats.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
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
              🛡️ Painel Administrativo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gestão completa do sistema Instituto Manduvi
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Badge variant="outline" className="text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Shield className="h-4 w-4 mr-1" />
                {isAdmin ? 'Administrador' : 'Usuário'}
              </Badge>
            </div>
          </motion.div>

          {/* KPIs Principais */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Total de Usuários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {stats.totalUsers.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">Registrados no sistema</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Usuários Ativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {stats.activeUsers.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}% do total
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Novos Hoje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {stats.newUsersToday.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">Últimas 24 horas</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                  <Activity className="h-4 w-4 mr-2" />
                  Status do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-bold text-green-600">Operacional</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Todos os serviços funcionando</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs de Gestão */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="users" disabled={!canManageUsers}>Usuários</TabsTrigger>
                <TabsTrigger value="audit" disabled={!canViewAudit}>Auditoria</TabsTrigger>
                <TabsTrigger value="settings" disabled={!isAdmin}>Configurações</TabsTrigger>
              </TabsList>

              {/* Visão Geral */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Atividades Recentes */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Atividades Recentes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <UserCheck className="h-4 w-4 text-green-600" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">Novo usuário registrado</p>
                            <p className="text-xs text-gray-500">João Silva - há 2 minutos</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Settings className="h-4 w-4 text-blue-600" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">Configuração atualizada</p>
                            <p className="text-xs text-gray-500">Sistema de permissões - há 15 minutos</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <FileText className="h-4 w-4 text-purple-600" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">Relatório gerado</p>
                            <p className="text-xs text-gray-500">Dados SECITECI - há 1 hora</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Estatísticas de Uso */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Estatísticas de Uso
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Acessos hoje</span>
                          <span className="text-lg font-bold text-blue-600">342</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Páginas mais visitadas</span>
                          <span className="text-lg font-bold text-green-600">SECITECI</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Tempo médio de sessão</span>
                          <span className="text-lg font-bold text-purple-600">12min</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Taxa de conversão</span>
                          <span className="text-lg font-bold text-orange-600">68%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Gestão de Usuários */}
              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Gestão de Usuários
                      </div>
                      <Button onClick={() => navigate('/observatorio/admin/usuarios')}>
                        <UserCheck className="h-4 w-4 mr-2" />
                        Gerenciar Usuários
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Gestão de Usuários
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Gerencie usuários, permissões e acessos ao sistema.
                      </p>
                      <Button onClick={() => navigate('/observatorio/admin/usuarios')}>
                        Acessar Gestão de Usuários
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Auditoria */}
              <TabsContent value="audit" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye className="h-5 w-5 mr-2" />
                        Logs de Auditoria
                      </div>
                      <Button onClick={() => navigate('/observatorio/admin/auditoria')}>
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Logs
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Sistema de Auditoria
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Monitore todas as atividades e acessos ao sistema.
                      </p>
                      <Button onClick={() => navigate('/observatorio/admin/auditoria')}>
                        Acessar Logs de Auditoria
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Configurações */}
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Configurações do Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Configurações
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Funcionalidade em desenvolvimento. Em breve você poderá configurar o sistema aqui.
                      </p>
                      <Button variant="outline">
                        Em Breve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard
