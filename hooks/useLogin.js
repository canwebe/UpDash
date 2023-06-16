import { GithubProvider, GoogleProvider, auth } from '@/lib/firebase'
import { login } from '@/redux/features/authSlice'
import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function useLogin() {
  // States
  const [isLoading, setIsLoading] = useState(false)

  // Dispatch
  const dispatch = useDispatch()

  // Functions
  const handleLogin = async (isGoogle) => {
    try {
      toast.loading(<b>Logging in please wait!</b>, { id: 'login' })
      setIsLoading(true)
      const user = await signInWithPopup(
        auth,
        isGoogle ? GoogleProvider : GithubProvider
      )
      if (!user?.user) {
        throw new Error('Something went wrong, Try Again!')
      }
      const userData = {
        displayName: user?.user?.displayName,
        photoURL: user?.user?.photoURL,
        uid: user?.user?.uid,
      }
      dispatch(login(userData))
      setIsLoading(false)
      toast.success(<b>Successfully Login</b>, { id: 'login' })
    } catch (error) {
      console.error('Login error', error?.message)
      toast.error(<b>Login Error , Please Try Again!!</b>, { id: 'login' })
      setIsLoading(false)
    }
  }

  return { handleLogin, isLoading }
}
