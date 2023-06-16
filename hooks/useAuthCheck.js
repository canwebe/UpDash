import { auth } from '@/lib/firebase'
import { authReady } from '@/redux/features/authSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useAuthCheck() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      let userData = null
      if (user) {
        userData = {
          displayName: user?.displayName,
          photoURL: user?.photoURL,
          uid: user?.uid,
        }
      }
      dispatch(authReady(userData))
      console.count('AUth Check')
    })

    return () => unsub()
  }, [dispatch])
}
