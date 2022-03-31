import axios from 'axios'
import { APICall } from '../../utils/api'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
import {
  TASK_READ_ALL,
  TASK_DELETE,
  TASK_UPDATE,
  TASK_GENERATE
} from '../actionTypes/taskActionTypes'

export const fetchTasks = callback => async dispatch => {
  await APICall(
    dispatch,
    axios.get(`${BASE_URL}/task/dump`),
    TASK_READ_ALL,
    callback
  )
}

export const deleteTask = (id, callback) => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/task/delete/${id}`),
      TASK_DELETE,
      callback
    )
    dispatch(fetchTasks(callback))
  } catch (err) {
    console.log(err)
  }
}

export const updateTask = (item, callback) => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/task/update/${item.id}`, item),
      TASK_GENERATE,
      callback
    )
    dispatch(fetchTasks(callback))
  } catch (err) {
    console.log(err)
  }
}

export const generateTask = (item, callback) => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/task/create`, item),
      TASK_GENERATE,
      callback
    )
    dispatch(fetchTasks(callback))
  } catch (err) {
    console.log(err)
  }
}
