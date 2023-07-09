import Header from '@/components/Shared/header'
import s from './educationPage.module.css'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'
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
    <div className="profileSubPage">
      <Header title="Educations">
        <div>
          <Link href="/add/project">
            <RiAddCircleLine /> Add
          </Link>
          <button>
            <RiEditLine /> Edit
          </button>
        </div>
      </Header>
      <div className="profileList wrapper">
        {educationsList.map((item, i) => (
          <div key={i} className={s.educationCard}>
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
        ))}
      </div>
    </div>
  )
}
