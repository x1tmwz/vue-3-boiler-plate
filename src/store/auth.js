import axios from 'axios'
import paths from '../data/toolsPath.json'
import jwtDecode from 'jwt-decode'

export default {
  namespaced: true,
  state: {
    token: '',
    role: '',
    id: ''
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    setRole (state, payload) {
      state.role = payload
      localStorage.setItem('role', payload)
    },
    setId (state, payload) {
      state.id = payload
      localStorage.setItem('id', payload)
    }

  },
  actions: {
    initStore (state) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      const id = localStorage.getItem('id')
      if (token && role && id) {
        state.commit('setToken', token)
        state.commit('setRole', role)
        state.commit('setId', id)
      }
    },
    async login (state, payload) {
      const result = await axios({
        url: paths.usersLogin,
        method: 'POST',
        headers: {},
        data: { userName: payload.username, password: payload.password }
      })
      if (result && result.status === 200) {
        const decoded = jwtDecode(result.data.token)
        state.commit('setToken', result.data.token)
        state.commit('setRole', decoded.role)
        state.commit('setId', decoded.id)
      }
    },
    logout (state) {
      state.commit('setToken', '')
      state.commit('setRole', '')
      state.commit('setId', '')
    }
  },
  getters: {
    token: state => state.token,
    role: state => state.role,
    id: state => state.id,
    isAuth: state => {
      return !!(state.token)
    }
  }
}
