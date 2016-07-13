import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import ajax from 'store/modules/ajax'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    ajax
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})

export default store
