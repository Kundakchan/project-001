<template>
  <b-navbar class="is-primary">
    <template slot="start">
      <b-navbar-item v-for="(item, index) in links" :key="index" tag="router-link" :to="item.path">{{ item.name }}</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item v-if="!checkUser" tag="router-link" :to="logIn.path">{{ logIn.name }}</b-navbar-item>
      <b-navbar-item v-if="!checkUser" tag="router-link" :to="registration.path">{{ registration.name }}</b-navbar-item>
      <b-navbar-item v-if="checkUser" @click.prevent="onLogOut">{{ logOut }}</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      logOut: 'выйти',
      logIn: {
        name: 'Авторизация',
        path: '/login'
      },
      registration: {
        name: 'Регистрация',
        path: '/registration'
      },
      links: [
        {
          name: 'Статьи',
          path: '/'
        },
        {
          name: 'Редактор',
          path: '/edit'
        }
      ]
    }
  },
  methods: {
    onLogOut () {
      this.$store.dispatch('LOG_OUT')
    }
  },
  computed: {
    checkUser () {
      return this.$store.getters.checkUser
    }
  }
}
</script>
