<template>
  <article class="box">
    <div class="article__header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="article__body">
      <p class="">{{ discription }}</p>
    </div>
    <div class="article__footer level">
      <div class="level-left">
        <span class="is-size-7">30 дней назад</span>
      </div>
      <div class="level-right">
        <div class="buttons">
          <b-button class="" v-if="options.role === 'writer'">
            <b-icon icon="pencil" size="is-small" type="is-primary"></b-icon>
            <span>Изменить</span>
          </b-button>
          <b-button class="" v-if="options.role === 'writer'">
            <b-icon icon="delete" size="is-small" type="is-primary"></b-icon>
            <span>Удалить</span>
          </b-button>
          <b-button class="" v-if="options.role === 'reader'">
            <b-icon icon="thumb-up" size="is-small" type="is-primary"></b-icon>
            <span>{{ like }}</span>
          </b-button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'options'
  ],
  data () {
    return {
      title: this.options.title,
      discription: this.options.discription,
      like: this.options.like,
      role: this.options.role
    }
  }
}
</script>

<style lang="scss" scoped>
.article__header {
  padding-bottom: 20px;
}
.article__body {
  padding-bottom: 20px;
}
</style>
