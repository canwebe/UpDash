import { useMemo } from 'react'
import Select from 'react-select'
import moment from 'moment'

import s from './dateMonth.module.css'
import { Controller } from 'react-hook-form'
import { RiErrorWarningLine } from 'react-icons/ri'

export default function DateMonth({ errorMonth, errorYear, control, name }) {
  const monthsList = useMemo(() => {
    const options = []
    for (let i = 0; i <= 12; i++) {
      options.push({
        label: moment().month(i).format('MMMM'),
        value: i,
      })
    }
    return options
  }, [])

  const yearsList = useMemo(() => {
    const options = []
    const currentYear = moment().year()
    const endYear = currentYear + 10 // Getting 10years from current

    for (
      let startYear = 2000;
      name === 'start' ? startYear <= currentYear : startYear <= endYear;
      startYear++
    ) {
      options.push({ label: startYear.toString(), value: startYear })
    }
    return options
  }, [])

  return (
    <div>
      <label className={s.dateMonth_label}>
        {name === 'start' ? 'Start Date' : 'End Date (Expected)'}{' '}
        <span className={s.required}>*</span>
      </label>
      <div className={s.dateMonth}>
        <Controller
          name={`${name}Month`}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={monthsList}
              className={`${s.monthSelect} ${errorMonth ? s.error : ''}`}
              unstyled
              classNamePrefix="custom-select"
              isClearable
              placeholder="Month"
            />
          )}
        />
        <Controller
          name={`${name}Year`}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={yearsList}
              className={`${s.yearSelect} ${errorYear ? s.error : ''}`}
              unstyled
              classNamePrefix="custom-select"
              isClearable
              placeholder="Year"
            />
          )}
        />
      </div>
      {errorMonth ? (
        <p className="formErrorText">
          {' '}
          <RiErrorWarningLine /> {errorMonth}
        </p>
      ) : null}
      {errorYear ? (
        <p className="formErrorText">
          <RiErrorWarningLine /> {errorYear}
        </p>
      ) : null}
    </div>
  )
}
