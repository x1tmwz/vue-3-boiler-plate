import axios from 'axios'
import store from '../store/index'
console.log(store)

export default function setup () {
  axios.interceptors.request.use(function (config) {
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })
  axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        store.dispatch('auth/logout')
      }
      if (err.response.status === 404) {
        alert(`${err.config.url} not found`)
        return null
      }
      alert(err.response.data.error)
      return null
    }
  )
}
