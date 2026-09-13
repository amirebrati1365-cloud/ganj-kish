import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isSidebarOpen: boolean
  isDarkMode: boolean
  isNotificationVisible: boolean
  notificationMessage: string
  currentLanguage: 'en' | 'fa'
  showModal: boolean
  modalContent: string
}

const initialState: UIState = {
  isSidebarOpen: false,
  isDarkMode: true,
  isNotificationVisible: false,
  notificationMessage: '',
  currentLanguage: 'fa',
  showModal: false,
  modalContent: '',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
    showNotification: (state, action: PayloadAction<string>) => {
      state.isNotificationVisible = true
      state.notificationMessage = action.payload
    },
    hideNotification: (state) => {
      state.isNotificationVisible = false
      state.notificationMessage = ''
    },
    setLanguage: (state, action: PayloadAction<'en' | 'fa'>) => {
      state.currentLanguage = action.payload
    },
    showModal: (state, action: PayloadAction<string>) => {
      state.showModal = true
      state.modalContent = action.payload
    },
    closeModal: (state) => {
      state.showModal = false
      state.modalContent = ''
    },
  },
})

export const {
  toggleSidebar,
  toggleDarkMode,
  showNotification,
  hideNotification,
  setLanguage,
  showModal,
  closeModal,
} = uiSlice.actions
export default uiSlice.reducer
