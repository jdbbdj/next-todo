import axios from 'axios'
import { APICall } from '../../utils/api'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
import { USER_REGISTER, USER_LOGIN } from '../actionTypes/userActionTypes'

export const userRegister = user => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/auth/register`, user),
      USER_REGISTER
    )
  } catch (e) {
    console.log(e)
  }
}

export const userLogin = user => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/auth/login`, user),
      USER_LOGIN
    )
  } catch (e) {
    console.log(e)
  }
}
