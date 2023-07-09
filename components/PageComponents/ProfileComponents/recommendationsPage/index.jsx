import Header from '@/components/Shared/header'
import s from './recommendationsPage.module.css'
import { RiEditBoxFill, RiEditLine } from 'react-icons/ri'
import Loader from '@/components/Shared/loaders/loader'
import { useSelector } from 'react-redux'
import {
  selectProfileInfoLoading,
  selectRecommends,
} from '@/redux/features/userProfileSlice'

export default function RecommendationsPage({ type = 'own' }) {
  // Redux States

  const profileInfoLoading = useSelector((state) =>
    selectProfileInfoLoading(state, type)
  )
  const recommendsList = useSelector((state) => selectRecommends(state, type))

  // const recommendsList = [
  //   {
  //     name: 'Mohd Zahid',
  //     headline: 'Full Stack Developer',
  //     date: 'JAN 14, 2003',
  //     info: 'He Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatibus suscipit cumque nesciunt sit inventore ea quidem non voluptatum perferendis quibusdam exercitationem beatae maxime placeat, vero cupiditate eligendi voluptatem architecto eveniet temporibus. Fugit quidem nihil quisquam recusandae praesentium ratione asperiores.',
  //   },
  // ]

  if (profileInfoLoading) {
    return <Loader variant="normal" />
  }

  return (
    <div className="profileSubPage">
      <Header title="Recomendations">
        <button>
          <RiEditLine /> Edit
        </button>
      </Header>
      {recommendsList?.length ? (
        <div className="profileList wrapper">
          {recommendsList.map((recommends, i) => (
            <div key={i} className={s.recommendsCard}>
              <div className={s.userDiv}>
                <div className={s.userImg}></div>
                <div className={s.userInfoDiv}>
                  <h4>{recommends.name}</h4>
                  <p className={s.headline}>{recommends.headline}</p>
                </div>
              </div>
              <p className={s.time}>{recommends.date}</p>
              <p className={s.info}>{recommends.info}</p>
            </div>
          ))}
        </div>
      ) : type === 'own' ? (
        <p className="noData">
          Unlock the power of recommendation. Reach out to others and kindly ask
          for their valuable commendation
        </p>
      ) : (
        <p className="noData">
          Recognition in progress. This user&apos;s profile awaits commendations
          to showcase their excellence
        </p>
      )}
    </div>
  )
}
