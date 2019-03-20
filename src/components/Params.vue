<template>
  <div class="hello">
      <h2>{{ msg }}</h2>
      <p>新闻ID：{{ $route.params.newsId}}</p>
      <p>新闻标题：{{ $route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
