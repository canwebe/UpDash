import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RiArrowLeftLine, RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import { PulseLoader } from 'react-spinners'

import s from '@/styles/Login.module.css'
import Button from '@/components/Shared/button'

import { selectUserDataLoading } from '@/redux/features/authSlice'
import useLogin from '@/hooks/useLogin'

export default function MainLogin() {
  const { handleLogin, isLoading } = useLogin()
  const user = useSelector((state) => state.auth.user)
  const userDataLoading = useSelector(selectUserDataLoading)

  // Button loading if logging in or have user and getting user data
  const isBtnLoading = isLoading || (user && userDataLoading)
  console.log(user, userDataLoading)
  return (
    <>
      <h2>Welcome Back</h2>
      <p>
        Log in to your account and access your profile, projects, and
        achievements with just a few clicks
      </p>
      <div className={s.loginBtnDiv}>
        <Button
          variant="w100"
          onClick={() => handleLogin(true)}
          disabled={isBtnLoading}
        >
          {isBtnLoading ? (
            <PulseLoader speedMultiplier={0.7} size={10} color="#bbb" />
          ) : (
            <>
              <RiGoogleFill /> Login with Google
            </>
          )}
        </Button>
        <Button
          variant="w100"
          onClick={() => handleLogin(false)}
          disabled={isBtnLoading}
        >
          {isBtnLoading ? (
            <PulseLoader speedMultiplier={0.7} size={10} color="#bbb" />
          ) : (
            <>
              <RiGithubFill /> Login with Github
            </>
          )}
        </Button>
      </div>
      <div className={s.goBackDiv}>
        <Link href="/">
          <RiArrowLeftLine /> Go Back To Welcome Page
        </Link>
      </div>
    </>
  )
}
