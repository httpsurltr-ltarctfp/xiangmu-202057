import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuce from '@/views/lj/zhuce'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/zc'
    },{
      path: '/zc',
      name: 'zhuce',
      component: zhuce 
    }
  ]
})
