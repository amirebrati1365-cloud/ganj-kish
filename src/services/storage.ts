import { STORAGE_KEYS } from '@/utils/constants'

export const storageService = {
  setUser: (user: any) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
  },

  getUser: () => {
    const user = localStorage.getItem(STORAGE_KEYS.USER)
    return user ? JSON.parse(user) : null
  },

  removeUser: () => {
    localStorage.removeItem(STORAGE_KEYS.USER)
  },

  setStats: (stats: any) => {
    localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats))
  },

  getStats: () => {
    const stats = localStorage.getItem(STORAGE_KEYS.USER_STATS)
    return stats ? JSON.parse(stats) : null
  },

  clear: () => {
    localStorage.clear()
  },
}
