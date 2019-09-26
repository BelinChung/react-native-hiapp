import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from './Reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunkMiddleware))
  return store
}
