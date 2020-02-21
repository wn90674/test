<template>
  <div class="child-page page-02">
    <div
      id="page02_03"
      class="ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/logo.png" class="full" />
    </div>
    <div
      id="page02_01"
      class="ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <img src="images/new_img_05_v1.png" class="full" />
    </div>
    <div
      id="page02_02"
      class="ani"
      swiper-animate-effect="fadeIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0.1s"
    >
      <div id="playVideo">
        <img src="images/video-poster.jpg" class="full" />
      </div>
      <div id="videoBLock">
        <video
          x-webkit-airplay="true"
          playsinline
          webkit-playsinline="true"
          x5-video-player-type="h5"
          preload="auto"
          id="myVideo"
          src="media/video.mp4"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
};
</script>

<style scoped lang="scss">
.page-02 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg03-v1.jpg') center no-repeat;
  background-size: cover;
}
#page02_01 {
  width: 68%;
  position: absolute;
  left: 50%;
  margin-left: -34%;
  top: 65%;
}
#page02_02 {
  width: 100%;
  position: absolute;
  top: 25%;
}
#page02_03 {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 12%;
}
</style>
