import Header from '@/components/Shared/header'
import s from './featuredProjects.module.css'
import { GoChevronUp } from 'react-icons/go'
import Link from 'next/link'
import { RiEditBoxFill, RiEditLine } from 'react-icons/ri'
import { MdOutlineEdit } from 'react-icons/md'

export default function FeaturedProjects() {
  return (
    <>
      <Header title="Featured Projects">
        <Link href="/edit/featured">
          <RiEditLine /> Edit
        </Link>
      </Header>
      <div className={s.featuredProjectsWrapper}>
        {[...Array(7)].map((item, i) => (
          <div key={i} className={s.projectCard}>
            <div className={s.img}></div>
            <Link href="/">
              <p className={s.name}>This is Project Name</p>
              <p className={s.shortInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quisquam delectus fugiat possimus, perspiciatis
                voluptatem labore mollitia libero hic dic
              </p>
            </Link>
            <button className={s.upvotes}>
              <GoChevronUp /> 23
              <span className={s.upvotes_text}>Upvote</span>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
