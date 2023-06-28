import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import s from './socialInput.module.css'

export default function SocialInput({ children }) {
  const socilaObj = {
    facebook: <RiFacebookFill />,
    youtube: <RiYoutubeFill />,
    instagram: <RiInstagramFill />,
    twitter: <RiTwitterFill />,
    linkedin: <RiLinkedinFill />,
    github: <RiGithubFill />,
  }

  return (
    <div className={s.inputWrapper}>
      {children}
      <input type="text" placeholder="Eg: Links" />
    </div>
  )
}
