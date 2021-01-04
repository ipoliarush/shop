import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Axios from 'axios'
import store from './store'
import Vuelidate from 'vuelidate'

import './assets/styles/_reset.scss'

Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
