import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User, UserStats } from '@/types'

interface UserState {
  user: User | null
  stats: UserStats | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  user: null,
  stats: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    setStats: (state, action: PayloadAction<UserStats>) => {
      state.stats = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.stats = null
      state.isAuthenticated = false
    },
    updateUserStats: (state, action: PayloadAction<Partial<UserStats>>) => {
      if (state.stats) {
        state.stats = { ...state.stats, ...action.payload }
      }
    },
  },
})

export const { setUser, setStats, setLoading, setError, logout, updateUserStats } = userSlice.actions
export default userSlice.reducer
