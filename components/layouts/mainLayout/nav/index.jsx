import Image from 'next/image'
import MenuBar from './menubar'
import s from './nav.module.css'
import logo from '@/assets/upDashLogoCircle.svg'
import Link from 'next/link'
import { RiMore2Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { selectUserData } from '@/redux/features/authSlice'

export default function Nav() {
  const userData = useSelector(selectUserData)

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
        {userData?.username ? (
          <div>
            <RiMore2Fill className={s.optionBtn} />
          </div>
        ) : (
          <Link href="/login">login</Link>
        )}
      </div>
    </nav>
  )
}
