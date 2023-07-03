import s from './formDiv.module.css'

export default function FormDiv({ label, idFor, children }) {
  return (
    <div className={s.formDiv}>
      <label className={s.formDiv_lablel} htmlFor={idFor}>
        {label}
      </label>
      {children}
    </div>
  )
}
