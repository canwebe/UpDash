import { createSlice } from '@reduxjs/toolkit'

// Initial Data
const initialState = {
  data: {},
  isLoading: true,
}

//Slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.data = action.payload
      state.isLoading = false
    },
    setProfileLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export default userProfileSlice.reducer
export const { setProfileData, setProfileLoading } = userProfileSlice.actions

// Selectors
export const selectBasicProfile = (state) => {
  const { bio } = state.userProfile.data
}
