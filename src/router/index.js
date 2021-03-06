import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/registration')
  },
  {
    path: '/edit',
    name: 'edit',
    beforeEnter (to, from, next) {
      store.getters.checkUser ? next() : next('/login')
    },
    component: () => import('@/views/edit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
