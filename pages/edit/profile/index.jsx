import ModalLayout from '@/components/layouts/modalLayout'

export default function EditProfile() {
  return (
    <div>
      <h1>Edit Profile</h1>
    </div>
  )
}

EditProfile.getLayout = (page) => (
  <ModalLayout title="Edit Profile">{page}</ModalLayout>
)
