import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    userData: {},
    originalNumber: 0
  },
  mutations: {
    'SAVE_TOKEN'(state, payload) {
      this.state.token = payload
    },
    'USER_DATA'(state, payload) {
      this.state.userData = payload
    },
    'CHANGE_NUMBER'(state, payload) {
      this.state.originalNumber = payload
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})

export default store
