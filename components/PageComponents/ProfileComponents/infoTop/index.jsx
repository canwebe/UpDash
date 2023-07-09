import Image from 'next/image'
import s from './infoTop.module.css'
import noUserImg from '@/assets/user.svg'
import Button from '@/components/Shared/button'
import VotesBar from '../votesBar'
import { useSelector } from 'react-redux'
import { selectUserData } from '@/redux/features/authSlice'

export default function InfoTop({ type = 'own' }) {
  // Redux States
  const userData = useSelector(selectUserData)
  const {
    photoURL,
    displayName,
    headline,
    place,
    projectsUp,
    skillsUp,
    recommendsUp,
  } = userData || {}

  return (
    <div className={s.infoTopWrapper}>
      <div className={`${s.infoTop} wrapper`}>
        <div className={s.userImg}>
          <Image src={photoURL || noUserImg} fill alt="User Img" />
        </div>
        <div className={s.userNameWrapper}>
          <RenderInfo
            type={type}
            displayName={displayName}
            headline={headline}
            place={place}
          />
          <VotesBar
            projectsUp={projectsUp}
            skillsUp={skillsUp}
            recommendsUp={recommendsUp}
            secondary
          />
        </div>
      </div>
    </div>
  )
}

const RenderInfo = ({ type, displayName, headline, place }) => {
  return (
    <div>
      <h3 className={s.name}>{displayName}</h3>
      {headline ? (
        <p className={s.headline}>{headline}</p>
      ) : type === 'own' ? (
        <p className={`${s.designation} textOpacity`}>You have no headline</p>
      ) : null}
      {place ? (
        <p className={s.place}>{place}</p>
      ) : type === 'own' ? (
        <p className={`${s.place} textOpacity`}>No place info found</p>
      ) : null}
    </div>
  )
}
