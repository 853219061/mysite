<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside></SiteAside>
      </template>
      <template>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from './components/SiteAside'
import Layout from './components/Layout'

export default {
  name: 'App',
  components: {
    SiteAside,
    Layout,
},
  methods: {
    handleLoaded() {
      console.log(' load 事件触发 图片加载完成')
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="less" >
@import '~@/styles/mixin.less';

.app-container {
  .self-fill();
 
  .layout-container .left {
    width: 250px;
    height: 100%;
    background-color: lightcoral;
  }

  .layout-container .main {
    width: 100%;
    height: 100%;
    background-color: lightgreen;

  }




}


#app .iconfont {
  // font-size: 60px;
  //color: red;
}
</style>
