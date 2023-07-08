import { createSlice } from '@reduxjs/toolkit'

// Initial Data
const initialState = {
  profileInfo: {},
  projects: [],
  skills: [],
  loading: {
    profileInfo: true,
    projects: true,
    skills: true,
  },
}

//Slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      const { field, data } = action.payload
      state[field] = data
      state.loading[field] = false
    },
    setProfileLoading: (state, action) => {
      const { field, isLoading } = action.payload
      state.loading[field] = isLoading
    },
  },
})

export default userProfileSlice.reducer
export const { setProfileData, setProfileLoading } = userProfileSlice.actions

// Selectors
export const selectBasicProfile = (state) => {
  const {
    bio = '',
    resume = '',
    otherLinks = [
      {
        name: '',
        url: '',
      },
    ],
    socialLinks = {
      facebook: '',
      youtube: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
  } = state.userProfile.profile

  return {
    bio,
    resume,
    otherLinks,
    socialLinks,
  }
}
