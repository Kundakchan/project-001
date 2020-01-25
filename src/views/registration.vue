<template>
  <section class="level is-paddingless">
    <div class="level-item is-paddingless">
      <form class="form box">
        <h1 class="subtitle is-2 login">Регистрация</h1>
        <b-field :type="checkEmail.status" :message="checkEmail.message">
          <b-input placeholder="Email" icon="email" v-model.trim="email"></b-input>
        </b-field>
        <b-field :type="checkPassword.status" :message="checkPassword.message">
          <b-input placeholder="Пароль" type="password" password-reveal v-model.trim="password"></b-input>
        </b-field>
        <b-field :type="checkPasswordConfirm.status" :message="checkPasswordConfirm.message">
          <b-input placeholder="Повторите пароль" type="password" password-reveal v-model.trim="passwordConfirm"></b-input>
        </b-field>
        <p v-if="errorMessage !== null" class="is-size-7 has-text-danger">{{ errorMessage }}</p>
        <b-button v-if="loading" loading type="is-pulled-right">Войти</b-button>
        <b-button v-if="!loading" @click.prevent="submit" type="is-primary is-pulled-right" outlined>Войти</b-button>
      </form>
    </div>
  </section>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
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
    },
    passwordConfirm: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('SIGN_UP', user)
          .then(() => {
            this.$router.push('/')
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
    },
    checkPasswordConfirm () {
      if (!this.$v.passwordConfirm.$model) return { status: '', message: '' }
      if (!this.$v.passwordConfirm.minLength) return { status: 'is-danger', message: 'Пароль должен содержать не менее 6 символов' }
      if (!this.$v.passwordConfirm.sameAsPassword) return { status: 'is-danger', message: 'Пароль должен совподать' }
      if (!this.$v.passwordConfirm.$invalid) return { status: 'is-success', message: '' }
      return ''
    },
    errorMessage () {
      return this.$store.getters.getError
    },
    loading () {
      return this.$store.getters.getProcessing
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
