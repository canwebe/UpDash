import Image from 'next/image'
import s from './infoTop.module.css'
import noUserImg from '@/assets/user.svg'
import Button from '@/components/button'
import VotesBar from '../votesBar'

export default function InfoTop() {
  return (
    <div className={s.infoTopWrapper}>
      <div className={`${s.infoTop} wrapper`}>
        <div className={s.userImg}>
          <Image src={noUserImg} fill alt="User Img" />
        </div>
        <div className={s.userNameWrapper}>
          <div>
            <h3 className={s.name}>Golam Rabbani</h3>
            <p className={s.designation}>Full Stack Developer</p>
            <p className={s.place}>Dhubri,India</p>
          </div>

          <VotesBar />
        </div>
      </div>
    </div>
  )
}
