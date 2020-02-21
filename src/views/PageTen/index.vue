<template>
  <div class="child-page page10">
    <div class="p10_01 fullPage relative">
      <div
        class="n01 ani"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0.1s"
      >
        <img src="images/kol06.png" class="full" />
      </div>

      <div
        class="n02 ani"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0.3s"
      >
        <img src="images/kol04.png" class="full" />
      </div>
      <div
        class="n03 ani"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0.1s"
      >
        <img src="images/kol03.png" class="full" />
      </div>
      <div
        class="n04 ani"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0.6s"
      >
        <img src="images/kol05.png" class="full" />
      </div>
      <div
        class="n05 ani"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0.3s"
      >
        <img src="images/kol02.png" class="full" />
      </div>
      <div
        class="n06 ani"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0.6s"
      >
        <img src="images/kol01.png" class="full" />
      </div>
    </div>

    <div class="p10_02 fullPage absolute" id="p10_02">
      <div class="scrollBlock" id="scrollBlock">
        <div class="g01"><img src="images/scbg.jpg" class="full" /></div>
        <div class="g01"><img src="images/scbg.jpg" class="full" /></div>
      </div>
      <div class="maskBlock" id="maskBlock">
        <div id="page10_01"><img src="images/logo.png" class="full" /></div>
        <div id="page10_02">
          <img src="images/new_img_16_v1.png" class="full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.p10_02 {
  z-index: 10;
  top: 0px;
  width: 100%;
  display: none;
}
.scrollBlock {
  position: absolute;
  top: 0px;
  width: 100%;
  left: 0px;
}
.maskBlock {
  background-color: rgba(184, 232, 220, 0.85);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: none;
}
.p10-content {
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -30%;
  margin-top: -65%;
}

.n01 {
  position: absolute;
  width: 58.13%;
  top: 22%;
  right: -8%;
  z-index: 1;
}
.n02 {
  position: absolute;
  width: 54%;
  top: -1%;
  right: -3%;
  z-index: 2;
}
.n03 {
  position: absolute;
  width: 88.93%;
  top: -3%;
  left: -33%;
  z-index: 3;
}
.n04 {
  position: absolute;
  width: 64.93%;
  top: 53%;
  left: -10%;
  z-index: 4;
}
.n05 {
  position: absolute;
  width: 61.06%;
  top: 23%;
  left: -3%;
  z-index: 5;
}
.n06 {
  position: absolute;
  width: 82.53%;
  top: 60%;
  right: -27%;
  z-index: 6;
}

#page10_01 {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 10%;
}
#page10_02 {
  width: 74.9%;
  position: absolute;
  left: 50%;
  margin-left: -37.45%;
  top: 25%;
}
</style>
