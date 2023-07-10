import { useMemo } from 'react'
import Select from 'react-select'

import s from './dateMonth.module.css'

export default function DateMonth() {
  const yearsList = useMemo(() => {
    const options = []
    const endYear = new Date().getFullYear() + 10 // Getting 10years from current

    for (let startYear = 2000; startYear <= endYear; startYear++) {
      options.push({ label: startYear.toString(), value: startYear })
    }

    return options
  }, [])

  return (
    <div className={s.dateMonth}>
      <Select
        options={monthsList}
        className={s.monthSelect}
        unstyled
        classNamePrefix="custom-select"
        isClearable
        placeholder="Month"
      />
      <Select
        options={yearsList}
        className={s.yearSelect}
        unstyled
        classNamePrefix="custom-select"
        isClearable
        placeholder="Year"
      />
    </div>
  )
}

const monthsList = [
  { value: 'jan', label: 'January' },
  { value: 'feb', label: 'February' },
  { value: 'mar', label: 'March' },
  { value: 'apr', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'jun', label: 'June' },
  { value: 'jul', label: 'July' },
  { value: 'aug', label: 'August' },
  { value: 'sep', label: 'September' },
  { value: 'oct', label: 'October' },
  { value: 'nov', label: 'November' },
  { value: 'dec', label: 'December' },
]
