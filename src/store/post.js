import firebase from 'firebase/app'
export default {
  state: {
    posts: []
  },
  mutations: {
    setPost: (state, payload) => {
      state.posts.push(payload)
    },
    clearPosts: (state) => {
      state.posts = []
    }
  },
  actions: {
    async POSTS ({ commit }) {
      commit('setProcessing', true)
      commit('clearError')
      commit('clearPosts')
      try {
        const posts = firebase.database().ref('posts/')
        posts.on('value', (data) => {
          commit('clearPosts')
          data.forEach(item => {
            const post = item.val()
            post.id = item.key
            commit('setPost', post)
          })
        })
      } catch (error) {
        commit('setError', error.message)
        throw error
      } finally {
        commit('setProcessing', false)
      }
    }
  },
  getters: {
    getPosts: (state) => state.posts,
    checkPosts: (state) => state.posts.length !== 0
  }
}
