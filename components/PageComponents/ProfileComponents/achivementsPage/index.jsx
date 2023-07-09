import Loader from '@/components/Shared/loaders/loader'
import s from './achivementsPage.module.css'
import Header from '@/components/Shared/header'
import Link from 'next/link'
import {
  RiAddCircleLine,
  RiAddFill,
  RiEditBoxFill,
  RiEditLine,
} from 'react-icons/ri'
import { RxDot } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import {
  selectAchievements,
  selectProfileInfoLoading,
} from '@/redux/features/userProfileSlice'

export default function AchivementsPage({ type = 'own' }) {
  // Redux States
  const profileInfoLoading = useSelector((state) =>
    selectProfileInfoLoading(state, type)
  )
  const achievementsList = useSelector((state) =>
    selectAchievements(state, type)
  )

  // const achivementsList = [
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //   'adipisci, nisi tenetur dolore consequuntur eos minus iure suscipit doloremque ad! .',
  //   'Optio exercitationem delectus veritatis',
  //   'Consequatur dolorum fuga, autem facilis adipisci,',
  // ]

  if (profileInfoLoading) {
    return <Loader variant="normal" />
  }

  return (
    <div className="profileSubPage">
      <Header title="Achivements">
        <div>
          <Link href="/add/project">
            <RiAddCircleLine /> Add
          </Link>
          <button>
            <RiEditLine /> Edit
          </button>
        </div>
      </Header>
      {achievementsList?.length ? (
        <div className={`${s.achivementsList} wrapper`}>
          {achievementsList?.map((achievement, i) => (
            <p className={s.achivementCard} key={i}>
              <RxDot />
              {achievement}
            </p>
          ))}
        </div>
      ) : type === 'own' ? (
        <p className="noData">
          Elevate your status. Click Add to showcase your achievements.
        </p>
      ) : (
        <p className="noData">
          Achievement awaits. This user&apos;s story is still unfolding
        </p>
      )}
    </div>
  )
}
