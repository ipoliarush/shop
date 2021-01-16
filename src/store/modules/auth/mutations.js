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
  RECOVERY_REQUEST(state) {
    state.recovery = 'loading'
  },
  RECOVERY_ERROR(state) {
    state.recovery = 'error'
  },
  RECOVERY_SUCCESS(state, data) {
    state.status = 'success'
    state.user = data.user
  },

  LOGOUT(state) {
    state.status = ''
    state.token = ''
    state.user = ''
  },
}