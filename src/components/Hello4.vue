<template>
  <div>
      <h1>{{ msg }}</h1>
      <div>author:{{user}}</div>
      <br>
      <div>说明：页面刷新，参数会丢失。可以通过在路由path中增加变量来解决[hello4/:user]</div>
  </div>
</template>

<script>
export default {
  name: 'Hello4',
  data () {
    return {
      msg: 'the page for hello4',
      user:this.$route.params.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
