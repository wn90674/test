<template>
  <div class="child-page page-07">
    <div
      id="page07_01"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/logo.png" class="full" />
    </div>

    <div
      id="page07_02"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.3s"
    >
      <img src="images/new_img_12.png" class="full" />
    </div>

    <div
      id="page07_03"
      class="ani"
      swiper-animate-effect="fadeInLeft"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.3s"
    >
      <img src="images/new_img_13_v1.png" class="full" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.page-07 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg07-v2.jpg') center no-repeat;
  background-size: cover;
}
#page07_01 {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 10%;
}
#page07_02 {
  width: 58.92%;
  position: absolute;
  left: 50%;
  margin-left: -29.46%;
  top: 16%;
}
#page07_03 {
  width: 48.8%;
  position: absolute;
  left: 2%;
  top: 32%;
}
</style>
