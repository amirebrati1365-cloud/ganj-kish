import { STORAGE_KEYS } from '@/utils/constants'
import { authAPI } from './api'

export const authService = {
  setToken: (token: string) => {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token)
  },

  getToken: () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
  },

  removeToken: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
  },

  login: async (email: string, password: string) => {
    try {
      const response = await authAPI.login(email, password)
      if (response.data.token) {
        authService.setToken(response.data.token)
      }
      return response.data
    } catch (error) {
      throw error
    }
  },

  register: async (data: any) => {
    try {
      const response = await authAPI.register(data)
      if (response.data.token) {
        authService.setToken(response.data.token)
      }
      return response.data
    } catch (error) {
      throw error
    }
  },

  logout: async () => {
    try {
      await authAPI.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      authService.removeToken()
    }
  },
}
