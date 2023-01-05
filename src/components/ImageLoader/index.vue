<template>
    <div class="image-loader-container ">
        <img v-if="!everythingDone" :src="placeholder" alt="" class="placeholder">
        <img @load="handleLoad" :src="src" alt="" class="origin"
            :style="{ opacity: originOpacity, transition: `${this.duration}ms` }">
    </div>
</template>
<script>
export default {
    name: 'APP',
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            require: true,
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    emits: ["load"],
    data() {
        return {
            originLoaded: false,
            everythingDone: false,
        }
    },
    computed: {
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {

        handleLoad() {
            this.originLoaded = true;
            setTimeout(() => {
                this.everythingDone = true
            }, this.duration);

            console.log('origin img load success');
            this.$emit("load",)


        }
    },
    created() {
    },
    mounted() {
    },
}
</script>
<style lang="less" scoped>
@import '~@/styles/mixin.less';

.image-loader-container {

    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        .self-fill();
        object-fit: cover;
    }

    // .origin {
    //     opacity: this.originOpacity;
    // }

    .placeholder {
        // 模糊
        filter: blur(2vw);
    }

}
</style>
