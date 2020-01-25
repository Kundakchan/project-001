<template>
  <section class="section edit">
    <ul class="article-list">
      <li class="article__item" v-for="(item, index) in postsMin" :key="index">
        <article-item @click.native="pushEditData(item)" :options="item"></article-item>
      </li>
    </ul>
    <div class="article-edit">
      <edit v-if="!show" :options="editData"></edit>
      <create v-if="show"></create>
    </div>
  </section>
</template>

<script>
import articleItem from '@/components/editArticleItem'
import edit from '@/components/edit'
import create from '@/components/create'
export default {
  components: {
    'article-item': articleItem,
    'edit': edit,
    'create': create
  },
  data () {
    return {
      editData: {}
    }
  },
  methods: {
    pushEditData (data) {
      this.editData = data
    }
  },
  computed: {
    show () {
      return this.$store.getters.getShowEdit
    },
    postsMin () {
      return this.$store.getters.getPosts
    }
  },
  created () {
    if (!this.$store.getters.checkPosts) this.$store.dispatch('POSTS')
  }
}
</script>

<style lang="scss" scoped>
.edit {
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100%;
}
.article-list {
  grid-column: 1 / 4;
  border-right: 1px solid rgb(146, 147, 214);
  padding-right: 20px;
}
.article__item {
  padding-bottom: 20px;
}
.article-edit {
  grid-column: 4 / 13;
  padding-left: 20px;
}
@media screen and (max-width: 1024px) {
  .article-list {
    grid-column: 1 / 6;
  }
  .article-edit {
    grid-column: 6 / 13;
  }
}
@media screen and (max-width: 620px) {
  .article-list {
    display: none
  }
  .article-edit {
    padding-left: 0;
    grid-column: 1 / 13;
  }
}
</style>
