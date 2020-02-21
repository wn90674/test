<template>
  <div class="child-page page-09">
    <div id="page09_scroll">
      <div class="fullPage" id="slideChange05">
        <div class="maskImg2">
          <div class="maskImgBlock" id="scrollBlock3">
            <div class="c01"><img src="images/sn01.jpg" class="full" /></div>
            <div class="c01"><img src="images/sn01.jpg" class="full" /></div>
          </div>
          <div class="maskImgBlockDef clearfix">
            <div class="c01"><img src="images/sn01.jpg" class="full" /></div>
            <div class="c01"><img src="images/sn01.jpg" class="full" /></div>
          </div>
        </div>

        <div class="maskImg3">
          <div class="maskImgBlock" id="scrollBlock4">
            <div class="c01"><img src="images/sn02.jpg" class="full" /></div>
            <div class="c01"><img src="images/sn02.jpg" class="full" /></div>
          </div>
          <div class="maskImgBlockDef clearfix">
            <div class="c01"><img src="images/sn02.jpg" class="full" /></div>
            <div class="c01"><img src="images/sn02.jpg" class="full" /></div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="maskScrollBlock"
      class="ani"
      swiper-animate-effect="fadeIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.5s"
    ></div>
    <div
      id="page09_01"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="1s"
    >
      <img src="images/logo.png" class="full" />
    </div>
    <div
      id="page09_02"
      class="ani"
      swiper-animate-effect="fadeIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="1s"
    >
      <img src="images/new_img_16.png" class="full" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.page-09 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg09.jpg') center no-repeat;
  background-size: cover;
}
#page09_01 {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 10%;
}
#page09_02 {
  width: 65.33%;
  position: absolute;
  left: 50%;
  margin-left: -32.66%;
  top: 35%;
}
#page09_03 {
  position: absolute;
  width: 100%;
  top: 26%;
}

#maskScrollBlock {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(210, 240, 233, 0.7);
}
</style>

<style lang="scss">
.page-09 {
  .swiper-3d {
    transform: scale(1.55);
  }
  .swiper-3d .swiper-slide {
    box-shadow: 0 0 10px #a2a2a2;
  }
}
</style>
