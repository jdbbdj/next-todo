const initialState = {
  user: '',
  email: '',
  token: '',
  data: [],
  message: '',
  success: false,
  loading: false,
  fail: false,
  isLoggedin: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REGISTER_ERROR':
      return {
        ...state,
        success: false,
        loading: false,
        fail: true
      }
    case 'USER_REGISTER_LOADING':
      return { ...state, success: false, loading: true, fail: false }
    case 'USER_REGISTER_SUCCESS':
      return {
        ...state,
        success: false,
        loading: true,
        fail: false,
        message: action.payload.message
      }
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        success: false,
        loading: false,
        fail: true
      }
    case 'USER_LOGIN_LOADING':
      return { ...state, success: false, loading: true, fail: false }
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        success: false,
        loading: true,
        fail: false,
        token: action.payload.token.original.access_token,
        user: action.payload.token.original.user.name,
        email: action.payload.token.original.user.email,
        isLoggedin: true
      }
    default: // need this for default case
      return state
  }
}

export default userReducer
