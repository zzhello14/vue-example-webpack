<template>
  <div>
    <h1>Home Page</h1>
    <div style="color:red">online: {{$store.state.online}}</div>
    <p><button @click="pushbypath">to hello</button> <button @click="pushbyname">to hook</button></p>
    <p><button @click="$store.commit('add')">online +</button> <button @click="$store.commit('reduce')">online -</button></p>
  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Vue example'
    }
  },
  methods:{
    pushbypath(){
      this.$router.push({path:'/helloworld',query:{id:10086}});
    },
    pushbyname(){
      this.$router.push({name:'hook',params:{id:10086}});
    }
  },
  store
}
</script>
