<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>通过mapState的数组来赋值: mapState(['online'])</div>
      <br>
      <div>online: {{online}}</div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState } from 'vuex';

export default {
  name: 'online3',
  data () {
    return {
      msg: 'the page for online3'
    }
  },
  computed:mapState(['online']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
