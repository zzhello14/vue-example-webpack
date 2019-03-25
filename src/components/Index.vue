<template>
  <div>
    <h1>Home Page</h1>
    <p><button @click="pushbypath">to hello</button></p>
    <p><button @click="pushbyname">to hook</button></p>
  </div>
</template>

<script>
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
  }
}
</script>
