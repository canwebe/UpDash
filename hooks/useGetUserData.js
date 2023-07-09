import { db } from '@/lib/firebase'
import {
  selectAuthReady,
  selectUser,
  setUserData,
  userDataLoading,
} from '@/redux/features/authSlice'
import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function useGetUserData() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const authReady = useSelector(selectAuthReady)

  console.count('Get User Data')

  useEffect(() => {
    // If Not Auth Ready
    if (!authReady) return

    let unsub
    try {
      // dispatch(userDataLoading(true))
      if (user?.uid) {
        unsub = onSnapshot(doc(db, 'users', user?.uid), (snapshot) => {
          if (snapshot.exists()) {
            dispatch(setUserData(snapshot.data()))
          } else {
            dispatch(setUserData(null))
          }
        })
      } else {
        dispatch(setUserData(null))
      }
    } catch (error) {
      console.error('Getting User Data Error', error.message)
    }

    return () => unsub && unsub()
  }, [user?.uid, authReady])
}
