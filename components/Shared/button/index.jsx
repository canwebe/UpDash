import s from './button.module.css'

export default function Button({ variant = '', children, ...otherProps }) {
  return (
    <button {...otherProps} className={`${s.button} ${variant}`}>
      {children}
    </button>
  )
}
