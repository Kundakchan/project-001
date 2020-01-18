<template>
  <section class="container posts__section">
    <app-article v-for="(item, index) in articles" :key="index" :options="item"></app-article>
  </section>
</template>

<script>
import appArticel from '@/components/article'
export default {
  components: {
    'app-article': appArticel
  },
  data () {
    return {
      articles: [
        {
          title: 'new Article - 0',
          discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur suscipit reiciendis voluptatibus sunt facere ad culpa vel atque dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur suscipit reiciendis voluptatibus sunt facere ad culpa vel atque dignissimos?',
          role: 'reader',
          like: '28'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.posts__section {
  padding-top: 20px;
}
</style>
