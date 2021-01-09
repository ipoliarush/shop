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
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('AUTH_SUCCES', token, user)
          resolve(resp)
        }
        else resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  REGISTER({commit}, user){
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: '/register', 
        data: user, 
        method: 'POST' 
      })
      .then(resp => {
        if(resp.data.success) {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('AUTH_SUCCES', token, user)
          resolve(resp)
        }
        else resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  LOGOUT({commit}){
    return new Promise((resolve, reject) => {
      commit('LOGOUT')
      localStorage.removeItem('token')
      delete Axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}