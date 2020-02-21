<template>
  <div class="child-page page-03">
    <div
      id="page03_01"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/logo.png" class="full" />
    </div>
    <div
      id="page03_03"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <div class="sd">
        <img src="images/img06-01.png" class="full" />
      </div>
      <div class="sd">
        <img src="images/img06-02.png" class="full" />
      </div>
      <div class="sd">
        <img src="images/img06-03.png" class="full" />
      </div>
      <div class="sd">
        <img src="images/img06-04.png" class="full" />
      </div>
    </div>
    <div
      id="page03_02"
      class="ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/new_img_06.png" class="full" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.page-03 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg04-v1.jpg') center no-repeat;
  background-size: cover;
}
#page03_01 {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 12%;
}
#page03_03 {
  width: 93.4%;
  position: absolute;
  left: 50%;
  margin-left: -46.7%;
  top: 19%;
}
#page03_02 {
  width: 59.06%;
  position: absolute;
  left: 50%;
  margin-left: -29.53%;
  bottom: 9%;
}
</style>
