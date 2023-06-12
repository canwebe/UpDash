import useAuthCheck from '@/hooks/useAuthCheck'
import useGetUserData from '@/hooks/useGetUserData'
import {
  selectAuthReady,
  selectUser,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import { useSelector } from 'react-redux'
import FullLoading from '../Loaders/fullLoading'
import { Router, useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import Layout from '../Layout'

export default function RootWrapper({ children }) {
  //NProgress Loading Animation
  nProgress.configure({ showSpinner: false })

  useEffect(() => {
    const handleStart = () => nProgress.start()
    const handleStop = () => nProgress.done()
    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleStop)
    Router.events.on('routeChangeError', handleStop)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleStop)
      Router.events.off('routeChangeError', handleStop)
    }
  }, [])

  // Getting Auth STate Data
  const isAuthReady = useSelector(selectAuthReady)
  const userDataLoading = useSelector(selectUserDataLoading)
  const user = useSelector(selectUser)
  const userData = useSelector(selectUserData)

  // Checking Auth
  useAuthCheck()
  useGetUserData()

  // Route Guarding
  // Router
  const router = useRouter()
  const publicRoutes = ['/welcome', '/login']
  const isPrivate = !publicRoutes.includes(router.pathname)

  useEffect(() => {
    // For Private Routes Routes
    if (isPrivate) {
      if ((!user && isAuthReady) || (!userDataLoading && !userData?.username)) {
        router.push('/welcome') // Route to welcome page
      }
    }
  }, [
    router,
    user,
    userData?.username,
    userDataLoading,
    isAuthReady,
    isPrivate,
  ])

  // Loading Screen If AUth not ready yet and Data Loading
  if (!isAuthReady || userDataLoading) {
    return <FullLoading />
  }
  if (isPrivate) {
    return <Layout>{children}</Layout>
  }
  return children
}
