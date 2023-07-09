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

export default function VotesBar({
  projectsUp = 0,
  skillsUp = 0,
  recommendsUp = 0,
  secondary,
}) {
  const router = useRouter()

  const username = router.query?.username

  const menuPath = username ? '/' + username : ''
  console.log(projectsUp, skillsUp, recommendsUp, 'Votes Bar')
  return (
    <div className={`${s.votesBarWrapper} ${secondary ? s.secondary : ''}`}>
      <Link
        className={s.projects}
        href={`/profile${menuPath}?menu=projects`}
        replace
      >
        <span>
          <GoChevronUp /> {projectsUp}
        </span>
        Projects
      </Link>
      <Link
        className={s.skills}
        href={`/profile${menuPath}?menu=skills`}
        replace
      >
        <span>
          <GoChevronUp /> {skillsUp}
        </span>
        Skills
      </Link>
      <Link
        className={s.recommends}
        href={`/profile${menuPath}?menu=recomendation`}
        replace
      >
        <span>
          <GoChevronUp /> {recommendsUp}
        </span>
        Recommends
      </Link>
    </div>
  )
}
