export default {
  state: {
    processiong: null,
    error: null
  },
  mutations: {
    setProcessing: (state, payload) => {
      state.processiong = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    clearError: state => {
      state.error = null
    }
  },
  actions: {
    PROCESSING: ({ commit }, payload) => {
      commit('setProcessing', payload)
    },
    ERROR: ({ commit }, payload) => {
      commit('setError', payload)
    },
    CLEAR_ERROR: ({ commit }) => {
      commit('crearError')
    }
  },
  getters: {
    getProcessing: state => state.processiong,
    getError: state => state.error
  }
}
