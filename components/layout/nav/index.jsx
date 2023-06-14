import Image from 'next/image'
import MenuBar from './Menubar'
import s from './nav.module.css'
import logo from '@/assets/upDashLogoCircle.svg'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <div className={`${s.navWrapper} wrapper`}>
        {/* <Link className={s.logoDiv} href="/">
          <div>
            upDash<span>vBeta</span>
          </div>
          <div className={s.triangle} />
        </Link> */}
        <Link className={s.logoDiv2} href="/">
          <div className={s.logo}>
            <div className={s.logo_triangle1} />
            <div className={s.logo_triangle2} />
          </div>
          <div>
            UpDASH<span>vBeta</span>
          </div>
        </Link>
        <MenuBar />
        <div>logout</div>
      </div>
    </nav>
  )
}
