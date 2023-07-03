import useLogout from '@/hooks/useLogout'
import s from '@/styles/Feed.module.css'
import Link from 'next/link'

export default function Feed() {
  const { handleLogout, isLoading } = useLogout()
  return (
    <div className={`${s.feedWrapper} wrapper`}>
      <h1>Welcome to UpDash</h1>

      <div className={s.logo}>
        <p>up</p>
        <div className={s.triangle} />
      </div>

      <div className={s.fullLogo}>
        <div className={s.logo}>
          <p>up</p>
          <div className={s.triangle} />
        </div>
        <div className={s.dash}>Dash</div>
      </div>

      <div className={s.example} />
      <Link href="/login">To login</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
