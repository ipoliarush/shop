import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// import './assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faAngleDown, faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faFacebookF, faInstagram, faPhoneAlt, faAngleDown, faSearch, faUser, faHeart, faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
