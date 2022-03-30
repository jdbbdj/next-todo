import * as Yup from 'yup'
import { fileNameReqex, passWordReqex } from '../../../utils/helper'
const registerValidator = Yup.object().shape({
  name: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()

    .required('Field is required')
    .matches(
      passWordReqex,
      'Must contain a capital letter, a lower case letter, a number, and a special character'
    )
    .min(8, 'Must be minimum of 8 digits'),
  password_confirmation: Yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both password need to be the same'
    )
  })
})

export default registerValidator
