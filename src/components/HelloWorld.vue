<template>
  <div class="hello">
    <router-link to="/helloworld/hello1">hello1</router-link>
    <router-link :to="{name:'hello2',params:{user:'zzhello'}}">hello2</router-link>
    <a href="javascript:void(0)" @click="hello3('someone')">hello3</a>
    <router-link :to="{name:'hello4',params:{user:'hehe'}}">hello4</router-link>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    hello3(user){
      // 注意：传参用#router，接收用$route
      this.$router.push({
        name:'hello3',
        params:{
          user:user
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
