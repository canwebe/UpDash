// CONST
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10Mb
const SUPPORTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml',
]

export const checkFileSize = (value) => {
  if (!value) return true // Allow empty value (no file selected)
  return value?.size <= MAX_FILE_SIZE
}

export const checkFileType = (value) => {
  if (!value) return true // Allow empty value (no file selected)
  return SUPPORTED_FILE_TYPES.includes(value?.type)
}

export const checkHeadline = (value) => {
  if (value === '' || value === undefined) {
    return true
  }
  return value.length >= 5
}

export const capitilizeText = (value = '') =>
  value.charAt(0).toUpperCase() + value.slice(1)

// Check valid dates for education form
export const checkEduDates = (
  { startMonth, startYear, endMonth, endYear },
  context
) => {
  // Current Dates
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  // When Start Year is Greater Than End Year
  if (startYear?.value > endYear?.value) {
    return context.createError({
      path: 'startYear',
      message: 'Start Year must be less than or equal to End Year',
    })
  }

  // When Start and end year is same but start month is greater than end month
  if (
    startYear?.value === endYear?.value &&
    startMonth?.value > endMonth?.value
  ) {
    return context.createError({
      path: 'startMonth',
      message: 'Start Month must be less than or equal to End Month',
    })
  }

  // In Current Year start month should not greater than current month

  if (startYear?.value === currentYear && startMonth?.value > currentMonth) {
    return context.createError({
      path: 'startMonth',
      message: 'Start date must be less than or equal to current date',
    })
  }

  return true
}
