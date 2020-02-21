<!-- 页面资源加载进度，加载完成后隐藏 -->
<template>
  <div class="loading" v-show="percent !== '100%'">
    <div class="logo"><img src="images/logo.png" class="full" /></div>
    <div class="img"><img src="images/loading.gif" class="full" /></div>
    <div class="text">{{ percent }}</div>
  </div>
</template>

<script>
import eventBus from '../util/eventBus';
import { preloadimg } from '../util/preload';
import {imgArr } from '../assets/js/imgList';
export default {
  name: 'LoadingPercent',
  data() {
    return {
      percent: 0,
    }
  },
  created() {
    eventBus.$on('loading', n => {
      this.percent = n;
    })
    preloadimg(imgArr)
  }
};
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #b8ded3 url('../../public/images/bg01.jpg') center no-repeat;
  background-size: cover;

  .img {
    width: 14.66%;
    position: absolute;
    left: 50%;
    margin-left: -7.33%;
    top: 50%;
  }

  .logo {
    width: 66.26%;
    position: absolute;
    left: 50%;
    margin-left: -33.13%;
    top: 42%;
  }

  .text {
    width: 14.66%;
    position: absolute;
    left: 50%;
    margin-left: -7.33%;
    top: 60%;
    text-align: center;
    color: #000;
    font-style: italic;
    font-size: 12px;
  }
}
</style>
