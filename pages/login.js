import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import s from '@/styles/Login.module.css'
import CreateUsername from '@/components/PageComponents/LoginContent/createUsername'
import MainLogin from '@/components/PageComponents/LoginContent/mainLogin'

import {
  selectUser,
  selectUserDataLoading,
  selectUsername,
} from '@/redux/features/authSlice'

export default function Login() {
  // Getting User Data for Auth Checking
  const username = useSelector(selectUsername)
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectUserDataLoading)

  const isNew = user && !isLoading && !username

  // Router for navigating
  const router = useRouter()

  console.count('Login Page')

  // Redirect to Dashboard if User is signed and have username
  // useEffect(() => {
  //   if (user && !isLoading && username) {
  //     router.replace('/')
  //   }
  // }, [isLoading, username, router, user])

  // if (username) {
  //   return null
  // }

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
