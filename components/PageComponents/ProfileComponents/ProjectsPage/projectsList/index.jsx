import ProjectCard from '@/components/PageComponents/projectCard'
import Header from '@/components/Shared/header'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'

export default function ProjectsList({ listAll }) {
  return (
    <>
      <Header title="All Projects">
        <div>
          <Link href="/add/project">
            <RiAddCircleLine /> Add
          </Link>
          <button>
            <RiEditLine /> Edit
          </button>
        </div>
      </Header>
      <div className="profileList wrapper">
        {[...Array(7)].map((item, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </>
  )
}
