<template>
    <nav class="menu-container">
        <!-- RouterLink 渲染后就是普通 a 标签 -->
        <!-- RouterLink 和 routerView 组合  调用浏览器 api 实现无刷新 切换页面 -->
        <!-- :class="{ 'selected': isSelected(item) }" -->
        <RouterLink v-for="(item) in items" :key="item.name" :to="{name:item.name}" 
            :exact="item.exact">
            <div class="icon">
                <Icon :type="item.icon"></Icon>
            </div>
            <span>{{ item.title }}</span>
        </RouterLink>
    </nav>
</template>
<script>
import Icon from '@/components/Icon.vue'
export default {
    name: 'APP',
    components: {
        Icon
    },
    data() {
        return {
            items: [
                {
                    name: "Home",
                    title: "首页",
                    icon: "icon-home",
                    exact: true,// routerLink 上的属性 是否精确匹配
                },
                {
                    name: "Blog",
                    title: "文章",
                    icon: "icon-svgwrite",
                    exact: false, // routerLink 上的属性 是否精确匹配 文章是带文章号码的 不用精确匹配
                },
                {
                    name: "About",
                    title: "关于我",
                    icon: "icon-aboutme",
                    exact: true,
                }, {
                    name: "Project",
                    title: "项目效果",
                    icon: "icon-Code",
                    exact: true,
                }, {
                    name: "Message",
                    title: "留言板",
                    icon: "icon-messagefill",
                    exact: true,
                },
            ]
        }
    },
    methods: {

        isSelected(item) {

            let link = item.link.toLocaleLowerCase();
            let currentUrl = location.pathname.toLocaleLowerCase();

            if (item.startWith) {
                return currentUrl.startsWith(link);
            } else {
                return currentUrl === link;
            }


        }
    },
    created() {
    },
    mounted() {

    },
}
</script>
<style lang="less" scoped>
@import '~@/styles/var.less';

.menu-container {
    color: @gray;
    margin: 24px 0;

    a {
        padding: 0 50px;
        display: flex;
        align-items: center;
        height: 45px;

        &:hover {
            color: #fff;
        }

        &.router-link-active {
            background-color: #2d2d2d;
        }

        .icon {
            .iconfont {
                font-size: 24px;
            }

            cursor: pointer;
            width: 36px;
        }
    }




}
</style>
