import conifg from '@Config'

function _buildQuery(obj) {
  const _ = encodeURIComponent
  return Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
}

class Req {
  constructor() {
    this.baseUrl = conifg.prodBaseUrl
  }

  _httpDone(res) {
    if (!res.err_code) {
      return res
    } else {
      return Promise.reject(res)
    }
  }

  _httpFail(err) {
    return Promise.reject(err)
  }

  fetch({ url, query, data, headers, method = 'GET' }) {
    url = this.baseUrl + url
    if (query) {
      url += `?${_buildQuery(query)}`
    }
    const params = {
      url,
      method,
      credentials: 'same-origin'
    }
    if (data) {
      params.body = JSON.stringify(data)
    }
    if (headers) {
      params.headers = headers
    }
    return fetch(url, params)
      .then(resp => resp.ok ? resp.json().then(this._httpDone) : this._httpFail(resp))
      .catch(err => Promise.reject(err))
  }

  get(url, params = {}) {
    params.url = params.url || url
    return this.fetch(params)
  }

  post(url, params = {}) {
    params.url = params.url || url
    params.method = 'POST'
    return this.fetch(params)
  }
}

export default new Req()
