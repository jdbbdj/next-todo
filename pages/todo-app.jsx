import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Container,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/loginModel'
import loginValidator from '../components/form/validator/loginValidator'
import FormComponent from '../components/form'
import { useRouter } from 'next/router'
import { useState, useMemo, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'

import NotifyComponent from '../components/NotifyComponent'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const TodoApp = () => {
  const router = useRouter()

  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)
  const isLoggedinSelector = useSelector(state => state.userReducer.isLoggedin)

  const [modal, setModal] = useState({
    generate: false,
    deleteReport: false,
    processing: false,
    view: false,
    edit: false,
    modalData: []
  })

  const toggleModal = (id, value) => {
    setModal(prev => ({
      ...prev,
      [id]: value
    }))
  }

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

  const { generate, deleteReport, processing, modalData, edit, view } = modal

  return (
    <>
      {isLoggedinSelector && (
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
                <Button onClick={e => toggleModal('generate', true)}>
                  Create Task
                </Button>
              </GridItem>
              <GridItem colSpan={5} rowSpan={6}>
                <TodoList />
              </GridItem>
            </Grid>
          </Container>

          <Modal isOpen={generate}>
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <GridItem align="right" mr={6} cursor="pointer" p={2}>
                <CloseIcon onClick={e => toggleModal('generate', false)} />
              </GridItem>
              <ModalBody>
                <FormComponent isTodo={true} formik={formik} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
      {!isLoggedinSelector && (
        <NotifyComponent
          isBasic={false}
          isFailed={true}
          message="Token not found, Please log in again"
        />
      )}
    </>
  )
}

export default TodoApp
