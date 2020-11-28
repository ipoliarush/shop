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
    }
  },
  getters: {},
  modules:{},
})