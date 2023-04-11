import s from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${s.homeContainer} wrapper`}>
      <h1>Welcome to UpDash</h1>
      <div className="btnDiv">
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}
