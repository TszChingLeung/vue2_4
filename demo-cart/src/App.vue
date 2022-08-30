<template>
  <div class="app-container">
    <!-- Header 头部区域 -->
    <Header title="购物车案例"></Header>
    
    <!-- 循环渲染每一个商品的信息 -->
    <Goods v-for="item in list" :key="item.id" :id="item.id" :title="item.goods_name" :pic="item.goods_img" :price="item.goods_price" 
    :state="item.goods_state" @state-change="getNewState"></Goods>
  </div>
</template>

<script>
// 导入 axios 请求库
import axios from 'axios'
// 导入需要的组件
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'

export default {
  data() {
    return {
      // 用来存储购物车的列表数据，默认为空数组
      list: []
    }
  },
  created() {
    // 调用请求数据的方法
    // console.log(this)
    this.initCartList()
  },
  methods: {
    // 封装请求列表数据的方法
    async initCartList() {
      // 调用 axios 的 get 方法，请求列表数据
      // 使用结构赋值解构出我们关心的 data 数据重命名为 res
      const {data: res} = await axios.get('https://www.escook.cn/api/cart')
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      // console.log(res)
      if(res.status === 200){
        this.list = res.list
      }
    },
    // 接收子组件传递过来的数据
    getNewState(e) {
      console.log('父组件接收到数据啦！')
      console.log(e)
    }
  },
  components: {
    Header,
    Goods
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
