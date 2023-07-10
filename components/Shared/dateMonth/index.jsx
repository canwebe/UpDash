import Select from 'react-select'
import s from './dateMonth.module.css'

export default function DateMonth() {
  const options = [
    {
      label: 'January',
      value: 'jan',
      label: 'February',
      value: 'feb',
      label: 'March',
      value: 'mar',
    },
  ]

  return (
    <div className={s.dateMonth}>
      <Select options={options} unstyled />
      <input type="text" placeholder="Eg: 2020" />
    </div>
  )
}
