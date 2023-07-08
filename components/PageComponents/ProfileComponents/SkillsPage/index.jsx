import Header from '@/components/Shared/header'
import s from './skillsPage.module.css'
import { RiAddFill, RiArrowUpSLine, RiEditBoxFill } from 'react-icons/ri'
import Link from 'next/link'

export default function SkillsPage() {
  const skillsList = [
    {
      name: 'html',
      proficiency: 'basic',
    },
    {
      name: 'css',
      proficiency: 'workable',
    },
    {
      name: 'Machine Learning',
      proficiency: 'basic',
    },
    {
      name: 'AI',
      proficiency: 'expert',
    },
    {
      name: 'Salesforce',
      proficiency: 'basic',
    },
    {
      name: 'Public SPeaking',
      proficiency: 'advanced',
    },
    {
      name: 'NextJs',
      proficiency: 'workable',
    },
    {
      name: 'Tabular',
      proficiency: 'basic',
    },
    {
      name: 'ReactJs',
      proficiency: 'expert',
    },
  ]

  return (
    <div className={s.skillsPage}>
      <Header title="Skills">
        <div>
          <Link href="/add/skill">
            <RiAddFill /> Add
          </Link>
          <button>
            <RiEditBoxFill /> Edit
          </button>
        </div>
      </Header>
      <div className={`${s.skillsList} wrapper`}>
        {skillsList.map((skill, i) => (
          <div className={s.skillCard} key={i}>
            <div className={s.upvote}>
              <RiArrowUpSLine />
              {Math.ceil(Math.random() * 100)}
            </div>
            <div>
              <p className={s.name}>{skill.name}</p>
              <p className={s.proficiency}>{skill.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
