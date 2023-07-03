import {
  selectAuthReady,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Welcome() {
  const userData = useSelector(selectUserData)
  const authReady = useSelector(selectAuthReady)
  const userDataLoading = useSelector(selectUserDataLoading)

  const router = useRouter()

  useEffect(() => {
    if (authReady && !userDataLoading && userData?.username) {
      router.replace('/')
    }
  }, [router, authReady, userDataLoading, userData?.username])

  if (userData?.username) {
    return null
  }

  return (
    <>
      <h1>This is Welcome Page</h1>
      <Link href="/login">Get Started</Link>
      {console.log('Run Welcome')}
    </>
  )
}

Welcome.getLayout = (page) => page
