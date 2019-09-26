import req from '@Network'
import types from '../Types'
import { createAction } from 'redux-actions'

export const initContacts = createAction(types.INIT_CONTACTS)

export function fetchContacts() {
  return (dispatch) => {
    return req.get('/contacts.json').then(res => {
      const data = res.data
      const indexedHeader = {}
      data.forEach(item => {
        if (!indexedHeader.hasOwnProperty(item.header)) {
          item.isFirstHeader = true
          indexedHeader[item.header] = true
        }
      })
      dispatch(initContacts(data))
    })
  }
}
