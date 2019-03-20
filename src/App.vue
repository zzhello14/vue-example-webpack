<template>
  <div id="app">
    <img src="./assets/logo.png" height="50px">
    <router-link to="/">index</router-link> | 
    <router-link to="/helloworld">helloworld</router-link> | 
    <router-link to="/views">views</router-link> | 
    <router-link to="/params/888/news title">params</router-link> | 
    <router-link to="/gohome">gohome</router-link> | 
    <router-link to="/gohello">gohello</router-link>
    <hr>
    <router-view/>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
