<template>
    <div class="site-aside-container">
        <div class="avatar-container">
            <Avatar :size="100" url="https://img1.baidu.com/it/u=3346088927,2424311409&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800">
            </Avatar>
        </div>
        <h1 class="title">龙傲天的小屋</h1>
        <Menu></Menu>
        <Contact></Contact>
        <p class="footer">粤ICP备18007845号</p>
    </div>
</template>
<script>
import Avatar from '@/components/Avatar.vue';
import Menu from './Menu';
import Contact from './Contact';

export default {
    name: 'SITEASIDE',
    data() {
        return {
        }
    },
    components: {
        Menu,
        Contact,
        Avatar,
    },
    methods: {
    },
    created() {
    },
    mounted() {
    },
}
</script>
<style lang="less" scoped>
@import '~@/styles/var.less';

.site-aside-container {

    width: 100%;
    height: 100%;
    background-color: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;

    .avatar-container {
        text-align: center;
    }

    .title{
        text-align: center;
        font-size: 1em;
        color:#fff;
    }

    .footer{
        text-align: center;
        font-size: 12px;
    }


}
</style>
