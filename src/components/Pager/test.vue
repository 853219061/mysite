<template>
 <div>
  <Pager @pageChange="handlePageChange" :total="302" :current="current1" :visibleNumber="5"></Pager>
  <h1>5555555555</h1> 
 </div>
</template>

<script>
import Pager from './index.vue'

export default {
  name: 'TestPager',
  components: {
    Pager, 
  },
  methods: {
    handlePageChange(newPage) {
      console.log('父组件收到通知 page 变成 ' + newPage);
      this.current1 = newPage;
    }
  },
  data() {
    return {
      current1: 3,
   
    }
  },
}
</script>

<style>


</style>
