<template>
  <div>
      <h1>{{ msg }}</h1>
      <div>author:{{$route.params.user}}</div>
      <br>
      <div>说明：带有参数的路由跳转，用router-link的:to属性，参数中name为路由path中的name</div>
  </div>
</template>

<script>
export default {
  name: 'Hello2',
  data () {
    return {
      msg: 'the page for hello2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
