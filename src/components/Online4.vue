<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>通过mapMutations修改state的值: mapMutations(['add','reduce'])</div>
      <br>
      <div>online: {{online}}</div>
      <p><button @click="add(2)">online +</button> <button @click="reduce">online -</button></p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState,mapMutations } from 'vuex';

export default {
  name: 'online3',
  data () {
    return {
      msg: 'the page for online3'
    }
  },
  computed:mapState(['online']),
  methods:mapMutations(['add','reduce']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
