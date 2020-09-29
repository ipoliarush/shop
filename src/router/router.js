import Vue from 'vue'
import VueRouter from 'vue-router'
import sAuthLogin from '@/components/auth/s-auth-login'
import sAuthLogout from '@/components/auth/s-auth-logout'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: sAuthLogin,
    },
    {
      path: '/logout',
      name: 'logout',
      component: sAuthLogout,
    }]
})

export default router