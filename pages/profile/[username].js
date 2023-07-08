import { useRouter } from 'next/router'
import Head from 'next/head'

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

import { capitilizeText } from '@/utils/helper'
import useGetProfiles from '@/hooks/useGetProfiles'
import ModalLayout from '@/components/Layouts/modalLayout'

export default function ProfileOther() {
  // Router
  const router = useRouter()
  const { menu, username } = router.query

  // Getting Datas
  useGetProfiles(username, 'other') // Getting User Profiles

  return (
    <>
      <Head>
        <title>{capitilizeText(username)} | UpDash</title>
      </Head>
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

ProfileOther.getLayout = (page) => (
  <ModalLayout title="Edit Profile">{page}</ModalLayout>
)
