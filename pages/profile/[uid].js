import ProjectsPage from '@/components/PageComponents/ProfileComponents/ProjectsPage'
import SkillsPage from '@/components/PageComponents/ProfileComponents/SkillsPage'
import AchivementsPage from '@/components/PageComponents/ProfileComponents/achivementsPage'
import CertificationsPage from '@/components/PageComponents/ProfileComponents/certficationsPage'
import EducationPage from '@/components/PageComponents/ProfileComponents/educationPage'
import ExperiencePage from '@/components/PageComponents/ProfileComponents/experiencePage'
import InfoPage from '@/components/PageComponents/ProfileComponents/infoPage'
import InfoTop from '@/components/PageComponents/ProfileComponents/infoTop'
import RecommendationsPage from '@/components/PageComponents/ProfileComponents/recommendationsPage'
import SubNav from '@/components/PageComponents/ProfileComponents/subNav'

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
