import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path:'hello1',name:'hello1',component:Hello1},//path不要在前面加/，加了表示是根目录
        {path:'hello2',name:'hello2',component:Hello2}
      ]
    }
  ]
})
