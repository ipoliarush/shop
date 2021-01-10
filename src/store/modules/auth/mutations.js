export default {
  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS(state, data) {
    state.status = 'success'
    state.token = data.token
    state.user = data.user
  },
  AUTH_ERROR(state) {
    state.status = 'error'
  },
  LOGOUT(state) {
    state.status = ''
    state.token = ''
    state.user = ''
  },
}