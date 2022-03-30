import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Container,
  Grid,
  GridItem,
  useToast
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/loginModel'
import loginValidator from '../components/form/validator/loginValidator'
import FormComponent from '../components/form'
import { useRouter } from 'next/router'
import { useState, useMemo, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { fetchTasks } from '../redux/actions/taskAction'
import { useDispatch, useSelector } from 'react-redux'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const TodoApp = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const toast = useToast()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)

  const loginClick = values => {
    if (values.username === 'james' && values.password === 'test') {
      router.push('/todo-app')
    }
  }

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  console.log(BASE_URL)

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: true,
    validationSchema: loginValidator,
    onSubmit: loginClick
  })

  return (
    <>
      <Container maxW="xlg">
        <Grid
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(7, 1fr)"
          gap={6}
        >
          <GridItem w="100%" h="10" />
          <GridItem w="100%" h="10" />
          <GridItem w="100%" h="10" />
          <GridItem w="100%" h="10" />
          <GridItem w="100%" h="10">
            <Button onClick={onOpen}>Create Task</Button>
          </GridItem>
          <GridItem colSpan={5} rowSpan={6}>
            <TodoList />
          </GridItem>
        </Grid>
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
