import axios from 'axios'
import { APICall } from '../../utils/api'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
import { TASK_READ_ALL } from '../actionTypes/taskActionTypes'

export const fetchTasks = callback => async dispatch => {
  await APICall(
    dispatch,
    axios.get(`${BASE_URL}/task/dump`),
    TASK_READ_ALL,
    callback
  )
}
