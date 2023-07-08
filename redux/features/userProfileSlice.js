import { createSlice } from '@reduxjs/toolkit'

// Initial Data
const initialState = {
  own: {
    profileInfo: {},
    projects: [],
    skills: [],
    loading: {
      profileInfo: true,
      projects: true,
      skills: true,
    },
  },
  other: {
    profileInfo: {},
    projects: [],
    skills: [],
    loading: {
      profileInfo: true,
      projects: true,
      skills: true,
    },
  },
}
//Slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      const { type = 'own', field, data } = action.payload
      state[type][field] = data
      state[type].loading[field] = false
    },
    resetProfileData: (state, action) => {
      const field = action.payload
      state.other[field] = initialState.other[field]
      state.other.loading[field] = initialState.other.loading[field]
    },
    setProfileLoading: (state, action) => {
      const { type = 'own', field, isLoading } = action.payload
      state[type].loading[field] = isLoading
    },
  },
})

export default userProfileSlice.reducer
export const { setProfileData, setProfileLoading, resetProfileData } =
  userProfileSlice.actions

// Selectors
export const selectBasicProfile = (state, type = 'own') => {
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
  } = state.userProfile[type].profileInfo

  return {
    bio,
    resume,
    otherLinks,
    socialLinks,
  }
}

export const selectProfileInfoLoading = (state, type = 'own') =>
  state.userProfile[type].loading.profileInfo
