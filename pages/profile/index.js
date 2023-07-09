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
import { useSelector } from 'react-redux'
import { selectUserData } from '@/redux/features/authSlice'
import { selectProfileShort } from '@/redux/features/userProfileSlice'

export default function ProfileOwn() {
  // Router
  const router = useRouter()
  const { menu } = router.query

  // Redux States
  const userData = useSelector(selectUserData)
  const { uid, username } = userData
  const profileShort = useSelector(selectProfileShort)

  // Getting Datas
  useGetProfiles(uid) // Getting User Profiles

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
