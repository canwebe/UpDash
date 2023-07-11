import s from '@/styles/EditEducation.module.css'

import ModalLayout from '@/components/Layouts/modalLayout'
import Button from '@/components/Shared/button'
import DateMonth from '@/components/Shared/dateMonth'
import FormDiv from '@/components/Shared/formDiv'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { editEducationSchema } from '@/lib/yupSchemas'
import { PulseLoader } from 'react-spinners'
import { toast } from 'react-hot-toast'
import { addEducationData } from '@/utils/helper-firebase'
import { useSelector } from 'react-redux'
import { selectUid } from '@/redux/features/authSlice'
import { useRouter } from 'next/router'

export default function EducationAdd() {
  // Redux States
  const uid = useSelector(selectUid)
  // Routing
  const router = useRouter()

  const defaultValues = {
    institution: '',
    program: '',
    grade: '',
    description: '',
    place: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
  }

  // React Hook Form
  const { register, control, handleSubmit, formState, reset } = useForm({
    defaultValues,
    resolver: yupResolver(editEducationSchema),
  })

  // Destructing Form State
  const { errors, isDirty, isSubmitting } = formState

  const onSubmit = async (data) => {
    try {
      toast.loading(<b>Adding Data...</b>, {
        id: 'educationAdd',
      })
      await addEducationData(uid, data)
      toast.success(<b>Data added successfully</b>, {
        id: 'educationAdd',
      })
      reset()
      router.replace('/profile?menu=education')
    } catch (error) {
      console.error('Education Form', error?.message)
      toast.error(<b>Something went wrong , Please try Again!</b>, {
        id: 'educationAdd',
      })
    }
  }
  return (
    <div className="editPage">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${s.editEducationForm} wrapper`}
      >
        <FormDiv
          idFor="instituion"
          label="Institution Name"
          required
          error={errors?.institution?.message}
        >
          <input
            id="instituion"
            {...register('institution')}
            type="text"
            placeholder="Eg: SaIT Bangalore"
          />
        </FormDiv>
        <FormDiv
          idFor="program"
          label="Degree / Program"
          required
          error={errors?.program?.message}
        >
          <input
            id="program"
            type="text"
            {...register('program')}
            placeholder="Eg: B.E Computer Science Engineering"
          />
        </FormDiv>
        <DateMonth
          name="start"
          control={control}
          errorMonth={errors?.startMonth?.message}
          errorYear={errors?.startYear?.message}
        />
        <DateMonth
          control={control}
          name="end"
          errorMonth={errors?.endMonth?.message}
          errorYear={errors?.endYear?.message}
        />
        <FormDiv
          idFor="grade"
          label="GPA / Grade"
          error={errors?.grade?.message}
        >
          <input
            id="grade"
            type="text"
            {...register('grade')}
            placeholder="Eg: 88% / FCD / 7.8"
          />
        </FormDiv>
        <FormDiv idFor="place" label="Place" error={errors?.place?.message}>
          <input
            id="place"
            {...register('place')}
            type="text"
            placeholder="Eg: Bangalore, India"
          />
        </FormDiv>
        <FormDiv
          idFor="description"
          label="Description"
          error={errors?.description?.message}
        >
          <textarea
            id="description"
            type="text"
            {...register('description')}
            placeholder="(Optional) Want to describe something about!"
          />
        </FormDiv>
        <Button disabled={!isDirty || isSubmitting} variant="w100">
          {isSubmitting ? (
            <PulseLoader speedMultiplier={0.7} size={10} color="#bbb" />
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </div>
  )
}

EducationAdd.getLayout = (page) => <ModalLayout>{page}</ModalLayout>
