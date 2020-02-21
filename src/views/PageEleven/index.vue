<template>
  <div class="child-page page-11">
    <div
      id="page11_logo"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/logo.png" class="full" />
    </div>

    <div
      id="page11_01"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/img18.png" class="full" />
    </div>
    <div
      id="page11_02"
      class="ani"
      swiper-animate-effect="fadeIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <div id="playVideo2"><img src="images/video_p02.jpg" class="full" /></div>
      <div id="videoBLock2">
        <video
          x-webkit-airplay="true"
          playsinline
          webkit-playsinline="true"
          x5-video-player-type="h5"
          preload="auto"
          id="myVideo2"
          src="media/video2.mp4"
        ></video>
      </div>
    </div>

    <div id="page11_04">
      <img src="images/p11_img04.png" class="full" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.page-11 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg10.jpg') bottom center no-repeat;
  background-size: cover;
}
#page11_01 {
  width: 65.72%;
  position: absolute;
  top: 17%;
  left: 50%;
  margin-left: -32.86%;
}

#page11_02 {
  width: 100%;
  position: absolute;
  top: 38%;
}
#page11_03 {
  width: 71.6%;
  position: absolute;
  top: 75%;
  left: 50%;
  margin-left: -35.8%;
}
#page11_04 {
  width: 46.94%;
  position: absolute;
  bottom: 15%;
  left: 50%;
  margin-left: -23.47%;
}

#page11_logo {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 10%;
}
</style>
