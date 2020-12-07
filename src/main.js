import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './assets/styles/_reset.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
