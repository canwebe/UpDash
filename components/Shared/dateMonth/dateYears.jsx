import { useMemo } from 'react'
import Select from 'react-select'
import moment from 'moment'

import s from './dateMonth.module.css'
import { Controller } from 'react-hook-form'
import { RiErrorWarningLine } from 'react-icons/ri'

export default function DateYears({ errorStart, errorEnd, control }) {
  const yearsList = useMemo(() => {
    const options = []
    const currentYear = moment().year()
    const endYear = currentYear + 10 // Getting 10years from current

    for (let startYear = 2000; startYear <= endYear; startYear++) {
      options.push({ label: startYear.toString(), value: startYear })
    }
    return options
  }, [])

  return (
    <div>
      <div className={s.dateYears}>
        <div>
          <label className={s.dateMonth_label}>
            Start Year
            <span className={s.required}>*</span>
          </label>
          <Controller
            name="startYear"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={yearsList}
                className={`${s.yearSelect} ${errorStart ? s.error : ''}`}
                unstyled
                classNamePrefix="custom-select"
                isClearable
                placeholder="Start year"
              />
            )}
          />
        </div>
        <div>
          <label className={s.dateMonth_label}>
            End Year (Expected)
            <span className={s.required}>*</span>
          </label>
          <Controller
            name="endYear"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={yearsList}
                className={`${s.yearSelect} ${errorEnd ? s.error : ''}`}
                unstyled
                classNamePrefix="custom-select"
                isClearable
                placeholder="End year"
              />
            )}
          />
        </div>
      </div>
      {errorStart ? (
        <p className="formErrorText">
          <RiErrorWarningLine /> {errorStart}
        </p>
      ) : null}
      {errorEnd ? (
        <p className="formErrorText">
          <RiErrorWarningLine /> {errorEnd}
        </p>
      ) : null}
    </div>
  )
}
