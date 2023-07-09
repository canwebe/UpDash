import useLogout from '@/hooks/useLogout'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import {
  RiBookmarkLine,
  RiCloseFill,
  RiLoginBoxLine,
  RiLogoutBoxLine,
  RiMore2Fill,
  RiQuestionLine,
  RiSettings3Line,
} from 'react-icons/ri'

import s from './optionBar.module.css'

import useClickOutside from '@/hooks/useClickOutside'
import { selectUsername } from '@/redux/features/authSlice'

export default function OptionBar() {
  // Redux States
  const username = useSelector(selectUsername)

  // Local States
  const [isMenu, setIsMenu] = useState(false)

  // Logout Function
  const { handleLogout, isLoading } = useLogout()

  // Target Ref
  const optionRef = useRef()

  // router
  const router = useRouter()
  const { pathname } = router

  // Functions
  const toggleMenu = () => setIsMenu((prev) => !prev)
  const closeMenu = () => setIsMenu(false)

  // Set Menu to false when route changes
  useEffect(() => {
    setIsMenu(false)
  }, [pathname])

  useClickOutside(optionRef, closeMenu)

  return (
    <>
      <div className={s.navOptionDiv}>
        {username ? (
          <>
            {isMenu ? (
              <div ref={optionRef} className={s.optionsList}>
                <Link
                  className={pathname === '/setting/portfolio' ? s.active : ''}
                  href="/setting/portfolio"
                >
                  <RiSettings3Line />
                  Portfolio
                </Link>
                <Link
                  className={pathname === '/saved' ? s.active : ''}
                  href="/saved"
                >
                  <RiBookmarkLine />
                  Saved
                </Link>
                <Link
                  className={pathname === '/help' ? s.active : ''}
                  href="/help"
                >
                  <RiQuestionLine />
                  Help
                </Link>
                <button disabled={isLoading} onClick={handleLogout}>
                  <RiLogoutBoxLine />
                  Logout
                </button>
              </div>
            ) : null}
            <div
              onClick={toggleMenu}
              className={`optionBtn ${isMenu ? 'activeMenu' : ''}`}
            >
              {isMenu ? <RiCloseFill /> : <RiMore2Fill />}
            </div>
          </>
        ) : (
          <Link className={s.loginBtn} href="/login">
            <RiLoginBoxLine /> login
          </Link>
        )}
      </div>
    </>
  )
}
