import {
  RiErrorWarningLine,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import s from './socialInputs.module.css'

export default function SocialInputs({ errors, register }) {
  const socialObj = {
    facebook: <RiFacebookFill />,
    youtube: <RiYoutubeFill />,
    instagram: <RiInstagramFill />,
    twitter: <RiTwitterFill />,
    linkedin: <RiLinkedinFill />,
    github: <RiGithubFill />,
  }

  return (
    <>
      <h3 className="headerBorder">Social Links</h3>
      {Object.keys(socialObj).map((linkName) => {
        const isError = errors?.socialLinks?.[linkName]

        return (
          <div key={linkName}>
            <div className={`${s.inputWrapper} ${isError ? s.isError : ''}`}>
              {socialObj[linkName]}
              <input
                type="text"
                placeholder={`Your ${linkName} url`}
                {...register(`socialLinks.${linkName}`)}
              />
            </div>
            {isError ? (
              <p className="formErrorText">
                <RiErrorWarningLine />
                {errors?.socialLinks?.[linkName]?.message}
              </p>
            ) : null}
          </div>
        )
      })}
    </>
  )
}
