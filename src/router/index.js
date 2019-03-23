import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import Hello3 from '@/components/Hello3'
import Hello4 from '@/components/Hello4'
import Views from '@/components/Views'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',// 默认是hash
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld,
      children:[
        {path:'hello1',name:'hello1',component:Hello1},//path不要在前面加/，加了表示是根目录
        {path:'hello2',name:'hello2',component:Hello2},
        {path:'hello3',name:'hello3',component: resolve => require(['@/components/Hello3'], resolve),},
        {path:'hello4/:user',name:'hello4',component:Hello4},
      ],
      alias: '/gohello'
    },
    {
      path: '/views',
      name: 'views',
      components: {
        default:Views,
        left:Hello1,
        right:Hello2
      }
    },
    {
      path: '/params/:newsId/:newsTitle',
      name: 'params',
      component: Params
    },
    {
      path: '/gohome',
      name: 'gohome',
      redirect: '/'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
