import { db } from '@/lib/firebase'
import {
  resetProfileData,
  setProfileData,
  setProfileLoading,
} from '@/redux/features/userProfileSlice'
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useGetOtherUserData(username) {
  // Redux
  const dispatch = useDispatch()

  useEffect(() => {
    // If no username
    if (!username) return

    let unsub
    try {
      const q = query(
        collection(db, 'users'),
        where('username', '==', username?.trim()?.toLowerCase()),
        limit(1)
      )

      unsub = onSnapshot(q, (snapshot) => {
        if (snapshot.empty) {
          dispatch(
            setProfileData({ field: 'userData', type: 'other', data: {} })
          )
        } else {
          dispatch(
            setProfileData({
              field: 'userData',
              type: 'other',
              data: snapshot.docs[0].data(),
            })
          )
        }
      })
    } catch (error) {
      console.error('Getting Other User Data', error)
      dispatch(
        setProfileLoading({
          isLoading: false,
          type: 'other',
          field: 'userData',
        })
      )
    }

    return () => {
      dispatch(resetProfileData('userData'))
      unsub && unsub()
    }
  }, [username])
}
