<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>说明：简单的路由跳转，用router-link的to属性</div>
  </div>
</template>

<script>
export default {
  name: 'Hello1',
  data () {
    return {
      msg: 'the page for hello1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
