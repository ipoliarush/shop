import Axios from 'axios'

export default {
  login({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      Axios({url: 'http://localhost:3030/signup', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        Axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  SIGNUP({commit}, user){
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      Axios({url: 'http://localhost:3030/register', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        Axios.defaults.headers.common['Authorization'] = token
        commit('AUTH_SUCCES', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete Axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}