import Image from 'next/image'
import MenuBar from './Menubar'
import s from './nav.module.css'
import logo from '@/assets/upDashLogoCircle.svg'

export default function Nav() {
  return (
    <nav>
      <div className={`${s.navWrapper} wrapper`}>
        <div className={s.logoDiv}>
          <div className={s.logoImg}>
            <Image src={logo} alt="upDash Logo" />
          </div>
          upDashvBeta
        </div>
        <MenuBar />
        <div>option</div>
      </div>
    </nav>
  )
}
