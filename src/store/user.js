import firebase from 'firebase/app'
import firebaseConfig from '@/config/firebase'
export default {
  state: {
    user: null,
    role: null
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload
    },
    setRole: (state, payload) => {
      state.role = payload
    }
  },
  actions: {
    async SIGN_UP ({ commit, getters }, payload) {
      commit('setProcessing', true)
      commit('clearError')
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        commit('setUser', user.user.uid)
        const userInit = await firebase.database().ref('users/').push({
          id: getters.getUser,
          role: 'reader'
        })
        userInit.on('value', (data) => {
          commit('setRole', data.val())
        })
      } catch (error) {
        commit('setError', error.message)
        throw error
      } finally {
        commit('setProcessing', false)
      }
    },
    async SIGN_IN ({ commit }, payload) {
      commit('setProcessing', true)
      commit('clearError')
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        commit('setUser', user.user.uid)
      } catch (error) {
        commit('setError', error.message)
        throw error
      } finally {
        commit('setProcessing', false)
      }
    },
    async LOG_OUT ({ commit }) {
      await firebase.auth().signOut()
      commit('setUser', null)
    },
    async FIREBASE_INIT ({ commit }) {
      await firebase.initializeApp(firebaseConfig)
      await firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user.uid)
        }
      })
    }
  },
  getters: {
    getUser: state => state.user,
    checkUser: state => state.user !== null
  }
}
