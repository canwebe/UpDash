import { ClipLoader } from 'react-spinners'
import s from './loaders.module.css'

export default function Loader({ variant, text }) {
  return (
    <div className={`${s.loader} ${variant}`}>
      <div className={s.loader_content}>
        <ClipLoader size={50} color="#2b3d50" />
        {text ? <p>{text}</p> : null}
      </div>
    </div>
  )
}
