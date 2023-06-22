import Image from 'next/image'
import s from './infoPage.module.css'
import noUserImg from '@/assets/user.svg'
import Button from '@/components/button'
import VotesBar from '../votesBar'
import {
  RiBookmarkLine,
  RiFacebookFill,
  RiFileTextFill,
  RiFileTextLine,
  RiFolderOpenLine,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiShareFill,
  RiTwitchFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import { FaRegFileAlt, FaTiktok } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'
import { IoIosImages } from 'react-icons/io'

export default function InfoPage() {
  return (
    <div className={s.infoPageWrapper}>
      <div className={`${s.infoPage} wrapper`}>
        <div className={s.imgBtnDiv}>
          <div className={s.userImg}>
            <Image src={noUserImg} fill alt="User Img" />
          </div>
          <div className={s.profileBtnDiv}>
            <button className={s.saveBtn}>Edit Profile</button>
            {/* <button className={s.saveBtn}>
                  Save <RiBookmarkLine />
                </button> */}
            <button className={s.shareBtn}>
              <RiShareFill />
            </button>
          </div>
        </div>

        <div>
          <div className={s.userDetails}>
            <div className={s.nameDiv}>
              <h3 className={s.name}>Golam Rabbani Padukone</h3>
              {/* <div className={s.profileBtnDiv}>
              
                 <button className={s.saveBtn}>
                  Save <RiBookmarkLine />
                </button>
                <button className={s.shareBtn}>
                  <RiShareFill />
                </button>
              </div> */}
            </div>

            <p className={s.designation}>Full Stack Developer</p>
            <p className={s.place}>Dhubri,India</p>
          </div>
          <VotesBar />
          <h4 className="subHeader">Links</h4>
          <SocialLinks />
          <h4 className="subHeader">Bio</h4>
          <p className={s.bio}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            sit veniam tempore aut adipisci consequuntur, non perferendis
            reprehenderit amet nisi blanditiis aspernatur quaerat dolorem magni
            molestiae vitae, itaque ipsam impedit.
          </p>
          <div className={`${s.bioBtnDiv} btnDiv`}>
            <a
              className={s.resumeBtn}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <RiFileTextFill />
            </a>
            <a
              className={s.portfolioBtn}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio <IoIosImages />
            </a>
          </div>
          <OtherLinks />
        </div>
      </div>
    </div>
  )
}

const SocialLinks = () => {
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

  const links = ['facebook', 'instagram', 'twitter', 'linkedin', 'github']
  return (
    <div className={s.socialLinksWrapper}>
      {links.map((link, i) => (
        <a
          href="#"
          key={i}
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {socilaObj[link]}
        </a>
      ))}
    </div>
  )
}

const OtherLinks = () => {
  const links = ['my portfolio', 'comapny page']
  return (
    <>
      <h4 className="subHeader">Other Links</h4>
      <div className={s.otherLinksWrapper}>
        {links.map((link, i) => (
          <a
            href="#"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className={s.otherLink}
          >
            {link} <BiLinkExternal />
          </a>
        ))}
      </div>
    </>
  )
}
