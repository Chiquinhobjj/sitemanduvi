import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Shield, 
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  UserCheck,
  UserX,
  Eye,
  EyeOff
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useAuth } from '@/lib/auth'

const UserManagement = () => {
  const { getAllUsers, createUser, updateUser, deleteUser, assignRole, removeRole, getAllRoles } = useAuth()
  const [users, setUsers] = useState([])
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)

  // Mock data - em produção, viria do Supabase
  const mockUsers = [
    {
      id: '1',
      email: 'admin@manduvi.org.br',
      full_name: 'Administrador Sistema',
      phone: '(65) 99999-9999',
      created_at: '2024-01-01T00:00:00Z',
      last_sign_in_at: '2024-01-15T10:30:00Z',
      email_confirmed_at: '2024-01-01T00:00:00Z',
      roles: [{ name: 'Administrador', code: 'admin' }]
    },
    {
      id: '2',
      email: 'gestor@manduvi.org.br',
      full_name: 'Gestor Social',
      phone: '(65) 99999-8888',
      created_at: '2024-01-02T00:00:00Z',
      last_sign_in_at: '2024-01-15T09:15:00Z',
      email_confirmed_at: '2024-01-02T00:00:00Z',
      roles: [{ name: 'Gestor Social', code: 'gestor_social' }]
    },
    {
      id: '3',
      email: 'operador@manduvi.org.br',
      full_name: 'Operador Sistema',
      phone: '(65) 99999-7777',
      created_at: '2024-01-03T00:00:00Z',
      last_sign_in_at: '2024-01-14T16:45:00Z',
      email_confirmed_at: '2024-01-03T00:00:00Z',
      roles: [{ name: 'Operador', code: 'operador' }]
    },
    {
      id: '4',
      email: 'auditor@manduvi.org.br',
      full_name: 'Auditor Sistema',
      phone: '(65) 99999-6666',
      created_at: '2024-01-04T00:00:00Z',
      last_sign_in_at: '2024-01-13T14:20:00Z',
      email_confirmed_at: '2024-01-04T00:00:00Z',
      roles: [{ name: 'Auditor', code: 'auditor' }]
    }
  ]

  const mockRoles = [
    { id: '1', name: 'Administrador', code: 'admin' },
    { id: '2', name: 'Gestor Social', code: 'gestor_social' },
    { id: '3', name: 'Gestor Saúde', code: 'gestor_saude' },
    { id: '4', name: 'Gestor Esportivo', code: 'gestor_esportivo' },
    { id: '5', name: 'Operador', code: 'operador' },
    { id: '6', name: 'Auditor', code: 'auditor' },
    { id: '7', name: 'Leitor Parceiro', code: 'leitor_parceiro' }
  ]

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        // Em produção, usar as funções reais do auth
        // const { data: usersData } = await getAllUsers()
        // const { data: rolesData } = await getAllRoles()
        
        // Mock data
        setTimeout(() => {
          setUsers(mockUsers)
          setRoles(mockRoles)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === 'all' || 
                       user.roles?.some(role => role.code === filterRole)
    return matchesSearch && matchesRole
  })

  const getRoleBadgeColor = (roleCode) => {
    const colors = {
      admin: 'bg-red-100 text-red-800',
      gestor_social: 'bg-blue-100 text-blue-800',
      gestor_saude: 'bg-green-100 text-green-800',
      gestor_esportivo: 'bg-orange-100 text-orange-800',
      operador: 'bg-purple-100 text-purple-800',
      auditor: 'bg-yellow-100 text-yellow-800',
      leitor_parceiro: 'bg-gray-100 text-gray-800'
    }
    return colors[roleCode] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Nunca'
    return new Date(dateString).toLocaleDateString('pt-BR')
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
          <p className="text-lg text-gray-600">Carregando usuários...</p>
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
                👥 Gestão de Usuários
              </h1>
              <p className="text-gray-600">
                Gerencie usuários, permissões e acessos ao sistema
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button onClick={() => setShowCreateDialog(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Novo Usuário
              </Button>
            </div>
          </motion.div>

          {/* Filtros */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Buscar por nome ou email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="sm:w-48">
                    <select
                      value={filterRole}
                      onChange={(e) => setFilterRole(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Todos os roles</option>
                      {roles.map(role => (
                        <option key={role.id} value={role.code}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabela de Usuários */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Usuários ({filteredUsers.length})
                  </div>
                  <Badge variant="outline">
                    {users.length} total
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Roles</TableHead>
                        <TableHead>Último Acesso</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                {user.full_name?.charAt(0) || 'U'}
                              </div>
                              <div>
                                <div className="font-medium">{user.full_name || 'Sem nome'}</div>
                                <div className="text-sm text-gray-500">
                                  Criado em {formatDate(user.created_at)}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-gray-400" />
                              {user.email}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {user.roles?.map((role, index) => (
                                <Badge
                                  key={index}
                                  className={`text-xs ${getRoleBadgeColor(role.code)}`}
                                >
                                  {role.name}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              {formatDate(user.last_sign_in_at)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {user.email_confirmed_at ? (
                                <>
                                  <UserCheck className="h-4 w-4 text-green-600" />
                                  <span className="text-green-600 text-sm">Ativo</span>
                                </>
                              ) : (
                                <>
                                  <UserX className="h-4 w-4 text-orange-600" />
                                  <span className="text-orange-600 text-sm">Pendente</span>
                                </>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setSelectedUser(user)}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  Visualizar
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => {
                                  setSelectedUser(user)
                                  setShowEditDialog(true)
                                }}>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => {
                                    if (confirm('Tem certeza que deseja excluir este usuário?')) {
                                      // Implementar exclusão
                                    }
                                  }}
                                  className="text-red-600"
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
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

export default UserManagement
