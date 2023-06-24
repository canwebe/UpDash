import Header from '@/components/header'
import s from './featuredProjects.module.css'
import { GoChevronUp } from 'react-icons/go'
import Link from 'next/link'

export default function FeaturedProjects() {
  return (
    <>
      <Header title="Featured Projects" />
      <div className={s.featuredProjectsWrapper}>
        {[...Array(7)].map((item, i) => (
          <div key={i} className={s.projectCard}>
            <Link href="/">
              <p className={s.name}>This is Project Name</p>
              <p className={s.shortInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quisquam delectus fugiat possimus, perspiciatis
                voluptatem labore mollitia libero hic dic
              </p>
            </Link>
            <p className={s.upvotes}>
              <GoChevronUp /> 23
              <span className={s.upvotes_text}>Upvote</span>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
