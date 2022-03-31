import FormComponent from '../components/form'
import Section from '../components/section'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/loginModel'
import loginValidator from '../components/form/validator/loginValidator'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'
import { userLogin } from '../redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useToastHook } from '../components/ToastComponent.jsx'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)
  const tokenSelector = useSelector(state => state.userReducer.token)
  const isLoggedInSelector = useSelector(state => state.userReducer.isLoggedin)
  const [isLogged, setIsLogged] = useState(false)
  const [token, setToken] = useState('')
  const [state, newToast] = useToastHook()

  const loginClick = values => {
    dispatch(userLogin(values, newToast))
    setIsLogged(isLoggedInSelector)
    setToken(tokenSelector)
  }

  useEffect(() => {
    setIsLogged(isLoggedInSelector)
    setToken(tokenSelector)
  }, [tokenSelector, isLoggedInSelector])

  useEffect(() => {
    if (isLogged) {
      router.push('/todo-app')
    }
  }, [token, isLogged])

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
