import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/vuelidata'
import '@/plugins/buefy'
import '@/plugins/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('FIREBASE_INIT')
  },
  render: h => h(App)
}).$mount('#app')
