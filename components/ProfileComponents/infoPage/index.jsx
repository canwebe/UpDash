import Image from 'next/image'
import s from './infoPage.module.css'
import noUserImg from '@/assets/user.svg'
import Button from '@/components/button'
import VotesBar from '../votesBar'

export default function InfoPage() {
  return (
    <div className={s.infoPageWrapper}>
      <div className={`${s.infoPage} wrapper`}>
        <div className={s.userImgNameWrapper}>
          <div className={s.userVotesDiv}>
            <div className={s.userImg}>
              <Image src={noUserImg} fill alt="User Img" />
            </div>
            <div className={s.votesMenuDiv}>
              <VotesBar />
              <div className={s.profileBtnDiv}>
                <button>Edit Profile</button>
              </div>
            </div>
          </div>

          <div className={s.userName}>
            <h3 className={s.name}>Golam Rabbani</h3>
            <p className={s.designation}>Full Stack Developer</p>
            <p className={s.place}>Dhubri,India</p>
          </div>
        </div>
        <div className={s.socialLinksWrapper}>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          sit veniam tempore aut adipisci consequuntur, non perferendis
          reprehenderit amet nisi blanditiis aspernatur quaerat dolorem magni
          molestiae vitae, itaque ipsam impedit.
        </p>
        <div className="btnDiv">
          <Button>View Resume</Button>
          <Button>See Portfolio</Button>
        </div>
      </div>
    </div>
  )
}
