import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canvasnum: 3,
    circlenum: 8,
    startdraw: true
  },
  // getters: {
  //   startdraw: state => {
  //     return state.startdraw
  //   }
  // },
  mutations: {
    changeState: (state, nums) => {
      state.canvasnum = parseInt(nums.canvas)
      state.circlenum = parseInt(nums.circle)
    },
    drawToggle: (state, startdraw) => {
      state.startdraw = startdraw
    }
  },
  actions: {
    changeState: (context, nums) => {
      context.commit('changeState', nums)
    },
    drawToggle: (context, startdraw) => {
      context.commit('drawToggle', startdraw)
    }
  }
})
