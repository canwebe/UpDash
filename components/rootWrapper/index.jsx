import useAuthCheck from '@/hooks/useAuthCheck'
import useGetUserData from '@/hooks/useGetUserData'
import { Router, useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import PrivateRoute from '../privateRoute'
import { useSelector } from 'react-redux'
import {
  selectAuthReady,
  selectUser,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import FullLoading from '../loaders/fullLoading'

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

  // Sttaes
  const user = useSelector(selectUser)
  const userData = useSelector(selectUserData)
  const userDataLoading = useSelector(selectUserDataLoading)
  const authReady = useSelector(selectAuthReady)

  const table = {
    user,
    userData,
    authReady,
    userDataLoading,
  }

  console.table(table)

  if (!authReady || userDataLoading) {
    return <FullLoading />
  }

  return children
}
