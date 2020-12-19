import Axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    producerShow: null,
    goodsShow: null,
    goodsRow: 2,
    goodsScroll: null,
    slidesSale: 2,
    slidesSaleRow: 2,
    hitShow: 2,
    itemsHit: [],
    itemsProducer: [],
  },
  mutations: {
    reverse (state) {
      state.isOpen = !state.isOpen;
    },
    resize (state) {
      let width = document.documentElement.clientWidth;
      if (width < 992) state.isOpen = false;
      
      if (width >= 992) {
        if (width >= 992 && width <= 1200) state.goodsShow = 3;
        else state.goodsShow = 4

        state.producerShow = 6;
        state.slidesSale = 4;
        state.goodsRow = 2;
        state.hitShow = state.slidesSaleRow = state.hitScroll = 1;

      }
      else if (width >= 768) {
        state.producerShow  = 4;
        state.goodsShow = state.goodsRow = state.slidesSale = state.slidesSaleRow = 2;
        state.hitShow = state.hitScroll = 1;
      }
      else {
        state.producerShow = state.hitScroll = 2;
        state.goodsShow = state.hitShow = state.slidesSale = 3;
        state.goodsRow = state.slidesSaleRow = 1;
      }
    },
    SET_ITEMSHIT_TO_STATE: (state, products) => {
      state.itemsHit = products
    },
    SET_PRODUCER: (state, producer) => {
      state.itemsProducer = producer
    }
  },
  getters: {
    ITEMSHIT(state) {
      return state.itemsHit
    },
    ITEMSPRODUCER(state) {
      return state.itemsProducer
    },
    SPRODUCER(state) {
      return state.producerShow
    },
    SGOODS(state) {
      return state.goodsShow
    },
    RGOODS(state) {
      return state.goodsRow
    },
    LHIT(state) {
      return state.hitScroll
    },
    SHIT(state) {
      return state.hitShow
    },
  },
  actions: {
    GET_ITEMSHIT_FROM_API({commit}) {
      return Axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then((products) => {
        commit('SET_ITEMSHIT_TO_STATE', products.data);
      })
    },
    GET_ITEMSPRODUCER_FROM_API({commit}) {
      return Axios('http://localhost:3000/producer', {
        method: "GET"
      })
      .then((producer) => {
        commit('SET_PRODUCER', producer.data);
      })
    },
    SETTINGS_RESIZE({commit}) {
      commit('resize')
    }
  },
  modules:{},
})