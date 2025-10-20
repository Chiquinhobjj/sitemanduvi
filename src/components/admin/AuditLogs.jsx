import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Search, 
  Filter, 
  Download, 
  Calendar,
  User,
  Activity,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Database,
  Settings
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const AuditLogs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterDate, setFilterDate] = useState('all')

  // Mock data - em produção, viria do Supabase
  const mockLogs = [
    {
      id: '1',
      timestamp: '2024-01-15T10:30:00Z',
      user: 'admin@manduvi.org.br',
      action: 'LOGIN',
      resource: 'Sistema',
      details: 'Login realizado com sucesso',
      ip: '192.168.1.100',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      status: 'success',
      severity: 'info'
    },
    {
      id: '2',
      timestamp: '2024-01-15T10:25:00Z',
      user: 'gestor@manduvi.org.br',
      action: 'CREATE_USER',
      resource: 'Usuários',
      details: 'Criado novo usuário: operador@manduvi.org.br',
      ip: '192.168.1.101',
      user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      status: 'success',
      severity: 'info'
    },
    {
      id: '3',
      timestamp: '2024-01-15T10:20:00Z',
      user: 'admin@manduvi.org.br',
      action: 'UPDATE_ROLE',
      resource: 'Permissões',
      details: 'Role atualizado para usuário: auditor@manduvi.org.br',
      ip: '192.168.1.100',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      status: 'success',
      severity: 'info'
    },
    {
      id: '4',
      timestamp: '2024-01-15T10:15:00Z',
      user: 'unknown@external.com',
      action: 'LOGIN_FAILED',
      resource: 'Sistema',
      details: 'Tentativa de login com credenciais inválidas',
      ip: '203.0.113.42',
      user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      status: 'failed',
      severity: 'warning'
    },
    {
      id: '5',
      timestamp: '2024-01-15T10:10:00Z',
      user: 'operador@manduvi.org.br',
      action: 'EXPORT_DATA',
      resource: 'SECITECI',
      details: 'Exportação de dados SECITECI realizada',
      ip: '192.168.1.102',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      status: 'success',
      severity: 'info'
    },
    {
      id: '6',
      timestamp: '2024-01-15T10:05:00Z',
      user: 'auditor@manduvi.org.br',
      action: 'VIEW_AUDIT',
      resource: 'Auditoria',
      details: 'Visualização de logs de auditoria',
      ip: '192.168.1.103',
      user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      status: 'success',
      severity: 'info'
    },
    {
      id: '7',
      timestamp: '2024-01-15T10:00:00Z',
      user: 'admin@manduvi.org.br',
      action: 'SYSTEM_CONFIG',
      resource: 'Configurações',
      details: 'Configurações do sistema atualizadas',
      ip: '192.168.1.100',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      status: 'success',
      severity: 'info'
    },
    {
      id: '8',
      timestamp: '2024-01-15T09:55:00Z',
      user: 'unknown@external.com',
      action: 'UNAUTHORIZED_ACCESS',
      resource: 'API',
      details: 'Tentativa de acesso não autorizado à API',
      ip: '203.0.113.43',
      user_agent: 'curl/7.68.0',
      status: 'failed',
      severity: 'error'
    }
  ]

  useEffect(() => {
    const loadLogs = async () => {
      setLoading(true)
      // Simular carregamento de dados
      setTimeout(() => {
        setLogs(mockLogs)
        setLoading(false)
      }, 1000)
    }

    loadLogs()
  }, [])

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.user?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || log.action === filterType
    const matchesDate = filterDate === 'all' || 
                       (filterDate === 'today' && isToday(log.timestamp)) ||
                       (filterDate === 'week' && isThisWeek(log.timestamp))
    return matchesSearch && matchesType && matchesDate
  })

  const isToday = (timestamp) => {
    const today = new Date().toDateString()
    const logDate = new Date(timestamp).toDateString()
    return today === logDate
  }

  const isThisWeek = (timestamp) => {
    const now = new Date()
    const logDate = new Date(timestamp)
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    return logDate >= weekAgo
  }

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-orange-600" />
      case 'info':
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'error':
        return 'bg-red-100 text-red-800'
      case 'warning':
        return 'bg-orange-100 text-orange-800'
      case 'info':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getActionIcon = (action) => {
    switch (action) {
      case 'LOGIN':
      case 'LOGIN_FAILED':
        return <Shield className="h-4 w-4" />
      case 'CREATE_USER':
      case 'UPDATE_USER':
      case 'DELETE_USER':
        return <User className="h-4 w-4" />
      case 'EXPORT_DATA':
        return <Download className="h-4 w-4" />
      case 'VIEW_AUDIT':
        return <Eye className="h-4 w-4" />
      case 'SYSTEM_CONFIG':
        return <Settings className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('pt-BR')
  }

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Carregando logs de auditoria...</p>
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
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                🔍 Logs de Auditoria
              </h1>
              <p className="text-gray-600">
                Monitore todas as atividades e acessos ao sistema
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Exportar Logs
              </Button>
            </div>
          </motion.div>

          {/* Filtros */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Buscar por usuário, ação ou detalhes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Todas as ações</option>
                      <option value="LOGIN">Login</option>
                      <option value="CREATE_USER">Criar Usuário</option>
                      <option value="UPDATE_USER">Atualizar Usuário</option>
                      <option value="DELETE_USER">Deletar Usuário</option>
                      <option value="EXPORT_DATA">Exportar Dados</option>
                      <option value="VIEW_AUDIT">Ver Auditoria</option>
                      <option value="SYSTEM_CONFIG">Configurações</option>
                    </select>
                  </div>
                  <div>
                    <select
                      value={filterDate}
                      onChange={(e) => setFilterDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Todos os períodos</option>
                      <option value="today">Hoje</option>
                      <option value="week">Esta semana</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Estatísticas */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total de Logs</p>
                    <p className="text-2xl font-bold text-gray-900">{logs.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Sucessos</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {logs.filter(log => log.status === 'success').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Avisos</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {logs.filter(log => log.severity === 'warning').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Erros</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {logs.filter(log => log.severity === 'error').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabela de Logs */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Logs de Atividade ({filteredLogs.length})
                  </div>
                  <Badge variant="outline">
                    {logs.length} total
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Ação</TableHead>
                        <TableHead>Recurso</TableHead>
                        <TableHead>Detalhes</TableHead>
                        <TableHead>IP</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Severidade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{formatTimestamp(log.timestamp)}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-gray-400" />
                              <span className="text-sm font-medium">{log.user}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getActionIcon(log.action)}
                              <span className="text-sm">{log.action}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {log.resource}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm text-gray-600 max-w-xs truncate">
                              {log.details}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-mono text-gray-500">
                              {log.ip}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              className={log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                            >
                              {log.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getSeverityIcon(log.severity)}
                              <Badge className={`text-xs ${getSeverityColor(log.severity)}`}>
                                {log.severity}
                              </Badge>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AuditLogs
