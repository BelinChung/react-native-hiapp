import { handleActions } from 'redux-actions'
import types from '../Types'

export default handleActions({
  [types.INIT_TIMELINE] (state, action) {
    return {
      ...state,
      timeline: action.payload
    }
  },
  [types.PREPEND_TIMELINE] (state, action) {
    return {
      ...state,
      timeline: [...action.payload, ...state.timeline]
    }
  },
  [types.APPEND_TIMELINE] (state, action) {
    return {
      ...state,
      timeline: [...state.timeline, ...action.payload]
    }
  },
  [types.UPDATE_POST] (state, action) {
    const { mid, key, value } = action.payload
    return {
      ...state,
      timeline: state.timeline.map(
        (item, i) => {
          if (item.id === mid) {
            item[key] = value
            return { ...item }
          } else {
            return item
          }
        }
      )
    }
  }
}, {
  timeline: []
})
