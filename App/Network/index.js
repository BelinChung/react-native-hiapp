const API_PATH = 'https://raw.githubusercontent.com/BelinChung/HiApp/master/src/api/'

function param(obj = {}) {
    let _ = encodeURIComponent
    return Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
}

export default {
    ajax({url, query, data, method = 'GET'}) {
        url = API_PATH + url + '?' + param(query)

        let promise = this._fetch(url, data, method)
        let success = this._networkDone.bind(this)
        let failure = this._networkFail.bind(this)

        return promise.then(resp => resp.ok ? resp.json().then(success) : failure(resp))
    },
    _networkDone(res) {
        if (!res.err_code) {
            return res
        } else {
            return Promise.reject(res)
        }
    },
    _networkFail(...args) {
        return Promise.reject(null)
    },
    _fetch(url, data, method) {
        return fetch(url, {
            body: JSON.stringify(data),
            method,
            credentials: 'same-origin'
        })
    }
}
