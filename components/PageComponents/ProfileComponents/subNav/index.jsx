import Link from 'next/link'
import s from './subNav.module.css'
import { useRouter } from 'next/router'

export default function SubNav({ type = 'own' }) {
  // Router
  const router = useRouter()
  const { username } = router?.query

  const menuPath = type === 'own' ? '' : '/' + username
  console.log('ussssa', menuPath)
  const menusList = [
    { name: 'Info', path: `/profile${menuPath}` },
    { name: 'Projects', path: `/profile${menuPath}?menu=projects` },
    { name: 'Skills', path: `/profile${menuPath}?menu=skills` },
    { name: 'Experiences', path: `/profile${menuPath}?menu=experiences` },
    { name: 'Achivements', path: `/profile${menuPath}?menu=achivements` },
    { name: 'Certifications', path: `/profile${menuPath}?menu=certifications` },
    { name: 'Education', path: `/profile${menuPath}?menu=education` },
    {
      name: 'Recommendations',
      path: `/profile${menuPath}?menu=recommendations`,
    },
  ]

  return (
    <div className={s.subNavWrapper}>
      <div className={s.subNavLists}>
        {menusList.map((menu) => (
          <Link
            className={`${s.navItem} ${
              router.asPath === menu.path ? 'active' : ''
            }`}
            href={menu.path}
            key={menu.name}
            replace
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
