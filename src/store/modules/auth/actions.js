import axios from 'axios'

export default {
  LOGIN({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: '/login', 
        data: user, 
        method: 'POST' 
      })
      .then(resp => {
        if(resp.data.success) {

          const data = {
            token: resp.data.token,
            user: resp.data.user
          }

          localStorage.setItem('token', JSON.stringify(data.token))
          localStorage.setItem('user', JSON.stringify(data.user))

          axios.defaults.headers.common['Authorization'] = data.token
          commit('AUTH_SUCCESS', data)
          resolve(resp)
        }
        else resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        reject(err)
      })
    })
  },

  REGISTER({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: '/register', 
        data: user, 
        method: 'POST' 
      })
      .then(resp => {
        if(resp.data.success) {

          const data = {
            token: resp.data.token,
            user: resp.data.user
          }

          localStorage.setItem('token', JSON.stringify(data.token))
          localStorage.setItem('user', JSON.stringify(data.user))

          axios.defaults.headers.common['Authorization'] = data.token
          commit('AUTH_SUCCESS', data)
          resolve(resp)
        } else resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        reject(err)
      })
    })
  },

  LOGOUT({commit}) {
    return new Promise((resolve) => {
      commit('LOGOUT')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}