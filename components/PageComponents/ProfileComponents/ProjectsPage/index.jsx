import Header from '@/components/Shared/header'
import s from './projectsPage.module.css'
import Link from 'next/link'
import { IoIosArrowUp } from 'react-icons/io'
import { SlArrowUp } from 'react-icons/sl'
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { RiArrowUpSLine } from 'react-icons/ri'
import ProjectCard from '@/components/PageComponents/projectCard'
import ProjectsList from './projectsList'
import FeaturedProjects from './featuredProjects'

export default function ProjectsPage() {
  return (
    <div className={s.projectsPage}>
      <FeaturedProjects />
      <ProjectsList listAll />
    </div>
  )
}
