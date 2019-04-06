<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>通过getters对数据进行过滤加工，可当成是store.js的计算属性</div>
      <br>
      <div>online: {{online}}</div>
      <p><button @click="add(2)">online +</button> <button @click="reduce">online -</button></p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState,mapMutations,mapGetters } from 'vuex';

export default {
  name: 'online3',
  data () {
    return {
      msg: 'the page for online5'
    }
  },
  //computed:mapState(['online']),
  computed:{
    ...mapState(['online']),
    // online(){
    //   return this.$store.getters.online;
    // }
    ...mapGetters(['online'])
  },
  methods:mapMutations(['add','reduce']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
