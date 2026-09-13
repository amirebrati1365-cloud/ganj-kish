import axios, { AxiosInstance } from 'axios'
import { API_BASE_URL, STORAGE_KEYS } from '@/utils/constants'

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

// Auth APIs
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (data: any) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me'),
}

// User APIs
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
  getStats: () => api.get('/users/stats'),
}

// Game APIs
export const gameAPI = {
  getLocations: () => api.get('/game/locations'),
  getMissions: () => api.get('/game/missions'),
  completeMission: (missionId: string) => api.post(`/game/missions/${missionId}/complete`),
  getAchievements: () => api.get('/game/achievements'),
  getLeaderboard: () => api.get('/game/leaderboard'),
}

// Shop APIs
export const shopAPI = {
  getItems: () => api.get('/shop/items'),
  purchaseItem: (itemId: string) => api.post(`/shop/items/${itemId}/purchase`),
}

export default api
