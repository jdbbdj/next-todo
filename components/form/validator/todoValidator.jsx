import * as Yup from 'yup'
import { fileNameReqex, passWordReqex } from '../../../utils/helper'
const todoValidator = Yup.object().shape({
  tasktitle: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required'),
  description: Yup.string()
    .matches(fileNameReqex, 'Invalid input')
    .required('Field is required'),
  startdate: Yup.date().default(null).required('Field is Required'),
  enddate: Yup.date()
    .default(null)
    .required('Field is Required')
    .min(Yup.ref('startdate'), 'End date should not be less than start date')
})

export default todoValidator
