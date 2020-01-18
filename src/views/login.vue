<template>
  <section class="level is-paddingless">
    <div class="level-item is-paddingless">
      <form class="form box">
        <h1 class="subtitle is-2 login">Авторизация</h1>
        <b-field>
          <b-input placeholder="Email" type="email" icon="email"></b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Пароль" type="password" password-reveal></b-input>
        </b-field>
        <b-button type="is-primary is-pulled-right" outlined>Войти</b-button>
      </form>
    </div>
  </section>
</template>

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
