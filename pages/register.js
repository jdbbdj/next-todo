import Section from '../components/section'
import FormComponent from '../components/form'
import { useFormik } from 'formik'
import registerValidator from '../components/form/validator/registerValidator'
import INITIAL_VALUES from '../components/form/models/registerModel'
import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { userRegister } from '../redux/actions/userAction'
import { Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)

  const loginClick = values => {
    dispatch(userRegister(values))
    router.push('/success')
  }

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: registerValidator,
    onSubmit: loginClick
  })

  return (
    <Section>
      <Heading as="h1">Register</Heading>
      <FormComponent isRegister={true} formik={formik} />
    </Section>
  )
}

export default Register
