import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Location, Mission, Achievement } from '@/types'

interface GameState {
  locations: Location[]
  missions: Mission[]
  achievements: Achievement[]
  currentMission: Mission | null
  currentLocation: Location | null
  isGameActive: boolean
  gameScore: number
}

const initialState: GameState = {
  locations: [],
  missions: [],
  achievements: [],
  currentMission: null,
  currentLocation: null,
  isGameActive: false,
  gameScore: 0,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload
    },
    setMissions: (state, action: PayloadAction<Mission[]>) => {
      state.missions = action.payload
    },
    setAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.achievements = action.payload
    },
    setCurrentMission: (state, action: PayloadAction<Mission | null>) => {
      state.currentMission = action.payload
    },
    setCurrentLocation: (state, action: PayloadAction<Location | null>) => {
      state.currentLocation = action.payload
    },
    setGameActive: (state, action: PayloadAction<boolean>) => {
      state.isGameActive = action.payload
    },
    addScore: (state, action: PayloadAction<number>) => {
      state.gameScore += action.payload
    },
    resetScore: (state) => {
      state.gameScore = 0
    },
    completeMission: (state, action: PayloadAction<string>) => {
      const mission = state.missions.find((m) => m.id === action.payload)
      if (mission) {
        mission.completed = true
      }
    },
  },
})

export const {
  setLocations,
  setMissions,
  setAchievements,
  setCurrentMission,
  setCurrentLocation,
  setGameActive,
  addScore,
  resetScore,
  completeMission,
} = gameSlice.actions
export default gameSlice.reducer
