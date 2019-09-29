import groupBy from 'lodash/groupBy'
import req from '@Network'
import types from '../Types'
import { createAction } from 'redux-actions'

export const initContacts = createAction(types.INIT_CONTACTS)

export function fetchContacts() {
  return (dispatch) => {
    return req.get('/contacts.json').then(res => {
      const data = groupBy(res.data, 'header')
      const contacts = []
      for (const key in data) {
        contacts.push({
          title: key,
          data: data[key]
        })
      }
      dispatch(initContacts(contacts))
    })
  }
}
