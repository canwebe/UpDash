import * as yup from 'yup'

// Edit Profile Schema

export const editProfileSchema = yup.object({
  displayName: yup.string().required('Display Name is required').trim(),
  photoURL: yup.string().url().trim(),
  photo: yup.mixed().test('fileSize', 'File size is too large', (value) => {
    if (!value || !value[0]) return true // Allow empty value (no file selected)
    return value[0].size <= MAX_FILE_SIZE
  }),
  headline: yup
    .string()
    .test('headline', 'Min 10 characters required', (value) => {
      if (value === '' || value === undefined) {
        return true
      }
      return value.length >= 10
    })
    .trim()
    .default(''),
  place: yup.string().trim(),
  bio: yup
    .string()
    .min(60, 'Min 60 characters required')
    .max(300, 'You have exceded the max length 300')
    .trim(),
  resume: yup.string().url('This is not a valid url').trim(),
  socialLinks: yup.object({
    facebook: yup.string().url('Please enter your valid Facebook url').trim(),
    youtube: yup.string().url('Please enter your valid Youtube url').trim(),
    instagram: yup.string().url('Please enter your valid Instagram url').trim(),
    twitter: yup.string().url('Please enter your valid Twitter url').trim(),
    linkedin: yup.string().url('Please enter your valid Linkedin url').trim(),
    github: yup.string().url('Please enter your valid Github url').trim(),
  }),
  otherLinks: yup
    .array()
    .of(
      yup.object({
        name: yup.string().when('url', {
          is: (url) => !!url,
          then: () => yup.string().required('Name field is required for this'),
        }),
        url: yup.string().url('Please enter a valid URL').trim(),
      })
    )
    .max(5, 'Maximum number of links allowed is 5'),
})
