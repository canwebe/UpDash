import ProjectCard from '@/components/projectCard'
import s from './projectsList.module.css'
import Header from '@/components/header'
import Link from 'next/link'
import { RiAddFill, RiEditBoxFill } from 'react-icons/ri'

export default function ProjectsList({ listAll }) {
  return (
    <>
      <Header title="All Projects">
        <div>
          <Link href="/add/project">
            <RiAddFill /> Add
          </Link>
          <button>
            <RiEditBoxFill /> Edit
          </button>
        </div>
      </Header>
      <div className={s.projectsList}>
        {[...Array(7)].map((item, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </>
  )
}
