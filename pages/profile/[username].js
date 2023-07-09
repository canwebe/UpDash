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
import { useSelector } from 'react-redux'
import { selectOtherUserDataLoading } from '@/redux/features/userProfileSlice'
import Loader from '@/components/Shared/loaders/loader'
import useGetOtherUserData from '@/hooks/useGetOtherUserData'
import store from '@/redux/store'

export default function ProfileOther() {
  // Router
  const router = useRouter()
  const { menu, username } = router.query

  // Redux States
  const otherUserDataLoading = useSelector(selectOtherUserDataLoading)

  // Getting Datas
  useGetOtherUserData(username) // Getting User Data basic Eg: name,headline
  useGetProfiles(username, 'other') // Getting User Profiles

  console.log(
    'User Data Loading Other',
    otherUserDataLoading,
    store.getState().userProfile
  )
  return (
    <>
      <Head>
        <title>{capitilizeText(username)} | UpDash</title>
      </Head>
      {otherUserDataLoading ? (
        <Loader text="Getting Profile Data" />
      ) : (
        <>
          {menu ? <InfoTop type="other" /> : null}
          <SubNav type="other" />
          <RenderPage menu={menu} />
        </>
      )}
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
      return <InfoPage type="other" />
  }
}

ProfileOther.getLayout = (page) => (
  <ModalLayout title="Edit Profile">{page}</ModalLayout>
)
