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
        <b-field label="Заголовок">
          <b-input class="title" v-model="title"></b-input>
        </b-field>
        <b-field label="Содержимое статьи">
          <b-input type="textarea" v-model="discription"></b-input>
        </b-field>
        <div class="buttons edit__button">
          <b-button>Создать</b-button>
        </div>
      </form>
    </div>
    <div class="edit__footer"></div>
  </div>
</template>

<script>
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
