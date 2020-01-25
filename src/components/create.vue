<template>
  <div>
    <div class="edit__header">
      <h1 class="subtitle is-5">Создать статью</h1>
      <b-button type="is-primary" class="create__button" @click.prevent="showEdit">
        <b-icon icon="pencil" rounded></b-icon>
      </b-button>
    </div>
    <div class="edit__body">
      <form>
        <b-field label="Заголовок" :type="checkTitle.status" :message="checkTitle.message">
          <b-input class="title" v-model="title"></b-input>
        </b-field>
        <b-field label="Содержимое статьи" :type="checkDiscription.status" :message="checkDiscription.message">
          <b-input type="textarea" v-model="discription"></b-input>
        </b-field>
        <div class="buttons edit__button">
          <b-button @click.prevent="addPost">Создать</b-button>
        </div>
      </form>
    </div>
    <div class="edit__footer"></div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: [
    'options'
  ],
  data () {
    return {
      title: '',
      discription: ''
    }
  },
  methods: {
    showEdit () {
      this.$store.dispatch('SHOWEDIT')
    },
    addPost () {
      if (!this.$v.$invalid) {
        this.$store.dispatch('ADD_POST', {
          title: this.title,
          discription: this.discription,
          author: this.author,
          createDate: new Date().toJSON(),
          updateDate: '',
          like: 0
        }).then(() => {
          this.title = null
          this.discription = null
          this.sucsess()
        })
      } else {
        this.warning()
      }
    },
    warning () {
      this.$buefy.snackbar.open({
        duration: 5000,
        message: 'Для добавления статьи необходимо заполнить все поля!',
        type: 'is-danger',
        position: 'is-top'
      })
    },
    sucsess () {
      this.$buefy.snackbar.open({
        duration: 5000,
        message: 'Вы успешно добавили статью!',
        type: 'is-success',
        position: 'is-top'
      })
    }
  },
  computed: {
    author () {
      return this.$store.getters.getUser
    },
    checkTitle () {
      if (!this.$v.title.required) return { status: 'is-danger', message: 'Поля должно быть заполнено' }
      if (!this.$v.title.$invalid) return { status: 'is-success', message: '' }
      return ''
    },
    checkDiscription () {
      if (!this.$v.discription.required) return { status: 'is-danger', message: 'Поля должно быть заполнено' }
      if (!this.$v.discription.$invalid) return { status: 'is-success', message: '' }
      return ''
    }
  },
  validations: {
    title: {
      required
    },
    discription: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
  .edit__header {
    background-color: #167df0;
    padding: 15px 10px;
    border-radius: 4px 3px 0 0;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: center;
    align-items: center;
    h1 {
      color: #F5FAFE;
      text-transform: uppercase;
      margin: 0;
    }
  }
  .title {
    margin: 0;
  }
  .edit__body {
    color: #115199;
    background-color: #F5FAFE;
    padding: 20px 15px;
    min-height: 100%;
    width: 100%;
  }
  .edit__button {
    display: flex;
    justify-content: flex-end;
  }
  .create__button {
    border-radius: 100%;
  }
</style>
