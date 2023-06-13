import useLogout from '@/hooks/useLogout'
import s from '@/styles/Home.module.css'

export default function Home() {
  const { handleLogout, isLoading } = useLogout()
  return (
    <div>
      <h1>Welcome to UpDash</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
