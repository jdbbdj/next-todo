import FormComponent from '../components/form'
import Section from '../components/section'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/loginModel'
import loginValidator from '../components/form/validator/loginValidator'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)

  const loginClick = values => {
    router.push('/')
  }

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: loginValidator,
    onSubmit: loginClick
  })

  return (
    <Section>
      <FormComponent isLogin={true} formik={formik} />
    </Section>
  )
}

export default Login
