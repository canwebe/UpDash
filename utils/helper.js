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
