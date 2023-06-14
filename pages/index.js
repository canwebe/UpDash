import useLogout from '@/hooks/useLogout'
import s from '@/styles/Home.module.css'

export default function Home() {
  const { handleLogout, isLoading } = useLogout()
  return (
    <div className={`${s.homeWrapper} wrapper`}>
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

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
