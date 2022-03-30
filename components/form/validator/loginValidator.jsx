import * as Yup from 'yup'
import { fileNameReqex, passWordReqex } from '../../../utils/helper'
const loginValidator = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Field is required')
    .matches(
      passWordReqex,
      'Must contain a capital letter, a lower case letter, a number, and a special character'
    )
    .min(8, 'Must be minimum of 8 digits')
})

export default loginValidator
