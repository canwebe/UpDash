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
import { useEffect } from 'react'
import { selectUserData } from '@/redux/features/authSlice'

export default function ProfileOther() {
  // Router
  const router = useRouter()
  const { menu, username } = router.query

  // Redux States
  const otherUserDataLoading = useSelector(selectOtherUserDataLoading)
  const otherUserData = useSelector((state) => selectUserData(state, 'other'))

  // Getting Datas
  useGetOtherUserData(username) // Getting User Data basic Eg: name,headline
  useGetProfiles(username, 'other') // Getting User Profiles

  //If there is no user for that username

  useEffect(() => {
    if (!otherUserDataLoading && !otherUserData?.username) {
      router.replace('/feed')
    }
  }, [router, otherUserData?.username, otherUserDataLoading])

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
      return <ProjectsPage type="other" />
    case 'skills':
      return <SkillsPage type="other" />
    case 'experiences':
      return <ExperiencePage type="other" />
    case 'achievements':
      return <AchivementsPage type="other" />
    case 'certifications':
      return <CertificationsPage type="other" />
    case 'recommendations':
      return <RecommendationsPage type="other" />
    case 'education':
      return <EducationPage type="other" />
    default:
      return <InfoPage type="other" />
  }
}

ProfileOther.getLayout = (page) => <ModalLayout>{page}</ModalLayout>
