import Link from 'next/link'
import { RiArrowLeftLine, RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import s from '@/styles/Login.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useLogin from '@/hooks/useLogin'
import { selectUserDataLoading } from '@/redux/features/authSlice'

export default function MainLogin() {
  const { handleLogin, isLoading } = useLogin()
  const user = useSelector((state) => state.auth.user)
  const userDataLoading = useSelector(selectUserDataLoading)

  console.log(user, userDataLoading)
  return (
    <>
      <h2>Welcome Back</h2>
      <p>
        Log in to your account and access your profile, projects, and
        achievements with just a few clicks
      </p>
      <div className={s.loginBtnDiv}>
        <button
          onClick={() => handleLogin(true)}
          disabled={isLoading || userDataLoading}
        >
          {isLoading || userDataLoading ? (
            'Loading...'
          ) : (
            <>
              <RiGoogleFill /> Login with Google
            </>
          )}
        </button>
        <button
          onClick={() => handleLogin(false)}
          disabled={isLoading || userDataLoading}
        >
          {isLoading || userDataLoading ? (
            'Loading...'
          ) : (
            <>
              <RiGithubFill /> Login with Github
            </>
          )}
        </button>
      </div>
      <div className={s.goBackDiv}>
        <Link href="/welcome">
          <RiArrowLeftLine /> Go Back To Home
        </Link>
      </div>
    </>
  )
}
