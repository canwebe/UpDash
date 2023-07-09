import Link from 'next/link'

import s from './nav.module.css'
import OptionBar from './optionBar'
import MenuBar from './menubar'

export default function Nav() {
  return (
    <nav>
      <div className={`${s.navWrapper} wrapper`}>
        <Link className={s.logoDiv} href="/">
          <div className={s.logo}>
            <div className={s.logo_triangle1} />
            <div className={s.logo_triangle2} />
          </div>
          <div>
            UpDASH<span>vBeta</span>
          </div>
        </Link>
        <MenuBar />
        <OptionBar />
      </div>
    </nav>
  )
}
