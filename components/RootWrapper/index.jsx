import useAuthCheck from '@/hooks/useAuthCheck'
import useGetUserData from '@/hooks/useGetUserData'
import { selectAuthReady } from '@/redux/features/authSlice'
import { useSelector } from 'react-redux'
import FullLoading from '../Loaders/fullLoading'
import { Router } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'

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

  // Checking Auth
  useAuthCheck()
  useGetUserData()

  // Loading Screen If AUth not ready yet
  if (!isAuthReady) {
    return <FullLoading />
  }

  return children
}
