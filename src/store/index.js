import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  state: {
    isOpen: false,
    slidesProducer: 2,
    slidesGoods: 3,
    slidesHit: 3,
  },
  mutations: {
    reverse (state) {
      state.isOpen = !state.isOpen;
    },
    resize (state) {
      let width = document.documentElement.clientWidth;
      if (width < 992) state.isOpen = false;
      
      if (width >= 992) {
        state.slidesProducer = 6;
        state.slidesGoods = 10;
        state.slidesHit = 1;
      }
      else if (width >= 768) {
        state.slidesProducer = 4;
        state.slidesGoods = 4;
        state.slidesHit = 1;
      }
      else {
        state.slidesProducer = 2;
        state.slidesGoods = state.slidesHit = 3;
      }
    }
  },
  getters: {},
  modules:{},
})