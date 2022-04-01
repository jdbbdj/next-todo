import axios from 'axios'
import { APICall } from '../../utils/api'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT
} from '../actionTypes/userActionTypes'

export const userRegister = (user, callback) => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/auth/register`, user),
      USER_REGISTER,
      callback
    )
  } catch (e) {
    console.log(e)
  }
}

export const userLogin = (user, callback) => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/auth/login`, user),
      USER_LOGIN,
      callback
    )
  } catch (e) {
    console.log(e)
  }
}

export const userLogout = (token, callback) => async dispatch => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/auth/logout`, '', {
        headers: { Authorization: `Bearer ${token}` }
      }),
      USER_LOGOUT,
      callback
    )
  } catch (e) {
    console.log(e)
  }
}
