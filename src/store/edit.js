import firebase from 'firebase/app'
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
    },
    async ADD_POST ({ context }, payload) {
      try {
        await firebase.database().ref('posts/').push(payload)
      } catch (error) {
        throw error
      } finally {
      }
    },
    async UPDATE ({ commit }, payload) {
      try {
        await firebase.database().ref('posts/' + payload.id).update(payload)
      } catch (error) {
        throw error
      } finally {
      }
    }
  },
  getters: {
    getShowEdit: state => state.showEdit
  }
}
