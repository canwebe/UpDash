import { RiArrowLeftLine } from 'react-icons/ri'
import s from '../layout.module.css'
import { useRouter } from 'next/router'

export default function ModalLayout({ children }) {
  const router = useRouter()

  const pathname = router.pathname
  const titleObj = {
    '/edit/profile': 'Edit Profile',
    '/edit/education': 'Add Education',
  }

  return (
    <div className={s.layout}>
      <nav>
        <div className="wrapper">
          <div onClick={() => router.back()} className={s.title}>
            <RiArrowLeftLine /> {titleObj[pathname] || 'Back'}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
