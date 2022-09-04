<template>
  <div class="movie-container">
    <h3>Movie 组件 --- {{ this.$route.params.mid }}</h3>
    <button @click="showThis">打印 this</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  methods: {
    showThis() {
      console.log(this)
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
