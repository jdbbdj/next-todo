import * as Yup from 'yup'
import { fileNameReqex } from '../../../utils/helper'
const registerValidator = Yup.object().shape({
  name: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required'),
  password_confirmation: Yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both password need to be the same'
    )
  })
})

export default registerValidator
