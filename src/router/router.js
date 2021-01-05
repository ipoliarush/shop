import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ selector: to.hash })
        }, 500)
      })
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/Home'),
    },
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router