export default {
  state: {
    showEdit: false
  },
  mutations: {
    setShowEdit: (state) => {
      state.showEdit = !state.showEdit
    }
  },
  actions: {
    SHOWEDIT: ({ commit }) => {
      commit('setShowEdit')
    }
  },
  getters: {
    getShowEdit: state => state.showEdit
  }
}
