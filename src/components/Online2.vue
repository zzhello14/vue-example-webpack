<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>通过mapState的对象来赋值: online:state=>state.online</div>
      <br>
      <div>online: {{online}}</div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'

export default {
  name: 'online2',
  data () {
    return {
      msg: 'the page for online2'
    }
  },
  computed:mapState({
    online:state=>state.online
  }),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
