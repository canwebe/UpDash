import s from './formDiv.module.css'

export default function FormDiv({ label, idFor, error, children }) {
  return (
    <div className={`${s.formDiv} ${error ? s.isError : ''}`}>
      <label className={s.formDiv_label} htmlFor={idFor}>
        {label}
      </label>
      {children}
      {error ? <p className="formErrorText">{error}</p> : null}
    </div>
  )
}
