import { get } from 'lodash'
export const TYPE_START = '_START'
export const TYPE_SUCCESS = '_SUCCESS'
export const TYPE_FAIL = '_ERROR'

export const getError = error => {
  const message = get(error, 'response.data.message')

  const status = get(error, 'response.status')

  return [message, status]
}

export const APICall = async (dispatch, endpoint, action, callback) => {
  let response

  dispatch({ type: action.concat(TYPE_START) })

  try {
    response = await endpoint
    dispatch({
      type: action.concat(TYPE_SUCCESS),
      payload: response.data
    })
    callback({ message: response.data.message, status: 'success' })
  } catch (err) {
    dispatch({ type: action.concat(TYPE_FAIL) })
    callback({ message: getError(err)[0], status: 'error' })
  }
}
