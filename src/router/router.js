import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
      path: '/confirm',
      name: 'confirm',
      component: () => import('@/components/auth/AuthConfirm'),
      meta: {
        confirm: true
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
    if(store.getters['auth/IS_LOGGED_IN']) {
      next()
    } else {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath }
      })
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(store.getters['auth/IS_LOGGED_IN']) {
      next({ path: '/' })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.confirm)) {
    if(store.getters['auth/RECOVERY_STATUS'] == 'success') {
      next()
    } else {
      next({ path: '/' })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  store.dispatch('MOBILE_MENU_CLOSE');
})

export default router