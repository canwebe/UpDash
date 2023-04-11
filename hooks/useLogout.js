import { auth } from '@/lib/firebase'
import { logout } from '@/redux/features/authSlice'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function useLogout() {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      toast.loading(<b>Please wait...</b>, { id: 'logout' })
      await signOut(auth)
      dispatch(logout())
      toast.success(<b>Logout successfully</b>, { id: 'logout' })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(<b>Logout Error : Please Try Again!!</b>, { id: 'logout' })
      setIsLoading(false)
    }
  }

  return { handleLogout, isLoading }
}
