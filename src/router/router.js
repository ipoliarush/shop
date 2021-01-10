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
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/auth/AuthRegister'),
      meta: {
        guest: true
      }
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: () => import('@/components/auth/AuthRecovery'),
      meta: {
        guest: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/components/auth/AuthProfile'),
      meta: {
        auth: true
      }
    }]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    if(localStorage.getItem('token') == null) {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('token') == null) {
      next()
    } else {
      next({ path: '/'})
    }
  } else {
    next()
  }
})

export default router