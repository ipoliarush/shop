import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/auth/AuthLogin'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/auth/AuthRegister'),
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: () => import('@/components/auth/AuthRecovery'),
    }]
})

export default router