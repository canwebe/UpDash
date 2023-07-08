import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectUsername } from '@/redux/features/authSlice'

export default function useRouteGuard(path = '/login') {
  const username = useSelector(selectUsername)

  const router = useRouter()

  useEffect(() => {
    if (!username) {
      router.replace(path)
    }
  }, [username, path, router])
}
