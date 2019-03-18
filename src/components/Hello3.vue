<template>
  <div>
      <h1>{{ msg }}</h1>
      <div>author:{{user}}</div>
      <br>
      <div>说明：原生a标签路由跳转，参数传输使用api：this.$router.push</div>
  </div>
</template>

<script>
export default {
  name: 'Hello3',
  data () {
    return {
      msg: 'the page for hello3',
      user:this.$route.params.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
