<template>
  <section class="container posts__section">
    <app-article v-for="(item) in posts" :key="item.id" :options="item"></app-article>
  </section>
</template>

<script>
import appArticel from '@/components/article'
export default {
  components: {
    'app-article': appArticel
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    posts () {
      return this.$store.getters.getPosts
    }
  },
  created () {
    this.$store.dispatch('POSTS')
  }
}
</script>

<style lang="scss" scoped>
.posts__section {
  padding-top: 20px;
}
</style>
