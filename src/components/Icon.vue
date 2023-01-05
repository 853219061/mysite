<template>
    <i class="iconfont " :class="type"></i>
</template>
<script>
export default {
    name: 'APP',
    data() {
        return {
        }
    },
    props: {
        type: {
            tupe: String,
            required: true,
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


<style scoped>
/*  注意这里 不能用less 因为要引入 css */
@import  '//at.alicdn.com/t/c/font_3593206_mn3k0miuq7g.css';
/* @import "//at.alicdn.com/t/c/font_3593206_e6a0da7jihc.css"; */
</style>
