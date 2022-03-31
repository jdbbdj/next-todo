import axios from 'axios'
import { APICall } from '../../utils/api'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
import { TASK_READ_ALL, TASK_DELETE } from '../actionTypes/taskActionTypes'

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
