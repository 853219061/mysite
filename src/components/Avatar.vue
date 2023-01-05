<template>
  <img class="avatar" :src="url" alt="" :style="{ width: size + 'px', height: size + 'px' }">
</template>
<script>
export default {
  name: 'AVATAR',
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 60,
    },

  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="scss" scoped>
.avatar {

  border-radius: 50%;

  // 防止图片拉升
  object-fit: cover;

}
</style>
