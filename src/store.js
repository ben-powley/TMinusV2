import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    launches: [],
    activeLaunch: []
  },
  getters: {
    getNextLaunches (state) {
      return state.launches.slice(0, 10)
    },
    getActiveLaunch (state) {
      return state.activeLaunch
    }
  },
  mutations: {
    setLaunches (state, payload) {
      state.launches = payload.launches
    },
    setActiveLaunch (state, payload) {
      state.activeLaunch = payload.launch
    }
  },
  actions: {
    setLaunches (context) {
      axios.get('https://launchlibrary.net/1.2/launch?next=99').then(response => {
        context.commit('setLaunches', {
          launches: response.data.launches
        })
      })
    },
    setActiveLaunch (context, launchID) {
      axios.get(`https://launchlibrary.net/1.2/launch/${launchID}`).then(response => {
        context.commit('setActiveLaunch', {
          launch: response.data.launches[0]
        })
      })
    }
  }
})
