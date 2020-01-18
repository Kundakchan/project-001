<template>
  <b-message type="is-info" class="edit__item">
    <div class="message__header">
      <h4 class="subtitle is-5">{{ title }}</h4>
    </div>
    <div class="message__footer level">
      <span class="level-left is-size-7">{{ dateCreate }}</span>
      <span class="level-right is-size-7">{{ dateUpdate }}</span>
    </div>
  </b-message>
</template>

<script>
export default {
  props: [
    'options'
  ],
  data () {
    return {
      title: this.options.title,
      dateCreate: this.options.dateCreate,
      dateUpdate: this.options.dateUpdate
    }
  }
}
</script>

<style lang="scss" scoped>
.edit__item {
  border: 1px solid transparent;
  transition: border-color .3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 3px rgba(168, 168, 168, 0.616);
  }
  &:active {
    box-shadow: 0px 0px 3px rgba(168, 168, 168, 0.616);
  }
}
.message__footer {
  padding-top: 20px;
}
</style>
