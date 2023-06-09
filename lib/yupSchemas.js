import * as yup from 'yup'

import { checkFileSize, checkFileType, checkHeadline } from '@/utils/helper'

// Edit Profile Schema

export const editProfileSchema = yup.object({
  displayName: yup
    .string()
    .required('Display Name is required')
    .matches(/^[A-Za-z\s._]+$/, 'Display Name should only contains alphabets')
    .max(30, 'Display Name cannot exceed 30 characters')
    .trim(),
  photo: yup
    .mixed()
    .test('fileSize', 'File size of photo is too large', checkFileSize)
    .test('fileType', 'Unsupported photo file type', checkFileType),

  headline: yup
    .string()
    .test('headline', 'Too short headline', checkHeadline)
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
    facebook: yup.string().url('Please enter your valid facebook url').trim(),
    youtube: yup.string().url('Please enter your valid youtube url').trim(),
    instagram: yup.string().url('Please enter your valid instagram url').trim(),
    twitter: yup.string().url('Please enter your valid twitter url').trim(),
    linkedin: yup.string().url('Please enter your valid linkedin url').trim(),
    github: yup.string().url('Please enter your valid github url').trim(),
  }),
  otherLinks: yup.array().of(
    yup.object().shape(
      {
        name: yup
          .string()
          .when('url', {
            is: (url) => !!url,
            then: () =>
              yup.string().required('Name field is required for this'),
          })
          .trim(),
        url: yup
          .string()
          .url('Please enter a valid URL')
          .when('name', {
            is: (name) => !!name,
            then: () =>
              yup
                .string()
                .url('Please enter a valid URL')
                .required('URL must required'),
          })
          .trim(),
      },
      ['name', 'url']
    )
  ),
})

// ---- Default Values ----
