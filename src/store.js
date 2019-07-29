import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    profile: {}
  },

  mutations: {
    setProfile (state, profileData) {
      state.profile = profileData;
    }
  }

})