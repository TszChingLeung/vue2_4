// src/router/index.js 就是当前项目的路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

import Tab1 from '@/components/tabs/Tab1'
import Tab2 from '@/components/tabs/Tab2'

// 把 VueRouter 安装为 Vue 项目的插件
// Vue.use() 函数的作用，就是来安装插件的
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // routes 是一个数组，作用：定义 "hash" 地址 与 "组件" 之间的对应关系
  routes: [
    // 重定向的路由规则
    { path: '/', redirect: '/home' },
    // 路由规则
    { path: '/home', component: Home },
    // 动态路由，这里的 id 名字可以任意起
    // 需求：在 Movie 组件中，希望根据 id 的值，展示对应电影的详情信息
    { path: '/movie/:mid', component: Movie },
    {
      path: '/about',
      component: About,
      // redirect: '/about/tab1',
      // 子路由规则
      children: [
        // children 子路由规则属性中的 path 路径不用加 / 直接写路径 tab1
        // 默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做"默认子路由"
        { path: '', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    }
  ]
})

// 向外共享路由的实例对象
export default router
