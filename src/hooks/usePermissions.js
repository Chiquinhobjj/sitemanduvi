import { useState, useEffect } from 'react'
import { auth } from '@/lib/auth'

export const usePermissions = (user) => {
  const [permissions, setPermissions] = useState({
    roles: [],
    isAdmin: false,
    isGestor: false,
    canManageUsers: false,
    canViewAudit: false,
    canManageSettings: false,
    loading: true,
    error: null
  })

  useEffect(() => {
    const loadPermissions = async () => {
      if (!user) {
        setPermissions(prev => ({
          ...prev,
          roles: [],
          isAdmin: false,
          isGestor: false,
          canManageUsers: false,
          canViewAudit: false,
          canManageSettings: false,
          loading: false
        }))
        return
      }

      try {
        setPermissions(prev => ({ ...prev, loading: true, error: null }))

        // Obter perfil do usuário com roles
        const { data: profile, error } = await auth.getUserProfile(user.id)
        
        if (error) throw error

        const userRoles = profile?.roles?.code || []
        const isAdmin = userRoles.includes('admin')
        const isGestor = userRoles.some(role => 
          ['gestor_social', 'gestor_saude', 'gestor_esportivo'].includes(role)
        )

        setPermissions({
          roles: userRoles,
          isAdmin,
          isGestor,
          canManageUsers: isAdmin || userRoles.includes('operador'),
          canViewAudit: isAdmin || userRoles.includes('auditor'),
          canManageSettings: isAdmin,
          loading: false,
          error: null
        })
      } catch (error) {
        console.error('Erro ao carregar permissões:', error)
        setPermissions(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }))
      }
    }

    loadPermissions()
  }, [user])

  // Função para verificar permissão específica
  const hasPermission = (requiredRole) => {
    if (!user) return false
    return permissions.roles.includes(requiredRole)
  }

  // Função para verificar múltiplas permissões (OR)
  const hasAnyPermission = (roles) => {
    if (!user) return false
    return roles.some(role => permissions.roles.includes(role))
  }

  // Função para verificar múltiplas permissões (AND)
  const hasAllPermissions = (roles) => {
    if (!user) return false
    return roles.every(role => permissions.roles.includes(role))
  }

  return {
    ...permissions,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions
  }
}

// Hook para verificar permissão específica
export const usePermission = (requiredRole) => {
  const { hasPermission, loading } = usePermissions()
  
  return {
    hasPermission: hasPermission(requiredRole),
    loading
  }
}

// Hook para verificar se é admin
export const useIsAdmin = () => {
  const { isAdmin, loading } = usePermissions()
  
  return {
    isAdmin,
    loading
  }
}

// Hook para verificar se pode gerenciar usuários
export const useCanManageUsers = () => {
  const { canManageUsers, loading } = usePermissions()
  
  return {
    canManageUsers,
    loading
  }
}

export default usePermissions
