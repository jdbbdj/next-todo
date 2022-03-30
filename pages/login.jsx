import FormComponent from '../components/form'
import Section from '../components/section'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/loginModel'
import loginValidator from '../components/form/validator/loginValidator'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'
import { userLogin } from '../redux/actions/userAction'
import { useDispatch } from 'react-redux'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)

  const loginClick = values => {
    dispatch(userLogin(values))
    router.push('/todo-app')
  }

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: loginValidator,
    onSubmit: loginClick
  })

  return (
    <Section>
      <Heading as="h1">Login</Heading>
      <FormComponent isLogin={true} formik={formik} />
    </Section>
  )
}

export default Login
