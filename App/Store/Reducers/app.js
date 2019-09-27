import { handleActions } from 'redux-actions'
import types from '../Types'

export default handleActions({
  [types.INIT_USER_INFO] (state, action) {
    return {
      ...state,
      user: action.payload
    }
  },
  [types.SET_MODAL_VISIBLE_STATUS] (state, action) {
    const { name, status } = action.payload
    const { modalVisible } = state
    modalVisible[name] = status
    return {
      ...state,
      modalVisible: {
        ...modalVisible
      }
    }
  },
  [types.SET_MODAL_PARAMS] (state, action) {
    return {
      ...state,
      modalParams: action.payload
    }
  }
}, {
  user: {},
  modalVisible: {
    publisher: false,
    webview: false
  },
  modalParams: {}
})
