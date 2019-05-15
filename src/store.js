import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    updateHeroAttr (state, payload) {
      console.log('updateHeroAttr', payload)
    }
  },
  actions: {}
})
