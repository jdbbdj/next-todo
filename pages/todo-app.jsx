import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Container,
  Grid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import INITIAL_VALUES from '../components/form/models/todoModel'
import todoValidator from '../components/form/validator/todoValidator'
import FormComponent from '../components/form'
import { useRouter } from 'next/router'
import { useState, useMemo, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useToastHook } from '../components/ToastComponent.jsx'
import NotifyComponent from '../components/NotifyComponent'
import {
  deleteTask,
  updateTask,
  generateTask
} from '../redux/actions/taskAction'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const TodoApp = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [state, newToast] = useToastHook()
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES)
  const isLoggedinSelector = useSelector(state => state.userReducer.isLoggedin)

  const [modal, setModal] = useState({
    generate: false,
    deleteReport: false,
    processing: false,
    view: false,
    edit: false,
    modalData: {}
  })
  const { generate, deleteReport, processing, modalData, edit, view } = modal

  const toggleModal = (id, value) => {
    setModal(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const loginClick = values => {
    let arr
    values['id'] = modalData.id

    if (values.id == null || values.id == 'undefined') {
      dispatch(generateTask(values, newToast))
      toggleModal('generate', false)
      toggleModal('deleteReport', false)
      toggleModal('view', false)
      toggleModal('modalData', {})
    } else {
      dispatch(updateTask(values, newToast))
      toggleModal('generate', false)
      toggleModal('deleteReport', false)
      toggleModal('view', false)
      toggleModal('modalData', {})
    }
  }

  const formik = useFormik({
    initialValues: modalData ? modalData : initialValues,
    validateOnChange: true,
    validationSchema: todoValidator,
    onSubmit: loginClick
  })

  const { resetForm } = formik

  const handleCloseModal = () => {
    toggleModal('generate', false)
    toggleModal('deleteReport', false)
    toggleModal('view', false)
    toggleModal('modalData', {})
    resetForm()
  }

  const handleDeleteTask = id => {
    dispatch(deleteTask(id, newToast))
    toggleModal('generate', false)
    toggleModal('deleteReport', false)
    toggleModal('view', false)
    resetForm()
  }

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
                <TodoList toggleModal={toggleModal} modal={modal} />
              </GridItem>
            </Grid>
          </Container>

          <Modal isOpen={generate}>
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <GridItem align="right" mr={6} cursor="pointer" p={2}>
                <CloseIcon onClick={handleCloseModal} />
              </GridItem>
              <ModalBody>
                <FormComponent isTodo={true} formik={formik} />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal isOpen={view}>
            <ModalContent>
              <ModalHeader>View Task</ModalHeader>
              <GridItem align="right" mr={6} cursor="pointer" p={2}>
                <CloseIcon onClick={handleCloseModal} />
              </GridItem>
              <ModalBody>
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  templateRows="repeat(8, 1fr)"
                >
                  <GridItem colSpan={1} rowSpan={2}>
                    Task Name
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={2}>
                    {modalData.tasktitle}
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Task Name
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Description
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    {modalData.description}
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Start Date
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    {modalData.startdate}
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Target End Date
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    {modalData.enddate}
                  </GridItem>
                </Grid>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal isOpen={deleteReport}>
            <ModalContent>
              <ModalHeader>Delete this Task?</ModalHeader>
              <GridItem align="right" mr={6} cursor="pointer" p={2}>
                <CloseIcon onClick={handleCloseModal} />
              </GridItem>
              <ModalBody>
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  templateRows="repeat(9, 1fr)"
                >
                  <GridItem colSpan={1} rowSpan={2}>
                    Task Name
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={2}>
                    {modalData.tasktitle}
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Task Name
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Description
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    {modalData.description}
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Start Date
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    {modalData.startdate}
                    1997-01-02
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={2}>
                    Target End Date
                  </GridItem>
                  <GridItem colSpan={3} rowSpan={2}>
                    {modalData.enddate}
                    1997-01-02
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1} align="center">
                    <Button>Cancel</Button>
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1} align="center">
                    <Button
                      bg={useColorModeValue('black', 'white')}
                      color={useColorModeValue('white', 'black')}
                      onClick={e => handleDeleteTask(modalData.id)}
                    >
                      Delete
                    </Button>
                  </GridItem>
                </Grid>
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
