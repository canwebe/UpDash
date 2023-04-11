import { auth } from '@/lib/firebase'
import { authReady } from '@/redux/features/authSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

export default function useAuthCheck(store) {
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
      store.dispatch(authReady(userData))
      console.count('AUth Check')
    })

    return () => unsub()
  }, [store])
}
