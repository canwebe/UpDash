import Header from '@/components/Shared/header'
import s from './educationPage.module.css'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'
import Loader from '@/components/Shared/loaders/loader'
import { useSelector } from 'react-redux'
import {
  selectEducations,
  selectProfileInfoLoading,
} from '@/redux/features/userProfileSlice'
export default function EducationPage({ type }) {
  // Redux States
  const profileInfoLoading = useSelector((state) =>
    selectProfileInfoLoading(state, type)
  )
  const educationsList = useSelector((state) => selectEducations(state, type))

  // const educationsList = [
  //   {
  //     institution: 'Sambhram Institute of Technology',
  //     place: 'Bangalore, India',
  //     course: 'BTech Computer Science Engineering',
  //     startYear: '2018',
  //     endYear: '2022',
  //     grade: undefined,
  //   },
  //   {
  //     institution: 'Test University',
  //     place: undefined,
  //     course: 'Class 12',
  //     startYear: '2011',
  //     endYear: '2020',
  //     grade: '40%',
  //   },
  // ]

  if (profileInfoLoading) {
    return <Loader variant="normal" />
  }

  return (
    <div className="profileSubPage">
      <Header title="Educations">
        <div>
          <Link href="/edit/education">
            <RiAddCircleLine /> Add
          </Link>
          <button>
            <RiEditLine /> Edit
          </button>
        </div>
      </Header>
      {educationsList?.length ? (
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
      ) : type === 'own' ? (
        <p className="noData">
          Expand your academic journey. Add your education details to enrich
          your profile.
        </p>
      ) : (
        <p className="noData">
          Education details yet to be discovered. This user&apos;s academic
          journey awaits their personal touch.
        </p>
      )}
    </div>
  )
}
