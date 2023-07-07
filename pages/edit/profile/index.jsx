import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { RiImageEditFill } from 'react-icons/ri'

import s from '@/styles/EditProfile.module.css'
import Button from '@/components/Shared/button'
import FormDiv from '@/components/Shared/formDiv'
import ModalLayout from '@/components/Layouts/modalLayout'
import userSvg from '@/assets/user.svg'

import OtherLinksInput from '@/components/PageComponents/otherLinksInput'
import SocialInputs from '@/components/PageComponents/socialInputs'

import { editProfileSchema } from '@/lib/yupSchemas'

import {
  selectUserData,
  selectUserDataLoading,
} from '@/redux/features/authSlice'
import useRouteGuard from '@/hooks/useRouteGuard'
import { PulseLoader, BeatLoader } from 'react-spinners'

export default function EditProfile() {
  // Getting Data from DB stored in redux
  const userData = useSelector(selectUserData)
  const isUserDataLoading = useSelector(selectUserDataLoading)

  // Destructing User Data
  const {
    photoURL = '',
    displayName = '',
    place = '',
    headline = '',
    uid,
    username,
  } = userData || {}

  const {
    otherLinks = [
      {
        name: '',
        url: '',
      },
    ],
    socialLinks = {
      facebook: '',
      youtube: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
    resume = '',
    bio = '',
  } = {}

  // Local States
  const [img, setImg] = useState(photoURL)

  // Ref For Image
  const imgFileRef = useRef()

  // Router
  const router = useRouter()

  // Form Handeling
  const defaultValues = {
    photoURL,
    displayName,
    place,
    headline,
    otherLinks,
    socialLinks,
    resume,
    bio,
  }

  // React Hooks Form
  const {
    control,
    register,
    formState,
    handleSubmit,
    getValues,
    setValue,
    reset,
    resetField,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(editProfileSchema),
  })

  // For Multiple Field Array
  const { fields, append, remove } = useFieldArray({
    control,
    rules: { maxLength: 5 },
    name: 'otherLinks',
  })

  // FormStates
  const {
    errors,
    isDirty,
    isValid,
    isSubmitting,
    dirtyFields,
    isSubmitSuccessful,
    isLoading,
    defaultValues: testDefault,
  } = formState

  // Functions
  // Image Change Function for input
  const handleImgChange = (e, onChange) => {
    const imgFile = e.target.files[0]
    if (imgFile) {
      const imgSrc = URL.createObjectURL(imgFile)
      setImg(imgSrc)
      onChange(imgFile)
    }
    e.target.value = ''
  }

  // Reset Image
  const handleResetImg = () => {
    console.log('Reset Img')
    setImg(photoURL)
    resetField('photo')
  }

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Submitted Successfully')
        resolve()
      }, 4000)
    })
  }

  const onSubmit = async (data) => {
    toast.loading(<b>Loading</b>, { id: 'editprofile' })
    try {
      // Check if photo is uploaded
      if (dirtyFields?.photo) {
        console.log('Is Photo Uploaded', dirtyFields?.photo)
      }

      await fetchData()
      toast.success(<b>Updated successfully</b>, { id: 'editprofile' })
      // Reset Form
      reset()
      //  Route to Profile Page
      // router.push('/profile/' + username)
    } catch (error) {
      console.error('Edit Profile', error?.message)
      toast.error(<b>Something went wrong try again!</b>, { id: 'editprofile' })
    }
  }

  // console.log('Dirty fields', dirtyFields)

  // Route Protecting
  // useRouteGuard()

  const test = {
    edu: ['asa', 'asas'],
    gender: 'male',
    school: 'asasasdasdasd',
    age: '20',
  }

  const { edu, marks, ...other } = test
  const newObj = { ...other }

  console.log('Test Result NewObj Other', newObj, other, edu, marks)

  // Loading Screen if User Additional Data Loading
  if (isUserDataLoading) {
    return <h1>Loading.....</h1>
  }

  return (
    <div className={s.editProfileBody}>
      <form
        className={`${s.editProfileForm} wrapper`}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
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
            <Controller
              name="photo"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  value={field?.value?.fileName}
                  ref={(ref) => {
                    field.ref(ref)
                    imgFileRef.current = ref
                  }}
                  type="file"
                  accept="image/jpeg, image/png, image/webp, image/svg+xml"
                  onChange={(e) => handleImgChange(e, field.onChange)}
                />
              )}
            />
          </div>
          {dirtyFields?.photo ? (
            <Button
              type="button"
              onClick={handleResetImg}
              variant="sm borderRed"
            >
              Reset Image
            </Button>
          ) : null}
        </div>
        <div>
          <p>Form States</p>
          <p>{`IsDirty : ${isDirty} IsValid : ${isValid} IsSubmitting : ${isSubmitting} isSubmitted : ${isSubmitSuccessful} isLoading : ${isLoading}`}</p>
        </div>
        <FormDivsList errors={errors} register={register} />
        <SocialInputs errors={errors} register={register} />
        <OtherLinksInput
          errors={errors}
          fields={fields}
          register={register}
          append={append}
          remove={remove}
        />
        {errors?.photo ? (
          <p className="formErrorText">{errors?.photo?.message}</p>
        ) : null}
        <div className={`btnDiv ${s.submitBtnDiv}`}>
          <Button
            disabled={isSubmitting}
            onClick={() => reset()}
            variant="grey w100"
            type="button"
          >
            Reset
          </Button>
          <Button
            disabled={!isDirty || isSubmitting}
            variant="w100"
            type="submit"
          >
            {isSubmitting ? (
              <PulseLoader speedMultiplier={0.7} size={10} color="#bbb" />
            ) : (
              'Submit'
            )}
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
