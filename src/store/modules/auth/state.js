export default {
  status: '',
  recovery: '',
  token: JSON.parse(localStorage.getItem('token')) || '',
  user: JSON.parse(localStorage.getItem('user')) || {}
}