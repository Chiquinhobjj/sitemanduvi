import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { usePermissions } from '@/hooks/usePermissions'
import { Loader2, Shield, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ProtectedRoute = ({ 
  children, 
  requiredRole = null, 
  requiredPermissions = [], 
  fallbackPath = '/login',
  showAccessDenied = true 
}) => {
  const { user, loading: authLoading } = useAuth()
  const { 
    loading: permissionsLoading, 
    hasPermission, 
    hasAnyPermission, 
    hasAllPermissions,
    error: permissionsError 
  } = usePermissions(user)

  // Loading state
  if (authLoading || permissionsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
            <p className="text-lg font-medium text-gray-700">Verificando permissões...</p>
            <p className="text-sm text-gray-500 mt-2">Aguarde um momento</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Usuário não autenticado
  if (!user) {
    return <Navigate to={fallbackPath} replace />
  }

  // Erro ao carregar permissões
  if (permissionsError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Erro de Permissões</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Não foi possível verificar suas permissões. Tente fazer login novamente.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              variant="outline"
            >
              Tentar Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Verificar permissão específica
  if (requiredRole && !hasPermission(requiredRole)) {
    if (!showAccessDenied) {
      return <Navigate to={fallbackPath} replace />
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Shield className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Acesso Negado</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Você não tem permissão para acessar esta área. 
              {requiredRole && ` É necessário ter o role: ${requiredRole}`}
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={() => window.history.back()}
                variant="outline"
              >
                Voltar
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
              >
                Ir para Início
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Verificar permissões múltiplas (OR)
  if (requiredPermissions.length > 0 && !hasAnyPermission(requiredPermissions)) {
    if (!showAccessDenied) {
      return <Navigate to={fallbackPath} replace />
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Shield className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Acesso Negado</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Você não tem permissão para acessar esta área. 
              É necessário ter uma das seguintes permissões: {requiredPermissions.join(', ')}
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={() => window.history.back()}
                variant="outline"
              >
                Voltar
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
              >
                Ir para Início
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Usuário autenticado e com permissões
  return children
}

// Componente para verificar se usuário pode gerenciar usuários
export const UserManagementRoute = ({ children }) => (
  <ProtectedRoute 
    requiredPermissions={['admin', 'operador']}
    fallbackPath="/observatorio"
  >
    {children}
  </ProtectedRoute>
)

// Componente para verificar se usuário é admin
export const AdminRoute = ({ children }) => (
  <ProtectedRoute 
    requiredRole="admin"
    fallbackPath="/observatorio"
  >
    {children}
  </ProtectedRoute>
)

// Componente para verificar se usuário pode ver auditoria
export const AuditRoute = ({ children }) => (
  <ProtectedRoute 
    requiredPermissions={['admin', 'auditor']}
    fallbackPath="/observatorio"
  >
    {children}
  </ProtectedRoute>
)

export default ProtectedRoute
