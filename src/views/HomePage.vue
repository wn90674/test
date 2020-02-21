<template>
  <swiper
    class="full-screen"
    :options="swiperOption"
    ref="mySwiper"
    @slideChangeTransitionEnd="slideChangeTransitionEnd"
  >
    <!-- slides -->
    <swiper-slide class="swiper-item">
      <page-one></page-one>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-two></page-two>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-three></page-three>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-four></page-four>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-five></page-five>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-six></page-six>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-seven></page-seven>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-eight></page-eight>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-nine></page-nine>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-ten></page-ten>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <page-eleven></page-eleven>
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
</template>

<script>
import * as swiperAni from '../assets/js/swiper.animate.min.js';
import PageOne from '../views/PageOne';
import PageTwo from '../views/PageTwo';
import PageThree from '../views/PageThree';
import PageFour from '../views/PageFour';
import PageFive from '../views/PageFive';
import PageSix from '../views/PageSix';
import PageSeven from '../views/PageSeven';
import PageEight from '../views/PageEight';
import PageNine from '../views/PageNine';
import PageTen from '../views/PageTen';
import PageEleven from '../views/PageEleven';
export default {
  name: 'HomePage',
  components: {
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive,
    PageSix,
    PageSeven,
    PageEight,
    PageNine,
    PageTen,
    PageEleven,
  },
  data() {
    return {
      swiperOption: {
        width: window.innerWidth,
        height: window.innerHeight,
        initialSlide: 0,
        direction: 'vertical',
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        on: {
          init: function() {
            console.log(this);
            swiperAni.swiperAnimateCache(this);
            swiperAni.swiperAnimate(this);
          },
          slideChange: function() {
            swiperAni.swiperAnimate(this);
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: {
    slideChangeTransitionEnd() {
      console.log(this.swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.full-screen {
  height: 100vh;
  overflow: hidden;
}
</style>
