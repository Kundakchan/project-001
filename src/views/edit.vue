<template>
  <section class="section edit">
    <ul class="article-list">
      <li class="article__item" v-for="(item, index) in items" :key="index">
        <article-item :options="item"></article-item>
      </li>
    </ul>
    <div class="article-edit">
      <edit></edit>
    </div>
  </section>
</template>

<script>
import articleItem from '@/components/editArticleItem'
import edit from '@/components/edit'
export default {
  components: {
    'article-item': articleItem,
    'edit': edit
  },
  data () {
    return {
      items: [
        {
          title: 'Я разрабитао програмное обеспечения',
          dateCreate: '2 дня назад',
          dateUpdate: 'Необновлялся'
        },
        {
          title: 'Я разрабитао програмное обеспечения',
          dateCreate: 'только что',
          dateUpdate: 'Необновлялся'
        },
        {
          title: 'Я разрабитао програмное обеспечения',
          dateCreate: '2 дня назад',
          dateUpdate: '12.01.2020'
        },
        {
          title: 'Я разрабитао програмное обеспечения',
          dateCreate: '2 дня назад',
          dateUpdate: 'Необновлялся'
        },
        {
          title: 'Я разрабитао програмное обеспечения',
          dateCreate: '5 дня назад',
          dateUpdate: '10 минут назад'
        }
      ]
    }
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
