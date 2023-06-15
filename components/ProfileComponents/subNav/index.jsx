import s from './subNav.module.css'

export default function SubNav() {
  const menusList = [
    { name: 'Profile' },
    { name: 'Projects' },
    { name: 'Achivements' },
    { name: 'Skills' },
    { name: 'jHhs shss' },
    { name: 'Education' },
    { name: 'Tricks' },
  ]

  return (
    <div className={s.subNavWrapper}>
      {menusList.map((menu) => (
        <div key={menu.name}>{menu.name}</div>
      ))}
    </div>
  )
}
