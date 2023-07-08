import { useRef } from 'react'
import Image from 'next/image'
import { Controller } from 'react-hook-form'
import { RiImageEditFill } from 'react-icons/ri'

import s from './userImageUpload.module.css'
import Button from '@/components/Shared/button'
import userSvg from '@/assets/user.svg'

export default function UserImageUpload({
  img,
  control,
  isDirtyPhoto,
  onReset,
  onChange,
}) {
  // Ref For Image
  const imgFileRef = useRef()

  // Handle Image Change Function
  const handleChange = (e, setImage) => {
    const imgFile = e.target.files[0]
    if (imgFile) {
      const imgSrc = URL.createObjectURL(imgFile)
      onChange(imgSrc)
      setImage(imgFile)
    }
    e.target.value = ''
  }

  return (
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
              onChange={(e) => handleChange(e, field.onChange)}
            />
          )}
        />
      </div>
      {isDirtyPhoto ? (
        <Button type="button" onClick={onReset} variant="sm borderRed">
          Reset Image
        </Button>
      ) : null}
    </div>
  )
}
