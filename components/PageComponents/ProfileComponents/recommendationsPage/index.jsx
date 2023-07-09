import Header from '@/components/Shared/header'
import s from './recommendationsPage.module.css'
import { RiEditBoxFill, RiEditLine } from 'react-icons/ri'

export default function RecommendationsPage() {
  const recommendsList = [
    {
      name: 'Mohd Zahid',
      headline: 'Full Stack Developer',
      date: 'JAN 14, 2003',
      info: 'He Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatibus suscipit cumque nesciunt sit inventore ea quidem non voluptatum perferendis quibusdam exercitationem beatae maxime placeat, vero cupiditate eligendi voluptatem architecto eveniet temporibus. Fugit quidem nihil quisquam recusandae praesentium ratione asperiores.',
    },
  ]
  return (
    <div className="profileSubPage">
      <Header title="Recomendations">
        <button>
          <RiEditLine /> Edit
        </button>
      </Header>
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
    </div>
  )
}
