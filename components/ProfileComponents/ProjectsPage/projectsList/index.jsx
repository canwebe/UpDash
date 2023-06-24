import ProjectCard from '@/components/projectCard'
import s from './projectsList.module.css'
import Header from '@/components/header'

export default function ProjectsList({ listAll }) {
  return (
    <>
      <Header title="All Projects" />
      <div className={s.projectsList}>
        {[...Array(7)].map((item, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </>
  )
}
