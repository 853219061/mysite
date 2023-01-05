<template>
    <div class="pager-container">
        <a @click.prevent="handleClick(1)" href="" :class="{ disabled: current == 1 }">|&lt;&lt;</a>
        <a @click.prevent="handleClick(current - 1)" href="" :class="{ disabled: current == 1 }">&lt;&lt;</a>

        <a @click.prevent="handleClick(n)" v-for="(n, i) in numbers" :key="i" href=""
            :class="{ active: n == current }">{{ n }}</a>

        <a @click.prevent="handleClick(current + 1)" href="" :class="{ disabled: current == pageNumber }">&gt;&gt;</a>
        <a @click.prevent="handleClick(pageNumber)" href="" :class="{ disabled: current == pageNumber }">&gt;&gt;|</a>
        <h1>{{ visibleMin }}</h1>
        <h1>{{ visibleMax }}</h1>
    </div>
</template>
<script>
export default {
    name: 'APP',
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            default: 10
        },
        visibleNumber: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {}
    },
    emits: ["pageChange"],
    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.limit)
        },
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber / 2);
            if (min < 1) {
                min = 1;
            }
            return min;
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNumber - 1;
            if (max > this.pageNumber) {
                max = this.pageNumber;
            }
            return max;
        },
        numbers() {
            let nums = [];
            console.log(this.visibleNumber, 'this.visibleNumber')
            console.log(this.visibleMax, 'this.visibleMax')
            console.log(this.visibleMin, 'this.visibleMin')
            for (let i = this.visibleMin; i <= this.visibleMax; i++) {
                nums.push(i);
            }
            return nums;
        }

    },
    methods: {
        handleClick(newPage) {

            if (newPage < 1) {
                newPage = 1;
            }

            if (newPage > this.pageNumber) {
                newPage = this.pageNumber;
            }

            if (newPage == this.current) {
                return;
            }

            console.log('handleClick', newPage)
            this.$emit('pageChange', newPage, this.current);
        }
    },
    created() {
    },
    mounted() {
    },
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    a {
        color: @primary;
        margin: 0 6px;

        &.disabled {
            color: @lightWorlds;
            cursor: not-allowed;
        }

        &.active {
            color: @worlds;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>
