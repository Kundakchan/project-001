import Vue from 'vue'
import Vuex from 'vuex'

import edit from '@/store/edit'
import login from '@/store/login'
import registration from '@/store/registration'
import post from '@/store/post'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    edit,
    login,
    registration,
    post
  }
})
