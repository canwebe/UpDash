import s from './layout.module.css'
import Nav from './nav'

export default function Layout({ children }) {
  return (
    <div className={s.layout}>
      <Nav />
      <main>{children}</main>
    </div>
  )
}
