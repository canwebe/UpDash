import Header from '@/components/Shared/header'
import s from './experinecePage.module.css'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'

export default function ExperiencePage() {
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
      <div className="profileList wrapper">
        {experiences.map((experinece, i) => (
          <div className={s.experienceCard} key={i}>
            <h4 className={s.title}>{experinece.title}</h4>
            <p className={s.company_type}>
              <span>{experinece.company}</span>| <span>{experinece.type}</span>
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
    </div>
  )
}
