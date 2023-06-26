import s from './header.module.css'

export default function Header({ title, children }) {
  return (
    <div className={`${s.headerWrapper} wrapper`}>
      <h3 className={s.header}>{title}</h3>
      {children}
    </div>
  )
}
