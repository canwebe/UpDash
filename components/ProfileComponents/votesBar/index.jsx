import Link from 'next/link'
import s from './votesBar.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '@/redux/features/authSlice'
import { useRouter } from 'next/router'
import { SlArrowUp } from 'react-icons/sl'
import { IoIosArrowUp } from 'react-icons/io'
import { IoChevronUpSharp, IoChevronUp } from 'react-icons/io5'

import { FaAngleUp, FaChevronUp } from 'react-icons/fa'
import { MdKeyboardArrowUp, MdOutlineExpandLess } from 'react-icons/md'

import { GoChevronUp } from 'react-icons/go'

export default function VotesBar({ secondary }) {
  const router = useRouter()

  const uid = router.query?.uid

  return (
    <div className={`${s.votesBarWrapper} ${secondary ? s.secondary : ''}`}>
      <Link className={s.projects} href={`/profile/${uid}?menu=projects`}>
        <span>
          <GoChevronUp /> 270
        </span>
        Projects
      </Link>
      <Link className={s.skills} href={`/profile/${uid}?menu=skills`}>
        <span>
          <GoChevronUp /> 230
        </span>
        Skills
      </Link>
      <Link
        className={s.recommends}
        href={`/profile/${uid}?menu=recomendation`}
      >
        <span>
          <GoChevronUp /> 127
        </span>
        Recommends
      </Link>
    </div>
  )
}
