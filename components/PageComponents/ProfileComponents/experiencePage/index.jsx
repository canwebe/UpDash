import Header from '@/components/Shared/header'
import s from './experinecePage.module.css'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'
import { useSelector } from 'react-redux'
import {
  selectExperiences,
  selectProfileInfoLoading,
} from '@/redux/features/userProfileSlice'
import Loader from '@/components/Shared/loaders/loader'

export default function ExperiencePage({ type = 'own' }) {
  // redux STates
  const experienceList = useSelector((state) => selectExperiences(state, type))
  const profileInfoLoading = useSelector((state) =>
    selectProfileInfoLoading(state, type)
  )

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'CanWeBe',
      type: 'Full Time',
      location: 'remote',
      startDate: 'JAN 2021',
      endDate: 'undfiend',
      isWorking: true,
      info: '',
    },
    {
      title: 'Full Stack Developer',
      company: 'Fincomeinezo',
      type: 'internship',
      location: 'remote',
      startDate: 'JAN 2021',
      endDate: 'FEB 2050',
      isWorking: false,
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam impedit officia. Consequuntur facilis recusandae soluta quibusdam aliquam dolore impedit enim eum! Officiis, quos. Eveniet mollitia nemo veritatis aut? Pariatur.',
    },
    {
      title: 'AI Developer',
      company: 'XaneAI',
      type: 'internship',
      location: 'Delhi, India',
      startDate: 'DEC 1996',
      endDate: 'FEB 2000',
      isWorking: false,
    },
  ]

  if (profileInfoLoading) {
    return <Loader variant="normal" />
  }

  return (
    <div className="profileSubPage">
      <Header title="Experience">
        <div>
          <Link href="/add/project">
            <RiAddCircleLine /> Add
          </Link>
          <button>
            <RiEditLine /> Edit
          </button>
        </div>
      </Header>
      {experienceList?.length ? (
        <div className="profileList wrapper">
          {experienceList?.map((experinece, i) => (
            <div className={s.experienceCard} key={i}>
              <h4 className={s.title}>{experinece.title}</h4>
              <p className={s.company_type}>
                <span>{experinece.company}</span>|{' '}
                <span>{experinece.type}</span>
              </p>
              <p className={s.location}>{experinece.location}</p>
              <p className={s.timeSpan}>
                {experinece.startDate} -{' '}
                {experinece.isWorking ? 'Working' : experinece.endDate} | 4yrs
                6mos
              </p>
              {experinece.info ? (
                <p className={s.info}>{experinece.info}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : type === 'own' ? (
        <p className="noData">
          Unleash your story. Click Add button to share your experience.
        </p>
      ) : (
        <p className="noData">
          No experience added yet. Stay tuned for updates!
        </p>
      )}
    </div>
  )
}
