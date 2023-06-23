import { RiArrowUpSLine } from 'react-icons/ri'
import s from './projectCard.module.css'
import Link from 'next/link'

export default function ProjectCard() {
  return (
    <div className={s.projectCardWrapper}>
      <div className={`${s.projectCard} wrapper`}>
        <div className={s.projectCard_vote}>
          <RiArrowUpSLine /> 20
        </div>
        <Link href="/" className={s.projectCard_content}>
          <p className={s.name}>This is Project Name</p>
          <p className={s.shortInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, quisquam delectus fugiat possimus, perspiciatis
            voluptatem labore mollitia libero hic dic
          </p>
        </Link>
      </div>
    </div>
  )
}
