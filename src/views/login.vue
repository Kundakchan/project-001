<template>
  <section class="level is-paddingless">
    <div class="level-item is-paddingless">
      <form class="form box">
        <h1 class="subtitle is-2 login">Авторизация</h1>
        <b-field :type="checkEmail.status" :message="checkEmail.message">
          <b-input v-model="email" placeholder="Email" icon="email"></b-input>
        </b-field>
        <b-field :type="checkPassword.status" :message="checkPassword.message">
          <b-input v-model="password" placeholder="Пароль" type="password" password-reveal></b-input>
        </b-field>
        <b-button @click.prevent="submit" type="is-primary is-pulled-right" outlined>Войти</b-button>
      </form>
    </div>
  </section>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        console.log({
          email: this.email,
          password: this.password
        })
      }
    }
  },
  computed: {
    checkEmail () {
      if (!this.$v.email.email) return { status: 'is-danger', message: 'Поля email неправильно заполнена' }
      if (!this.$v.email.$invalid) return { status: 'is-success', message: '' }
      return ''
    },
    checkPassword () {
      if (!this.$v.password.minLength) return { status: 'is-danger', message: 'Пароль должен содержать не менее 6 символов' }
      if (!this.$v.password.$invalid) return { status: 'is-success', message: '' }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  min-height: 100%;
}
.form {
  width: 500px;
}
.login {
  margin-bottom: 20px;
}
button {
  margin-top: 10px;
}
</style>
