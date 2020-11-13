<template functional>
  <video id="bg-video" autoplay loop muted>
    <source src="@/assets/Cart.mp4" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: "BackgroundVideo"
}
</script>

<style lang="css" scoped>
video#bg-video{
  position: fixed;
  right: 0;
  bottom: 0;
  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100%;
  z-index: -100;
  background-size: cover;
}
</style>
