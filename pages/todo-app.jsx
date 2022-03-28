import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Container
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/loginModel'
import loginValidator from '../components/form/validator/loginValidator'
import FormComponent from '../components/form'
import { useRouter } from 'next/router'
import { useState } from 'react'

const TodoApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)

  const loginClick = values => {
    if (values.username === 'james' && values.password === 'test') {
      router.push('/todo-app')
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: loginValidator,
    onSubmit: loginClick
  })
  return (
    <>
      <Container>
        <Button onClick={onOpen}>Open Modal</Button>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormComponent isTodo={true} formik={formik} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoApp
