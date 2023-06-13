import Image from 'next/image'
import MenuBar from './Menubar'
import s from './nav.module.css'
import logo from '@/assets/upDashLogoCircle.svg'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <div className={`${s.navWrapper} wrapper`}>
        <Link className={s.logoDiv} href="/">
          <div className={s.logoImg}>
            <Image src={logo} alt="upDash Logo" />
          </div>
          <div>
            upDash<span>vBeta</span>
          </div>
          <div className={s.triangle} />
        </Link>
        <MenuBar />
        <div>logout</div>
      </div>
    </nav>
  )
}
