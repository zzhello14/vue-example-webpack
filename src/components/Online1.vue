<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>通过computed的计算属性直接赋值: this.$store.state.online</div>
      <br>
      <div>online: {{online}}</div>
  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'online1',
  data () {
    return {
      msg: 'the page for online1'
    }
  },
  computed:{
    online(){
        return this.$store.state.online;
    }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
