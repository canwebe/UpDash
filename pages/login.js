import s from '@/styles/Login.module.css'
import logo from '@/assets/upDashLogoCircle.svg'
import Image from 'next/image'
import LoginContent from '@/components/layout/loginContent'

export default function Login() {
  return (
    <div className={`${s.loginPage} wrapper`}>
      <div className={s.loginPage_left}>
        <Image
          src={logo}
          width={90}
          height={90}
          placeholder="blur"
          alt="upDash"
        />
        <LoginContent />
      </div>
      <div className={s.loginPage_right}></div>
    </div>
  )
}
