import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import {
  selectAuthReady,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'

export default function Welcome() {
  const userData = useSelector(selectUserData)
  const authReady = useSelector(selectAuthReady)
  const userDataLoading = useSelector(selectUserDataLoading)

  const router = useRouter()

  useEffect(() => {
    if (authReady && !userDataLoading && userData?.username) {
      router.replace('/feed')
    }
  }, [router, authReady, userDataLoading, userData?.username])

  if (userData?.username) {
    return null
  }

  return (
    <>
      <h1>This is Welcome Page</h1>
      <Link href="/login">Get Started</Link>
      <Link href="/feed">View The App</Link>
      {console.log('Run Welcome')}
    </>
  )
}

Welcome.getLayout = (page) => page
