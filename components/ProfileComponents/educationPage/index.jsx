import Header from '@/components/header'
import s from './educationPage.module.css'
import Link from 'next/link'
import { RiAddFill, RiEditBoxFill } from 'react-icons/ri'
export default function EducationPage() {
  const educationsList = [
    {
      institution: 'Sambhram Institute of Technology',
      place: 'Bangalore, India',
      course: 'BTech Computer Science Engineering',
      startYear: '2018',
      endYear: '2022',
      grade: undefined,
    },
    {
      institution: 'Test University',
      place: undefined,
      course: 'Class 12',
      startYear: '2011',
      endYear: '2020',
      grade: '40%',
    },
  ]
  return (
    <div className={s.educationPage}>
      <Header title="Educations">
        <div>
          <Link href="/add/project">
            <RiAddFill /> Add
          </Link>
          <button>
            <RiEditBoxFill /> Edit
          </button>
        </div>
      </Header>
      <div className={s.educationsList}>
        {educationsList.map((item, i) => (
          <div key={i} className={s.educationCardWrapper}>
            <div className={`${s.educationCard} wrapper`}>
              <h4 className={s.institution}>{item.institution}</h4>
              <p className={s.courseName}>{item.course}</p>

              <p className={s.lightText}>
                {item?.startYear} - {item?.endYear}
                {item?.place ? ` | ${item.place}` : null}
              </p>
              {item?.grade ? (
                <p className={s.lightText}>Grade {item.grade}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
