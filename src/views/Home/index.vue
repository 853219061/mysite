<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">点击我</button>
  </div>
</template>
<script>

export default {
  name: 'APP',
  data() {
    return {
    }
  },
  methods: {

    handleClick() {
      this.$showMessage({
        content: "123456",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: ()=>{ console.log('消失')}
      })
    }

  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="less" scoped>
.home-container {
  width: 400px;
  height: 600px;
  margin: 50px auto;
  border: 1px solid;
}
</style>
