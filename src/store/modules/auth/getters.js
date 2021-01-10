export default {
  IS_LOGGED_IN: state => !!state.token,
  authStatus: state => state.status,
  USER: state => state.user
}