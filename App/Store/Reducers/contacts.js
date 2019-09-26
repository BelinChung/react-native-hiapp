import { handleActions } from 'redux-actions'
import types from '../Types'

export default handleActions({
  [types.INIT_CONTACTS] (state, action) {
    return {
      ...state,
      contacts: action.payload
    }
  }
}, {
  contacts: []
})
