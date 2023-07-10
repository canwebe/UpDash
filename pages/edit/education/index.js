import ModalLayout from '@/components/Layouts/modalLayout'
import DateMonth from '@/components/Shared/dateMonth'
import FormDiv from '@/components/Shared/formDiv'

export default function EducationForm() {
  const onSubmit = (e) => {
    e.preventDefault()
    log
  }
  return (
    <div className="editPage">
      <form className="wrapper">
        <FormDiv idFor="instituion" label="Institution Name">
          <input id="instituion" type="text" placeholder="Name of School" />
        </FormDiv>
        <FormDiv idFor="start" label="Start Date">
          <DateMonth />
        </FormDiv>
        <button>Submit</button>
      </form>
    </div>
  )
}

EducationForm.getLayout = (page) => <ModalLayout>{page}</ModalLayout>
