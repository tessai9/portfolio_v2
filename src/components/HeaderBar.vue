<template lang="html">
  <div class="centerx">
    <vs-navbar class="navBarColor" color="dark" text-color="#FFFFFF">
      <div slot="title">
        <vs-navbar-title>
          Portfolio
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link :to="{ name: '/' }"><a>Home</a></router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link :to="{ name: '/about-me' }"><a>About Me</a></router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link :to="{ name: '/works' }"><a>Works</a></router-link>
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
