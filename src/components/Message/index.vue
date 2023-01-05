<template>
  <div class="message-container">
    <div class="content">

        <slot></slot>

    </div>
    <button>确定</button>
    <button>取消</button>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
}
</script>
<style lang="less" scoped>
.message-container{
    position: fixed;
    left: 50%;
    top:50%;
    transform:  translate(-50%, -50%);
    border:  2px solid;
    padding:  20px;
}
</style>
