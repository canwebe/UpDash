import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  collection,
  doc,
  limit,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'

import { db } from '@/lib/firebase'

import {
  resetProfileData,
  setProfileData,
  setProfileLoading,
} from '@/redux/features/userProfileSlice'

export default function useGetProfiles(username, type = 'own') {
  // Redux
  const dispatch = useDispatch()

  useEffect(() => {
    if (!username) return

    let unsub
    try {
      const profileQuery =
        type === 'own'
          ? doc(db, 'userProfiles', username)
          : query(
              collection(db, 'userProfiles'),
              where('username', '==', username?.toLowerCase()),
              limit(1)
            )

      unsub = onSnapshot(profileQuery, (snapshot) => {
        handleData(snapshot, dispatch, type)
      })
    } catch (error) {
      console.error('Fetching profiles data error', error?.message)
      dispatch(
        setProfileLoading({ field: 'profileInfo', isLoading: false, type })
      )
    }

    // Cleanup
    return () => {
      // Reset Evrything if other user
      type === 'other' && dispatch(resetProfileData('profileInfo'))
      unsub && unsub()
    }
  }, [username, type])
}

// Handle Data for Firebase
const handleData = (snapshot, dispatch, type) => {
  // If its own
  if (type == 'own') {
    // If user profiles exist
    if (snapshot.exists()) {
      dispatch(
        setProfileData({
          field: 'profileInfo',
          data: snapshot.data(),
        })
      )
    } else {
      dispatch(setProfileData({ field: 'profileInfo', data: {} }))
    }
  } else {
    // If its other user
    // If empty or user not found
    if (snapshot.empty) {
      dispatch(setProfileData({ field: 'profileInfo', data: {}, type }))
    } else {
      dispatch(
        setProfileData({
          field: 'profileInfo',
          data: snapshot.docs[0].data(),
          type,
        })
      )
    }
  }
}
