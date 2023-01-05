<template>
    <div class="empty-container ">
       <Icon  type="icon-empty"></Icon>
        <h1>{{ text }}</h1>
    </div>
</template>
<script>
import Icon from '../Icon.vue'
export default {
    name: 'EMPTY',
    data() {
        return {
        }
    },
    props: {
        text: {
            type: String,
            default: "无数据",
        }
    },
    components:{Icon},
    methods: {
    },
    created() {
    },
    mounted() {
    },
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/global.less";
.empty-container{
    .self-center(absolute);
    color: @gray;
    text-align: center;
}
</style>
