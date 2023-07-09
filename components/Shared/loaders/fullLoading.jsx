import { HashLoader } from 'react-spinners'
import s from './loaders.module.css'

export default function FullLoading() {
  return (
    <div className={s.body}>
      <div className={s.content}>
        <HashLoader color="#2b3d50" />
        <h2>UpDASH</h2>
        <p>Things are getting ready</p>
      </div>
    </div>
  )
}
