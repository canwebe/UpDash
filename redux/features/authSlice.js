import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = {
  user: null,
  isAuthReady: false,
  userData: null,
  loading: true,
}

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    authReady: (state, action) => {
      state.isAuthReady = true
      state.user = action.payload
    },
    userDataLoading: (state, action) => {
      state.loading = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
      state.loading = false
    },
  },
})

export default authSlice.reducer
export const { login, logout, authReady, userDataLoading, setUserData } =
  authSlice.actions

// Selector
export const selectUserData = (state, type = 'own') =>
  type === 'own' ? state.auth.userData : state.userProfile.other.userData
export const selectUsername = (state) => state.auth.userData?.username
export const selectUser = (state) => state.auth.user
export const selectAuthReady = (state) => state.auth.isAuthReady
export const selectUserDataLoading = (state) => state.auth.loading
