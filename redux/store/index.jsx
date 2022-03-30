import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 */
const middleware = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
