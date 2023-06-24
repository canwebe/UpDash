import Header from '@/components/header'
import s from './recommendationsPage.module.css'

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
    <div className={s.recommendationsPage}>
      <Header title="Recomendations" />
      <div className={s.recommendsList}>
        {recommendsList.map((recommends, i) => (
          <div className={s.recommendsCardWrapper} key={i}>
            <div className={`${s.recommendsCard} wrapper`}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
