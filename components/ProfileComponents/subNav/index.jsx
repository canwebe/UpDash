import Link from 'next/link'
import s from './subNav.module.css'
import { useRouter } from 'next/router'

export default function SubNav() {
  // Router
  const router = useRouter()
  const { uid } = router?.query

  console.log(uid)

  const menusList = [
    { name: 'Info', path: `/profile/${uid}` },
    { name: 'Projects', path: `/profile/${uid}?menu=projects` },
    { name: 'Skills', path: `/profile/${uid}?menu=skills` },
    { name: 'Experience', path: `/profile/${uid}?menu=experience` },
    { name: 'Achivements', path: `/profile/${uid}?menu=achivements` },
    { name: 'Certification', path: `/profile/${uid}?menu=certification` },
    { name: 'Recomendation', path: `/profile/${uid}?menu=recomendation` },
    { name: 'Education', path: `/profile/${uid}?menu=education` },
  ]

  return (
    <div className={s.subNavWrapper}>
      {menusList.map((menu) => (
        <Link
          className={`${s.navItem} ${
            router.asPath === menu.path ? 'active' : ''
          }`}
          href={menu.path}
          key={menu.name}
        >
          {menu.name}
        </Link>
      ))}
    </div>
  )
}
