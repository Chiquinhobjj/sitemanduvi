import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://ygnxdxkykkdflaswegwn.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnbnhkeGt5a2tkZmxhc3dlZ3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NzQ0MDAsImV4cCI6MjA1MDA1MDQwMH0.placeholder'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Sistema de autenticação
export const auth = {
  // Login
  signIn: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Logout
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  },

  // Obter usuário atual
  getCurrentUser: async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) throw error
      return { user, error: null }
    } catch (error) {
      return { user: null, error }
    }
  },

  // Verificar se usuário está autenticado
  isAuthenticated: async () => {
    const { user } = await auth.getCurrentUser()
    return !!user
  },

  // Obter perfil do usuário com roles
  getUserProfile: async (userId) => {
    try {
      const { data, error } = await supabase
        .from('role_assignments')
        .select(`
          *,
          roles (
            id,
            name,
            code
          )
        `)
        .eq('user_id', userId)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Verificar permissão específica
  hasPermission: async (userId, requiredRole) => {
    try {
      const { data } = await auth.getUserProfile(userId)
      if (!data) return false
      
      const userRoles = data.roles?.code || []
      return userRoles.includes(requiredRole)
    } catch (error) {
      console.error('Erro ao verificar permissão:', error)
      return false
    }
  },

  // Obter todos os usuários (apenas admin)
  getAllUsers: async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select(`
          *,
          role_assignments (
            *,
            roles (
              id,
              name,
              code
            )
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Criar novo usuário
  createUser: async (userData) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert([userData])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Atualizar usuário
  updateUser: async (userId, userData) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(userData)
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Deletar usuário
  deleteUser: async (userId) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  },

  // Atribuir role a usuário
  assignRole: async (userId, roleId) => {
    try {
      const { data, error } = await supabase
        .from('role_assignments')
        .insert([{
          user_id: userId,
          role_id: roleId,
          org_id: 'default' // Assumindo organização padrão
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Remover role de usuário
  removeRole: async (userId, roleId) => {
    try {
      const { error } = await supabase
        .from('role_assignments')
        .delete()
        .eq('user_id', userId)
        .eq('role_id', roleId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  },

  // Obter todos os roles disponíveis
  getAllRoles: async () => {
    try {
      const { data, error } = await supabase
        .from('roles')
        .select('*')
        .order('name')

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}


export default auth
