import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  state: {
    isOpen: false,
  },
  mutations: {
    reverse (state) {
      state.isOpen = !state.isOpen;
    },
    resize (state) {
      state.isOpen = document.documentElement.clientWidth < 992 ? false : state.isOpen;
    }
  },
  getters: {},
  modules:{},
})