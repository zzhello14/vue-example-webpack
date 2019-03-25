<template>
  <div class="hello">
    <router-link to="/helloworld/hello1">hello1</router-link>
    <router-link :to="{name:'hello2',params:{user:'zzhello'}}">hello2</router-link>
    <a href="javascript:void(0)" @click="hello3('someone')">hello3</a>
    <router-link :to="{name:'hello4',params:{user:'hehe'}}">hello4</router-link>
    <h1>{{ msg }}</h1>
    <div style="color:red">online: {{$store.state.online}}</div>
    <!-- css过渡类名： 组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：

    fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
    fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
    fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
    fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。 -->

    <!-- 过渡模式mode：

    in-out:新元素先进入过渡，完成之后当前元素过渡离开。
    out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。 -->


    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import store from '@/vuex/store'

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
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
