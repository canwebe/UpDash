import ModalLayout from '@/components/Layouts/modalLayout'
import Button from '@/components/Shared/button'
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
        <FormDiv idFor="instituion" label="Institution Name" required>
          <input id="instituion" type="text" placeholder="Eg: SaIT Bangalore" />
        </FormDiv>
        <FormDiv idFor="program" label="Degree / Program" required>
          <input
            id="program"
            type="text"
            placeholder="Eg: B.E Computer Science Engineering"
          />
        </FormDiv>
        <FormDiv
          idFor="start"
          label="Start Date"
          error={'ghghgggggggggggggggg'}
        >
          <DateMonth />
        </FormDiv>
        <FormDiv idFor="start" label="End Date (Expected)">
          <DateMonth />
        </FormDiv>
        <FormDiv idFor="grade" label="GPA / Grade">
          <input id="grade" type="text" placeholder="Eg: 88% / FCD / 7.8" />
        </FormDiv>
        <FormDiv idFor="place" label="Place">
          <input id="place" type="text" placeholder="Eg: Bangalore, India" />
        </FormDiv>
        <FormDiv idFor="description" label="Description">
          <textarea
            id="description"
            type="text"
            placeholder="(Optional) Want to describe something about!"
          />
        </FormDiv>
        <Button variant="w100">Submit</Button>
      </form>
    </div>
  )
}

EducationForm.getLayout = (page) => <ModalLayout>{page}</ModalLayout>
