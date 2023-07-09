import Image from 'next/image'
import s from './infoPage.module.css'
import noUserImg from '@/assets/user.svg'
import VotesBar from '../votesBar'
import {
  RiBookmarkLine,
  RiFacebookFill,
  RiFileTextFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiShareFill,
  RiTwitchFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'
import { IoIosImages } from 'react-icons/io'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectUserData } from '@/redux/features/authSlice'
import {
  selectOtherUserDataLoading,
  selectProfileInfoLoading,
  selectProfileShort,
} from '@/redux/features/userProfileSlice'
import store from '@/redux/store'

export default function InfoPage({ type = 'own' }) {
  // Redux States
  const userData = useSelector((state) => selectUserData(state, type))
  const profileShort = useSelector((state) => selectProfileShort(state, type))

  const profileLoading = useSelector((state) =>
    selectProfileInfoLoading(state, type)
  )

  console.log(userData, store.getState().userProfile, profileLoading, type)

  // Data Object Destructing
  const {
    photoURL,
    displayName,
    headline,
    place,
    projectsUp,
    skillsUp,
    recommendsUp,
    username,
  } = userData || {}

  const { bio, socialLinks, otherLinks, resume } = profileShort || {}

  if (profileLoading) {
    return <h1>Loading</h1>
  }

  return (
    <div className={s.infoPageWrapper}>
      <div className={`${s.infoPage} wrapper`}>
        <div className={s.imgBtnDiv}>
          <div className={s.userImg}>
            <Image src={photoURL || noUserImg} fill alt="User Img" />
          </div>
          <div className={s.profileBtnDiv}>
            {type === 'own' ? (
              <Link href="/edit/profile" className={s.saveBtn}>
                Edit Profile
              </Link>
            ) : (
              <button className={s.saveBtn}>
                Save <RiBookmarkLine />
              </button>
            )}

            <button className={s.shareBtn}>
              <RiShareFill />
            </button>
          </div>
        </div>

        <div>
          <div className={s.userDetails}>
            <div className={s.nameDiv}>
              <h3 className={s.name}>{displayName}</h3>
              {/* <div className={s.profileBtnDiv}>
              
                 <button className={s.saveBtn}>
                  Save <RiBookmarkLine />
                </button>
                <button className={s.shareBtn}>
                  <RiShareFill />
                </button>
              </div> */}
            </div>
            {headline ? (
              <p className={s.designation}>{headline}</p>
            ) : type === 'own' ? (
              <p className={`${s.designation} textOpacity`}>
                No headline found
              </p>
            ) : null}
            {place ? (
              <p className={s.place}>{place}</p>
            ) : type === 'own' ? (
              <p className={`${s.place} textOpacity`}>
                Add your place in edit profile
              </p>
            ) : null}
          </div>
          <VotesBar
            projectsUp={projectsUp}
            skillsUp={skillsUp}
            recommendsUp={recommendsUp}
          />
          <SocialLinks socialLinks={socialLinks} />
          <Bio bio={bio} type={type} />
          <div className={`${s.bioBtnDiv} btnDiv`}>
            {resume ? (
              <a
                className={s.resumeBtn}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <RiFileTextFill />
              </a>
            ) : null}

            <a
              className={s.portfolioBtn}
              href={`https://${username}.updash.me`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio <IoIosImages />
            </a>
          </div>
          <OtherLinks otherLinks={otherLinks} type={type} />
        </div>
      </div>
    </div>
  )
}

const SocialLinks = ({ socialLinks }) => {
  const socilaObj = {
    facebook: <RiFacebookFill />,
    youtube: <RiYoutubeFill />,
    instagram: <RiInstagramFill />,
    twitter: <RiTwitterFill />,
    linkedin: <RiLinkedinFill />,
    github: <RiGithubFill />,
    twitch: <RiTwitchFill />,
    tiktok: <FaTiktok />,
  }

  const links = Object.keys(socialLinks).filter(
    (link) => socialLinks[link] !== ''
  )

  if (!links?.length) {
    return null
  }

  return (
    <>
      <h4 className="subHeader">Links</h4>
      <div className={s.socialLinksWrapper}>
        {links.map((link, i) => (
          <a
            href={socialLinks[link]}
            key={link}
            className={s.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socilaObj[link]}
          </a>
        ))}
      </div>
    </>
  )
}

const Bio = ({ bio, type }) => {
  if (!bio && type === 'other') {
    return null
  }

  return (
    <>
      <h4 className="subHeader">Bio</h4>
      {bio ? (
        <p className={s.bio}>{bio}</p>
      ) : (
        <p className={`${s.bio} textOpacity`}>
          You dont have any bio. Write it in edit profile.
        </p>
      )}
    </>
  )
}

const OtherLinks = ({ otherLinks, type }) => {
  const links = otherLinks?.filter((link) => link?.name)
  console.log(links, 'This is Other')

  if (!links?.length) {
    return null
  }

  return (
    <>
      <h4 className="subHeader">Other Links</h4>
      <div className={s.otherLinksWrapper}>
        {links.map((link) => (
          <a
            href={link?.url}
            key={link?.name}
            target="_blank"
            rel="noopener noreferrer"
            className={s.otherLink}
          >
            {link?.name} <BiLinkExternal />
          </a>
        ))}
      </div>
    </>
  )
}
