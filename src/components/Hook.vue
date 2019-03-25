<template>
  <div>
    <h1>Hook</h1>
    <ol>
      <li>路由的钩子选项可以写在路由配置文件中，也可以写在我们的组件模板中</li>
      <li>在配置文件中的钩子函数，只有一个钩子-beforeEnter，如果我们写在模板中就可以有两个钩子函数可以使用</li>
      <li>beforeRouteEnter：在路由进入前的钩子函数。</li>
      <li>beforeRouteLeave：在路由离开前的钩子函数。</li>
    </ol>

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
  created(){
    console.log(this.$route.params.id)
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log('====beforRouteEnter====');
    console.log(from);
    console.log(this)
    next();
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log('====beforeRouteLeave====');
    console.log(to);
    next();
  }
}
</script>
