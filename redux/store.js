import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import userProfileReducer from './features/userProfileSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
  },
})

export default store
