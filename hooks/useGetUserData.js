import { db } from '@/lib/firebase'
import {
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

  console.count('Get User Data')

  useEffect(() => {
    let unsub
    if (user?.uid) {
      try {
        dispatch(userDataLoading(true))
        unsub = onSnapshot(doc(db, 'users', user?.uid), (snapshot) => {
          if (snapshot.exists()) {
            dispatch(setUserData(snapshot.data()))
          } else {
            dispatch(setUserData(null))
          }
          dispatch(userDataLoading(false))
        })
      } catch (error) {
        console.error('Getting User Data Error', error.message)
      }
    }
    return () => unsub && unsub()
  }, [user?.uid, dispatch])
}
