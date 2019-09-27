import req from '@Network'
import types from '../Types'
import { createAction } from 'redux-actions'

export const initTimeline = createAction(types.INIT_TIMELINE)
export const appendTimeline = createAction(types.APPEND_TIMELINE)
export const prependTimeline = createAction(types.PREPEND_TIMELINE)

export function fetchTimeline() {
  return (dispatch) => {
    return req.get('/timeline.json').then(res => {
      const data = res.data
      dispatch(initTimeline(data))
    })
  }
}

export function refreshTimeline() {
  return (dispatch) => {
    return req.get('/refresh_timeline.json').then(res => {
      const data = res.data
      dispatch(prependTimeline(data))
    })
  }
}

export function loadMoreTimeline() {
  return (dispatch) => {
    return req.get('/more_timeline.json').then(res => {
      const data = res.data
      dispatch(appendTimeline(data))
    })
  }
}
