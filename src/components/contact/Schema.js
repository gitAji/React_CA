import * as yup from 'yup';

export const userSchema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(50, 'Your first name cannot be longer than 50 characters.')
      .required('Please enter your first name'),
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required('Please enter valid email'),
    subject: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(100, 'Your first name cannot be longer than 100 characters.')
      .required('Please enter your subject'),
    body: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(1000, 'Your first name cannot be longer than 100 characters.')
      .required('Please enter your message'),
  })
  .required();