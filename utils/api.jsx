export const TYPE_START = '_START'
export const TYPE_SUCCESS = '_SUCCESS'
export const TYPE_FAIL = '_ERROR'

export const APICall = async (dispatch, endpoint, action) => {
  let response

  dispatch({ type: action.concat(TYPE_START) })

  try {
    response = await endpoint
    dispatch({
      type: action.concat(TYPE_SUCCESS),
      payload: response.data
    })
  } catch (err) {
    dispatch({ type: action.concat(TYPE_FAIL) })
  }
}
