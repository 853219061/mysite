<template>
  <div class="home-container" ref="container" @wheel="handelWheel">
    <ul class="carousel-container" :style="{ marginTop: marginTop }" @transitionend="handleTransitionEnd">
      <li v-for="(item) in banners" :key="item.id">
        <CarouselItem :carouse="item"></CarouselItem>
      </li>
    </ul>
    <div v-show="index > 0" class="iconwrap iconwrap-up" @click="switchTo(index - 1)">
      <Icon type="icon-up"></Icon>
    </div>

    <div v-show="index < banners.length - 1" class="iconwrap iconwrap-down" @click="switchTo(index + 1)">
      <Icon type="icon-down"></Icon>
    </div>

    <ul class="indicator">
      <li @click="switchTo(i)" v-for="(item, i) in banners" :class="{ active: index === i }" :key="item.id">
      </li>
    </ul>

    <Loading v-if="isLoading"></Loading>
  </div>
</template>
<script>
import CarouselItem from './carouselitem.vue';
import { getBanner } from '@/api/banner';
import Icon from '@/components/Icon.vue';
import Loading from '@/components/Loading';
export default {
  name: 'APP',
  components: { CarouselItem, Icon, Loading },
  data() {
    return {
      isLoading:true,
      banners: [],
      index: 0, // 当前显示的第几张
      containerHeight: 0,// 容器高度
      switching: false
    }
  },
  computed: {
    marginTop() {
      return - (this.index * this.containerHeight) + 'px';
    }
  },
  methods: {

    handelWheel(event) {

      if (this.switching || event.deltaY <= 5 && event.deltaY >= -5) { return }

      this.switching = true;
      if (event.deltaY < -5 && this.index > 0) {
        this.index--;
        console.log('上移', event)
      }
      else if (event.deltaY < -5 && this.index == 0) {
        this.index = this.banners.length - 1;
        console.log('上移', event)
      }
      else if (event.deltaY > 5 && this.index < this.banners.length - 1) {
        this.index++;
        console.log('下移', event)
      }
      else if (event.deltaY > 5 && this.index == this.banners.length - 1) {
        this.index = 0;
        console.log('下移', event)
      }


    },
    handleTransitionEnd() {

      this.switching = false;

    },
    handleClick() {
      this.$showMessage({
        content: "123456",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: () => { console.log('消失') }
      })
    },
    switchTo(i) {
      this.index = i;
    }
    ,handleResize() {
      console.log('handleResize');
      this.containerHeight = this.$refs.container.clientHeight;
    }

  },
  async created() {
    this.banners = await getBanner();
    console.log('获取数据', this.banners)
    this.isLoading = false;
  },
  mounted() {

    // 容器高度获取
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener('resize', this.handleResize)

  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';

.home-container {
  //background-color: @dark;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;


  // // 测试
  // width: 500px;
  // height:  300px;
  // overflow: visible;
  // border: 2px solid #000;
  // margin: 10px auto;

  .carousel-container {

    height: 100%;
    width: 100%;
    transition: 500ms;

    li {

      height: 100%;
      width: 100%;
    }

  }









  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .iconwrap {
    .self-center();
    @gap: 25px;
    cursor: pointer;
    transform: translateX(-50%);

    &-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }

    &-down {
      bottom: @gap;
      top: auto;
      animation: jump-down 2s infinite;
    }

    @jump : 5px;

    @keyframes jump-up {

      0% {
        transform: translate(-50%, @jump);
      }


      50% {
        transform: translate(-50%, -@jump);
      }

      50% {
        transform: translate(-50%, @jump);
      }

    }

    @keyframes jump-down {

      0% {
        transform: translate(-50%, -@jump);
      }


      50% {
        transform: translate(-50%, @jump);
      }

      50% {
        transform: translate(-50%, -@jump);
      }

    }


    .iconfont {
      font-size: 30px;
      color: @gray;
    }




  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    right: 20px;
    left: auto;

    li {
      background-color: @dark;
      margin-bottom: 10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      border: 1px solid #fff;
      box-sizing: border-box;
      transition: 0.5s;

      &.active {
        background-color: #fff;
      }
    }
  }

}
</style>
