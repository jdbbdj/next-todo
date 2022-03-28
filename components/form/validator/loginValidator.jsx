import * as Yup from 'yup'
import { fileNameReqex } from '../../../utils/helper'
const loginValidator = Yup.object().shape({
  username: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required'),
  password: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required')
})

export default loginValidator
