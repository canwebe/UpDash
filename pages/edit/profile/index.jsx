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
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import SocialInputs from '@/components/socialInputs'
import { editProfileSchema } from '@/lib/yupSchemas'

export default function EditProfile() {
  // Local States
  const [img, setImg] = useState('')
  const [links, setLinks] = useState([
    {
      name: 'twitter',
      url: '',
    },
  ])
  const MAX_FILE_SIZE = 56 * 1208

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

  // Form Handeling

  // React Hooks Form
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(editProfileSchema),
  })

  // FormStates
  const { errors } = formState

  const onSubmit = (data) => {
    console.log('Submitted Data', data)
  }

  const onError = (data) => {
    console.log('Error Data', data)
  }

  console.log('FormSTate', formState, errors)

  return (
    <div className={s.editProfileBody}>
      <form
        className={`${s.editProfileForm} wrapper`}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <Button type="button" onClick={handleResetImg} variant="sm borderRed">
            Reset Image
          </Button>
        </div>
        <FormDivsList errors={errors} register={register} />
        <h3 className="headerBorder">Social Links</h3>
        <SocialInputs errors={errors} register={register} />
        <h3 className="headerBorder">Other Links</h3>
        <div style={{ marginTop: '1rem' }} className="btnDiv">
          <Button type="submit">Create</Button>
          <Button variant="grey" type="button">
            Close
          </Button>
        </div>
      </form>
    </div>
  )
}

const FormDivsList = ({ errors, register }) => {
  const inputsList = [
    {
      name: 'displayName',
      label: 'Display Name',
      placeholder: 'Eg: Golam Rabbani',
    },
    {
      name: 'headline',
      label: 'Headline',
      placeholder: 'Eg: Developer for Flipkart',
    },
    {
      name: 'place',
      label: 'Place',
      placeholder: 'Eg: Bangalore,India',
    },
    {
      name: 'bio',
      label: 'Your Bio',
      placeholder: 'Write about yourself',
      textarea: true,
    },
    {
      name: 'resume',
      label: 'Resume link',
      placeholder: 'Eg: GDrive link to your resume',
    },
  ]

  return inputsList.map((formInput) => (
    <FormDiv
      key={formInput.name}
      label={formInput.label}
      idFor={formInput.name}
      error={errors?.[formInput.name]?.message}
    >
      {formInput?.textarea ? (
        <textarea
          id={formInput.name}
          placeholder={formInput.placeholder}
          rows={4}
          {...register(formInput.name)}
        />
      ) : (
        <input
          id={formInput.name}
          placeholder={formInput.placeholder}
          type="text"
          {...register(formInput.name)}
        />
      )}
    </FormDiv>
  ))
}

EditProfile.getLayout = (page) => (
  <ModalLayout title="Edit Profile">{page}</ModalLayout>
)
