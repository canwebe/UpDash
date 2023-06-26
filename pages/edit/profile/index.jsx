import ModalLayout from '@/components/layouts/modalLayout'
import s from '@/styles/EditProfile.module.css'

export default function EditProfile() {
  return (
    <div className={s.editProfileBody}>
      <form className={`${s.editProfileForm} wrapper`}>
        <h1>Edit Profile</h1>
        <input type="text" placeholder="Golam Rabbani" />
      </form>
    </div>
  )
}

EditProfile.getLayout = (page) => (
  <ModalLayout title="Edit Profile">{page}</ModalLayout>
)
