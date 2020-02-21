<template>
  <div class="child-page page-8">
    <div id="page08_01"><img src="images/logo.png" class="full" /></div>
    <div id="page08_02"><img src="images/new_img_14.png" class="full" /></div>
    <div id="page08_03"><img src="images/new_img_15.png" class="full" /></div>

    <div class="fullPage" id="slideChange04">
      <div class="fullPage page09-bg"></div>
      <div class="maskImg">
        <div class="maskImgBlock" id="scrollBlock2">
          <div class="c01"><img src="images/scroll.png" class="full" /></div>
          <div class="c01"><img src="images/scroll.png" class="full" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.page-8 {
  width: 100%;
  height: 100%;
  background: url('../../../public/images/bg08-v1.jpg') center no-repeat;
  background-size: cover;
}
#page08_01 {
  width: 62.66%;
  position: absolute;
  left: 50%;
  margin-left: -31.33%;
  top: 10%;
}

.maskImg {
  position: absolute;
  top: 37%;
  width: 100%;
  left: 0%;
  overflow: hidden;
  height: 100%;
}
.maskImg .maskImgBlock {
  width: 809.2%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.maskImg .c01 {
  width: 50%;
  float: left;
}

#slideChange05 {
  position: absolute;
  width: 100%;
  top: 20%;
}
.maskImg2 {
  width: 100%;
  position: relative;
}
.maskImg2 .maskImgBlock {
  width: 306.6%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.maskImg2 .maskImgBlockDef {
  width: 306.6%;
  visibility: hidden;
}
.maskImg2 .c01 {
  width: 50%;
  float: left;
}

.maskImg3 {
  width: 100%;
  position: relative;
}
.maskImg3 .maskImgBlock {
  width: 409.06%;
  position: absolute;
  top: 0px;
  right: 0px;
}
.maskImg3 .maskImgBlockDef {
  width: 409.06%;
  visibility: hidden;
}
.maskImg3 .c01 {
  width: 50%;
  float: left;
}

#page08_02 {
  width: 70%;
  left: 50%;
  margin-left: -35%;
  position: absolute;
  top: 18%;
}
#page08_03 {
  width: 82%;
  left: 50%;
  margin-left: -41%;
  position: absolute;
  bottom: 17%;
}
</style>
