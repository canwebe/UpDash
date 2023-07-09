import Link from 'next/link'
import s from './menubar.module.css'
import {
  RiArticleFill,
  RiArticleLine,
  RiBillLine,
  RiFileListLine,
  RiHome3Fill,
  RiHome3Line,
  RiSearch2Fill,
  RiSearch2Line,
  RiTeamFill,
  RiTeamLine,
  RiUser3Fill,
  RiUser3Line,
} from 'react-icons/ri'
import { MdFeed, MdOutlineFeed, MdWork, MdWorkOutline } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectUser, selectUserData } from '@/redux/features/authSlice'
import { useRouter } from 'next/router'

export default function MenuBar() {
  // Getting User UID
  const user = useSelector(selectUser)
  const userData = useSelector(selectUserData)
  const { username } = userData || {}

  // Router
  const router = useRouter()

  const menusList = [
    {
      name: 'Feed',
      path: '/feed',
      icon: <RiArticleLine />,
      activeIcon: <RiArticleFill />,
    },
    {
      name: 'Profile',
      path: `/profile`,
      icon: <RiUser3Line />,
      activeIcon: <RiUser3Fill />,
    },
    {
      name: 'Search',
      path: '/search',
      icon: <RiSearch2Line />,
      activeIcon: <RiSearch2Fill />,
    },
    {
      name: 'Jobs',
      path: '/jobs',
      icon: <MdWorkOutline />,
      activeIcon: <MdWork />,
    },
    {
      name: 'Groups',
      path: '/groups',
      icon: <RiTeamLine />,
      activeIcon: <RiTeamFill />,
    },
  ]

  return (
    <ul className={s.menuWrapper}>
      {menusList.map((menu) => {
        const isActive = menu.path === router.pathname
        return (
          <li key={menu.name}>
            <Link
              href={menu.path}
              className={`${s.menu} ${isActive ? 'active' : ''}`}
            >
              {isActive ? menu.activeIcon : menu.icon} {menu.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
