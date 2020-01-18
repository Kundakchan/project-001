<template>
  <div id="app" class="container">
    <header>
      <app-header></app-header>
    </header>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/header'
export default {
  components: {
    'app-header': AppHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 52px);
}
</style>
