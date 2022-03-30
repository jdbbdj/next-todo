const initialState = {
  tasks: [],
  task: [],
  success: false,
  loading: false,
  fail: false
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TASK_READ_ALL_ERROR':
      return {
        ...state,
        success: false,
        loading: false,
        fail: true
      }
    case 'TASK_READ_ALL_LOADING':
      return { ...state, success: false, loading: true, fail: false }
    case 'TASK_READ_ALL_SUCCESS':
      return {
        ...state,
        success: false,
        loading: true,
        fail: false,
        tasks: action.payload
      }
    default: // need this for default case
      return state
  }
}

export default taskReducer
