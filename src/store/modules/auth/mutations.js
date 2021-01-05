export default {
  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  AUTH_SUCCES(state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  AUTH_ERROR(state) {
    state.status = 'error'
  },
  LOGOUT(state) {
    state.status = ''
    state.token = ''
  },
}