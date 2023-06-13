import useAuthCheck from '@/hooks/useAuthCheck'
import useGetUserData from '@/hooks/useGetUserData'
import {
  selectAuthReady,
  selectUser,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import { useSelector } from 'react-redux'
import FullLoading from '../loaders/fullLoading'
import { Router, useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import Layout from '../layout'
import PrivateRoute from '../privateRoute'

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

  // Checking Auth
  useAuthCheck()
  useGetUserData()

  // Route Guarding
  // Router
  const router = useRouter()
  const publicRoutes = ['/welcome', '/login']

  // If Private Route
  if (!publicRoutes.includes(router.pathname)) {
    return (
      <PrivateRoute>
        <Layout>{children}</Layout>
      </PrivateRoute>
    )
  }
  return children
}
