import Link from 'next/link'
import { RiArrowLeftLine, RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import s from '@/styles/Login.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useLogin from '@/hooks/useLogin'

export default function LoginContent() {
  const { handleLogin, isLoading } = useLogin()
  const user = useSelector((state) => state.auth.user)

  console.log(user)
  return (
    <>
      <h1>Welcome Back</h1>
      <p>
        Log in to your account and access your profile, projects, and
        achievements with just a few clicks
      </p>
      <div className={s.loginBtnDiv}>
        <button onClick={() => handleLogin(true)} disabled={isLoading}>
          {isLoading ? (
            'Loading...'
          ) : (
            <>
              <RiGoogleFill /> Login with Google
            </>
          )}
        </button>
        <button onClick={() => handleLogin(false)} disabled={isLoading}>
          {isLoading ? (
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
