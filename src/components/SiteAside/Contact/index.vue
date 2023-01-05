<template>
    <ul class="contact-container">
        <li>
            <a href="return:false">
                <div class="icon">
                    <Icon type="icon-github"></Icon>
                </div>
                <span>qal.github.com</span>
            </a>
            <div class="pop">
                <img src="@/Images/github.png" alt="">
            </div>
        </li>

        <li>
            <a href="mailto:853219061@qq.com">
                <div class="icon">
                    <Icon type="icon-email"></Icon>
                </div>
                <span>853219061@qq.com</span>
            </a>
           
        </li>

        <li>
            <a href="tencent://message?Menu=yes&uin=853219061&Service=300">
                <div class="icon">
                    <Icon type="icon-QQ-circle-fill"></Icon>
                </div>
                <span>853219061</span>
            </a>
           
        </li>

        <li>
            <a href="return:false">
                <div class="icon">
                    <Icon type="icon-weixin1"></Icon>
                </div>
                <span>qal6832291</span>
            </a>
            <div class="pop">
                <img src="@/Images/weixin.jpg" alt="">
            </div>
        </li>

    </ul>
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
<style lang="less" scoped>
@import '~@/styles/var.less';

.contact-container {
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @gray;

    @itemHeight:30px;
    li {
        height: @itemHeight;
        line-height: 30px;
        margin: 15px 0;
        position: relative;

        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
    }

    a {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    .icon {

        .iconfont {
            font-size: 26px;
        }
        cursor: pointer;
        width: 36px;
    }

    .pop{
        position: absolute;
        left: 0;
        bottom: @itemHeight + 5px;
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;

        img{
            object-fit: cover;
            width: 150px;
            height: 150px;
        }

        &::after{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 15px;
            height: 15px;
            background-color: #fff;
            bottom:-4px;

        }
    }
}
</style>
