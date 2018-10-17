import Vue from 'vue'
import Vuex from 'vuex'
import slideshow from './modules/slideshow'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    slideshow
  }
})
