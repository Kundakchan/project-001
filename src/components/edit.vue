<template>
  <div>
    <div class="edit__header">
      <h1 class="subtitle is-5 level-item" >Редактировать статью</h1>
    </div>
    <div class="edit__body">
      <form>
        <b-field label="Заголовок">
          <b-input class="title" v-model="title"></b-input>
        </b-field>
        <b-field label="Содержимое статьи">
          <b-input type="textarea" v-model="discription"></b-input>
        </b-field>
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
  }
}
</script>

<style lang="scss" scoped>
  .edit__header {
    background-color: #167df0;
    padding: 15px 10px;
    border-radius: 4px 3px 0 0;
    h1 {
      color: #F5FAFE;
      text-transform: uppercase;
    }
  }
  .edit__body {
    color: #115199;
    background-color: #F5FAFE;
    padding: 20px 15px;
    min-height: 100%;
    width: 100%;
  }
</style>
