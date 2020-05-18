import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    someValue: true,
  },
  mutations: {
    setBoolean(state, someValue) {
      state.someValue = someValue
    }
  },
  actions: {
  },
  modules: {
  }
})
