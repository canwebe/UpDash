import ProjectsPage from '@/components/ProfileComponents/ProjectsPage'
import SkillsPage from '@/components/ProfileComponents/SkillsPage'
import AchivementsPage from '@/components/ProfileComponents/achivementsPage'
import CertificationsPage from '@/components/ProfileComponents/certficationsPage'
import EducationPage from '@/components/ProfileComponents/educationPage'
import ExperiencePage from '@/components/ProfileComponents/experiencePage'
import InfoPage from '@/components/ProfileComponents/infoPage'
import InfoTop from '@/components/ProfileComponents/infoTop'
import RecommendationsPage from '@/components/ProfileComponents/recommendationsPage'
import SubNav from '@/components/ProfileComponents/subNav'
import s from '@/styles/Profile.module.css'
import { useRouter } from 'next/router'

export default function Profile() {
  // Router
  const router = useRouter()
  const { menu } = router.query
  return (
    <>
      {menu ? <InfoTop /> : null}
      <SubNav />
      <RenderPage menu={menu} />
    </>
  )
}

const RenderPage = ({ menu }) => {
  switch (menu) {
    case 'projects':
      return <ProjectsPage />
    case 'skills':
      return <SkillsPage />
    case 'experiences':
      return <ExperiencePage />
    case 'achivements':
      return <AchivementsPage />
    case 'certifications':
      return <CertificationsPage />
    case 'recommendations':
      return <RecommendationsPage />
    case 'education':
      return <EducationPage />
    default:
      return <InfoPage />
  }
}
