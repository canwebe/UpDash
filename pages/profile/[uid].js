import SubNav from '@/components/ProfileComponents/subNav'
import s from '@/styles/Profile.module.css'

export default function Profile() {
  return (
    <div className={s.profileContainer}>
      <SubNav />
      <h2>This Is Profile Page</h2>
    </div>
  )
}
