import Image from 'next/image'
import s from './infoPage.module.css'
import noUserImg from '@/assets/user.svg'
import Button from '@/components/button'
import VotesBar from '../votesBar'
import {
  RiBookmarkLine,
  RiFileTextFill,
  RiFileTextLine,
  RiFolderOpenLine,
  RiShareFill,
} from 'react-icons/ri'
import { FaRegFileAlt } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'
import { IoIosImages } from 'react-icons/io'

export default function InfoPage() {
  return (
    <div className={s.infoPageWrapper}>
      <div className={`${s.infoPage} wrapper`}>
        <div className={s.imgVotesDiv}>
          <div className={s.userImg}>
            <Image src={noUserImg} fill alt="User Img" />
          </div>
          {/* <VotesBar /> */}
          {/* <div className={s.votesMenuDiv}>
            <VotesBar />
            <div className={s.profileBtnDiv}>
              <button className={s.saveBtn}>
                Save <RiBookmarkLine />
              </button>
              <button className={s.shareBtn}>
                <RiShareFill />
              </button>
            </div>
          </div> */}
        </div>

        <div className={s.userName}>
          <h3 className={s.name}>Golam Rabbani</h3>
          <p className={s.designation}>Full Stack Developer</p>
          <p className={s.place}>Dhubri,India</p>
        </div>
        <VotesBar />
        <h4 className="subHeader">Links</h4>
        <div className={s.socialLinksWrapper}>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
          <a href="#" className={s.socialLink}></a>
        </div>
        <h4 className="subHeader">Bio</h4>
        <p className={s.bio}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          sit veniam tempore aut adipisci consequuntur, non perferendis
          reprehenderit amet nisi blanditiis aspernatur quaerat dolorem magni
          molestiae vitae, itaque ipsam impedit.
        </p>
        <div className="btnDiv">
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
          {/* <Button variant="border" src="#">
            Resume <RiFileTextFill />
          </Button> */}
          {/* <Button src="#">
            Portfolio <IoIosImages />
          </Button> */}
        </div>
      </div>
    </div>
  )
}
