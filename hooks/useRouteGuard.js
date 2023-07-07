import { selectUserData } from '@/redux/features/authSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function useRouteGuard(path = '/login') {
  const userData = useSelector(selectUserData)

  const router = useRouter()

  useEffect(() => {
    if (!userData?.username) {
      router.replace(path)
    }
  }, [userData?.username, path, router])
}
