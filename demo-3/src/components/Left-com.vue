<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button @click="getInfo">发起 GET 请求</button>
    <button @click="btnGetBooks">获取图书列表的数据</button>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  methods: {
    async getInfo () {
      // 解构赋值 {data:res} 把 data 重命名为 res
      // 通过组件实例 this 访问到原型上的axios属性调用 get 方法
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    },
    // 点击按钮，获取图书列表的数据
    async btnGetBooks () {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
  .left-container {
    background-color: orange;
    min-height: 200px;
    flex: 1;
  }
</style>
