import s from '@/styles/Login.module.css'
import logo from '@/assets/upDashLogoCircle.svg'
import Image from 'next/image'

import { useSelector } from 'react-redux'
import {
  selectUser,
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import MainLogin from '@/components/LoginContent/mainLogin'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import CreateUsername from '@/components/LoginContent/createUsername'

export default function Login() {
  // Getting User Data for Auth Checking
  const userData = useSelector(selectUserData)
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectUserDataLoading)

  const isNew = user && !isLoading && !userData?.username

  // Router for navigating
  const router = useRouter()

  console.count('Login Page')

  // Redirect to Dashboard if User is signed and have username
  useEffect(() => {
    if (user && !isLoading && userData?.username) {
      router.replace('/')
    }
  }, [isLoading, userData?.username, router, user])

  return (
    <div className={`${s.loginPage} wrapper`}>
      <div className={s.loginPage_left}>
        <div className={s.logo}>
          <div className={s.logo_triangleUp} />
          <div className={s.logo_triangleDown} />
        </div>
        {isNew ? <CreateUsername /> : <MainLogin />}
      </div>
      <div className={s.loginPage_right}></div>
    </div>
  )
}

Login.getLayout = (page) => page
