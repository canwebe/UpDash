import * as yup from 'yup'

// Edit Profile Schema

export const editProfileSchema = yup.object({
  displayName: yup.string().required('Display Name is required'),
  photoURL: yup.string().url(),
  photo: yup.mixed().test('fileSize', 'File size is too large', (value) => {
    if (!value || !value[0]) return true // Allow empty value (no file selected)
    return value[0].size <= MAX_FILE_SIZE
  }),
  headline: yup.string(),
  place: yup.string(),
  bio: yup
    .string()
    .min(100, 'Min 100 characters required')
    .max(300, 'You have exceded the max length 300'),
  resume: yup.string().url('This is not a valid url'),
  socialLinks: yup.object({
    facebook: yup.string().url('Please enter your valid Facebook url'),
    youtube: yup.string().url('Please enter your valid Youtube url'),
    instagram: yup.string().url('Please enter your valid Instagram url'),
    twitter: yup.string().url('Please enter your valid Twitter url'),
    linkedin: yup.string().url('Please enter your valid Linkedin url'),
    github: yup.string().url('Please enter your valid Github url'),
  }),
  otherLinks: yup
    .array()
    .of(
      yup.object({
        name: yup.string().when('url', {
          is: (url) => !!url,
          then: yup.string().required('Name field is required for this'),
        }),
        url: yup.string().url('Please enter a valid url'),
      })
    )
    .max(5, 'Maximum number of links allowed is 5'),
})
