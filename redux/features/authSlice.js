import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthReady: false,
}

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
  },
})

export default authSlice.reducer
export const { login, logout, authReady } = authSlice.actions
