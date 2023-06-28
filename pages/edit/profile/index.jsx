import Button from '@/components/button'
import FormDiv from '@/components/formDiv'
import ModalLayout from '@/components/layouts/modalLayout'
import s from '@/styles/EditProfile.module.css'
import Image from 'next/image'
import userSvg from '@/assets/user.svg'
import {
  RiFacebookFill,
  RiGithubFill,
  RiImageEditFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri'
import { useRef, useState } from 'react'
import Header from '@/components/header'
import SocialInput from '@/components/socialInput'

export default function EditProfile() {
  // Local States
  const [img, setImg] = useState('')
  const [links, setLinks] = useState([
    {
      name: 'twitter',
      url: '',
    },
  ])

  // Ref For Image
  const imgFileRef = useRef()

  // Functions
  // Image Change Function for input
  const handleImgChange = (e) => {
    const imgFile = e.target.files[0]
    if (imgFile) {
      const imgSrc = URL.createObjectURL(imgFile)
      setImg(imgSrc)
    }
    imgFileRef.current.value = ''
  }

  // Reset Image
  const handleResetImg = () => {
    setImg('')
  }

  // SOcial Links List
  const socialaObj = {
    facebook: <RiFacebookFill />,
    youtube: <RiYoutubeFill />,
    instagram: <RiInstagramFill />,
    twitter: <RiTwitterFill />,
    linkedin: <RiLinkedinFill />,
    github: <RiGithubFill />,
  }

  return (
    <div className={s.editProfileBody}>
      <form className={`${s.editProfileForm} wrapper`}>
        <div className={s.userImg_wrapper}>
          <div className={s.userImg}>
            <Image src={img || userSvg} alt="User Profile Avatar" fill />
            <div
              onClick={() => imgFileRef.current.click()}
              className={s.userImg_editBtn}
            >
              <RiImageEditFill />
            </div>
            <input
              onChange={handleImgChange}
              ref={imgFileRef}
              type="file"
              name="userImage"
            />
          </div>
          <Button onClick={handleResetImg} variant="sm borderRed">
            Reset Image
          </Button>
        </div>
        <FormDiv label="Display Name" idFor="displayName">
          <input
            id="displayName"
            type="text"
            placeholder="Eg: Golam Rabbani"
            required
          />
        </FormDiv>
        <FormDiv label="Headline" idFor="headline">
          <input
            id="headline"
            type="text"
            placeholder="Eg: Developer for Flipkart"
            required
          />
        </FormDiv>
        <FormDiv label="Place" idFor="place">
          <input id="place" type="text" placeholder="Eg: Bangalore,India" />
        </FormDiv>
        <FormDiv label="Bio" idFor="bio">
          <textarea
            name="bio"
            id="bio"
            placeholder="Write about yourself"
            rows={4}
          />
        </FormDiv>
        <FormDiv label="Resume link" idFor="resume">
          <input
            id="resume"
            type="text"
            placeholder="Eg: GDrive link to your resume"
          />
        </FormDiv>
        <h3 className="headerBorder">Social Links</h3>
        {Object.keys(socialaObj).map((linkName) => (
          <SocialInput key={linkName}>{socialaObj[linkName]}</SocialInput>
        ))}
        <h3 className="headerBorder">Other Links</h3>
        <div style={{ marginTop: '1rem' }} className="btnDiv">
          <Button>Create</Button>
          <Button variant="grey" type="button">
            Close
          </Button>
        </div>
      </form>
    </div>
  )
}

EditProfile.getLayout = (page) => (
  <ModalLayout title="Edit Profile">{page}</ModalLayout>
)
