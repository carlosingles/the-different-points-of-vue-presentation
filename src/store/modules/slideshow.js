import types from '@/store/mutation-types'

export default {
  state: {
    currentSlide: 1,
    slideCount: 10
  },
  mutations: {
    [types.SLIDE_COMPLETED] (state) {
      if (state.currentSlide === state.slideCount) {
        state.currentSlide = 1
      } else {
        state.currentSlide++
      }
    }
  },
  actions: {
    async slideCompleted ({ commit }) {
      commit(types.SLIDE_COMPLETED)
    }
  },
  getters: {
    currentSlide (state) {
      return state.currentSlide
    },
    slideCount (state) {
      return state.slideCount
    }
  }
}
