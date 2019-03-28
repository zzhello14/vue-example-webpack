<template>
  <div>
      <router-link to="/online/online1">online1</router-link>
      <router-link to="/online/online2">online2</router-link>
      <router-link to="/online/online3">online3</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'online',
  data () {
    return {
      msg: 'the page for online'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
