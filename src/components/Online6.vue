<template>
  <div>
      <h1>{{ msg }}</h1>
      <br>
      <div>通过actions异步修改状态</div>
      <br>
      <div>online: {{online}}</div>
      <p><button @click="add(2)">online+ sync</button> <button @click="reduce">online- sync</button></p>
      <p><button @click="addAction(2)">online+ nonesync</button> <button @click="reduceAction">online- nonesync</button></p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';

export default {
  name: 'online6',
  data () {
    return {
      msg: 'the page for online6'
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
  //methods:mapMutations(['add','reduce']),
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
