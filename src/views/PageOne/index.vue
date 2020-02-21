<template>
  <div class="child-page page-01">
    <div
      id="page01_04"
      class="ani"
      swiper-animate-effect="fadeInLeft"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    >
      <img src="images/new_img_03.png" class="full" />
    </div>

    <div
      id="page01_05"
      class="ani"
      swiper-animate-effect="fadeInRight"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    >
      <img src="images/new_img_02.png" class="full" />
    </div>

    <div
      id="page01_01"
      class="ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/new_img_04_v1.png" class="full" />
    </div>
    <div
      id="page01_02"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.3s"
    >
      <img src="images/new_img_01.png" class="full" />
    </div>
    <div
      id="page01_03"
      class="ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.5s"
    >
      <img src="images/img03.png" class="full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageOne',
};
</script>

<style scoped lang="scss">
.page-01 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg02.jpg') center no-repeat;
  background-size: cover;
}
#page01_01 {
  width: 31.2%;
  position: absolute;
  left: 50%;
  margin-left: -12.6%;
  top: 32%;
}
#page01_02 {
  width: 62.133%;
  position: absolute;
  left: 50%;
  margin-left: -31.066%;
  top: 7%;
}
#page01_03 {
  width: 55.733%;
  position: absolute;
  left: 50%;
  margin-left: -27.56%;
  bottom: 10%;
}

#page01_04 {
  width: 46.8%;
  position: absolute;
  left: 50%;
  margin-left: -37%;
  top: 32%;
}
#page01_05 {
  width: 53.7%;
  position: absolute;
  right: 0px;
  top: 32%;
}
</style>
