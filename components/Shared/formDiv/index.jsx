import { RiErrorWarningLine } from 'react-icons/ri'
import s from './formDiv.module.css'

export default function FormDiv({ label, idFor, error, required, children }) {
  return (
    <div className={`${s.formDiv} ${error ? s.isError : ''}`}>
      <label className={s.formDiv_label} htmlFor={idFor}>
        {label} {required ? <span className={s.required}>*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="formErrorText">
          <RiErrorWarningLine /> {error}
        </p>
      ) : null}
    </div>
  )
}
