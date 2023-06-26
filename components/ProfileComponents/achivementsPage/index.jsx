import s from './achivementsPage.module.css'
import Header from '@/components/header'
import Link from 'next/link'
import { RiAddFill, RiEditBoxFill } from 'react-icons/ri'
import { RxDot } from 'react-icons/rx'

export default function AchivementsPage() {
  const achivementsList = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    'adipisci, nisi tenetur dolore consequuntur eos minus iure suscipit doloremque ad! .',
    'Optio exercitationem delectus veritatis',
    'Consequatur dolorum fuga, autem facilis adipisci,',
  ]

  return (
    <div className={s.achivementsPage}>
      <Header title="Achivements">
        <div>
          <Link href="/add/project">
            <RiAddFill /> Add
          </Link>
          <button>
            <RiEditBoxFill /> Edit
          </button>
        </div>
      </Header>
      <div className={s.achivementsList}>
        {achivementsList.map((achivement, i) => (
          <div className={s.achivementCardWrapper} key={i}>
            <p className={`${s.achivementCard} wrapper`}>
              <RxDot />
              {achivement}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
