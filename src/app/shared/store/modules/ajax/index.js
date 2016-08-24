import * as types from 'store/constants/mutationTypes'

const state = {
  inProgress: 0
}

const mutations = {
  [types.BEGIN_AJAX_CALL] (state) {
    state.inProgress = state.inProgress + 1
  },
  [types.AJAX_CALL_SUCCESS] (state, tour) {
    state.inProgress = state.inProgress - 1
  },
  [types.AJAX_CALL_ERROR] (state, tour) {
    state.inProgress = state.inProgress - 1
  }
}

export default {
  state,
  mutations
}
