<template>
  <div>
    <div class="edit__header">
      <h1 class="subtitle is-5">Редактировать статью</h1>
      <b-button type="is-primary" class="create__button" @click.prevent="showCreate">
        <b-icon icon="plus" rounded></b-icon>
      </b-button>
    </div>
    <div class="edit__body">
      <form>
        <b-field label="Заголовок">
          <b-input class="title" v-model="post.title"></b-input>
        </b-field>
        <b-field label="Содержимое статьи">
          <b-input type="textarea" v-model="post.discription"></b-input>
        </b-field>
        <div class="buttons edit__button">
          <b-button @click="setUpdate">Применить</b-button>
        </div>
      </form>
    </div>
    <div class="edit__footer"></div>
    <p>компонент</p>
    <pre>{{ post }}</pre>
    <p>options</p>
    <pre>{{ update }}</pre>
  </div>
</template>

<script>
export default {
  props: [
    'options'
  ],
  data () {
    return {
      post: {}
    }
  },
  methods: {
    showCreate () {
      this.$store.dispatch('SHOWEDIT')
    },
    setUpdate () {
      let post = this.post
      post.updateDate = new Date().toJSON()
      this.$store.dispatch('UPDATE', post)
    }
  },
  computed: {
    update () {
      return this.options
    }
  },
  watch: {
    update (val) {
      this.post = {
        id: val.id,
        author: val.author,
        title: val.title,
        discription: val.discription,
        createDate: val.createDate,
        updateDate: val.updateDate,
        like: val.like
      }
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
