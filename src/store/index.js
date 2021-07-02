import Vue from 'vue'
import Vuex from 'vuex'


Vue.use (Vuex)


export default new Vuex.Store({
  state: {
    loginStatus: false
  },
  mutations: {
    toggleLoginStatusTrue (state) {
      state.loginStatus = true
    },
    toggleLoginStatusFalse (state) {
        state.loginStatus = false
    }
  },
  getters: {
      getLoginStatus (state) {return state.loginStatus} 
  }
})