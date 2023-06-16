import ProjectsPage from '@/components/ProfileComponents/ProjectsPage'
import SkillsPage from '@/components/ProfileComponents/SkillsPage'
import InfoPage from '@/components/ProfileComponents/infoPage'
import InfoTop from '@/components/ProfileComponents/infoTop'
import SubNav from '@/components/ProfileComponents/subNav'
import s from '@/styles/Profile.module.css'
import { useRouter } from 'next/router'

export default function Profile() {
  // Router
  const router = useRouter()
  const { menu } = router.query
  return (
    <div className={s.profileContainer}>
      {menu ? <InfoTop /> : null}
      <SubNav />
      <RenderPage menu={menu} />
    </div>
  )
}

const RenderPage = ({ menu }) => {
  switch (menu) {
    case 'projects':
      return <ProjectsPage />
    case 'skills':
      return <SkillsPage />
    default:
      return <InfoPage />
  }
}
