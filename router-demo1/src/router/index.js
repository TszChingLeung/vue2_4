// src/router/index.js 就是当前项目的路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 把 VueRouter 安装为 Vue 项目的插件
// Vue.use() 函数的作用，就是来安装插件的
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter()

// 向外共享路由的实例对象
export default router