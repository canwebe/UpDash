import {
  selectAuthReady,
  selectUser,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FullLoading from '../loaders/fullLoading'

export default function PrivateRoute({ children }) {
  //Router
  const router = useRouter()

  // Getting Auth STate Data
  const isAuthReady = useSelector(selectAuthReady)
  const userDataLoading = useSelector(selectUserDataLoading)
  const user = useSelector(selectUser)
  const userData = useSelector(selectUserData)

  console.log(
    `User :${user} AuthReady: ${isAuthReady} Loading: ${userDataLoading} Username: ${userData?.username}`
  )

  useEffect(() => {
    // Redirect when auth is ready and if user is null or when userDataLoading false and username undefined
    if (isAuthReady && (!user || (!userDataLoading && !userData?.username))) {
      router.push('/welcome')
    }
  }, [router, isAuthReady, user, userData?.username, userDataLoading])

  // Auth Loading Screen
  if (!isAuthReady || !user || userDataLoading) {
    return <FullLoading />
  }

  return children
}
