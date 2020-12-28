import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Vuelidate from 'vuelidate'

import './assets/styles/_reset.scss'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
