<template lang="html">
  <div class="centerx">
    <vs-navbar class="navBarColor" color="dark" text-color="#FFFFFF">
      <div slot="title">
        <vs-navbar-title>
          Portfolio
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">About Me</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Works</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style lang="css" scoped>
.navBarColor {
  color: rgb(255, 255, 255);
}
</style>
