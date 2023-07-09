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
    userData: {},
    projects: [],
    skills: [],
    loading: {
      profileInfo: true,
      projects: true,
      skills: true,
      userData: true,
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
export const selectProfileShort = (state, type = 'own') => {
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

export const selectExperiences = (state, type) =>
  state.userProfile[type].profileInfo?.experience || []

export const selectAchievements = (state, type) =>
  state.userProfile[type].profileInfo?.achievements || []

export const selectCertifications = (state, type) =>
  state.userProfile[type].profileInfo?.certifications || []

export const selectEducations = (state, type) =>
  state.userProfile[type].profileInfo?.educations || []

export const selectRecommends = (state, type) =>
  state.userProfile[type].profileInfo?.recommends || []

export const selectProfileInfoLoading = (state, type = 'own') =>
  state.userProfile[type].loading.profileInfo

export const selectOtherUserDataLoading = (state) =>
  state.userProfile.other.loading.userData
