<template lang="html" functional>
  <div class="centerx">
    <vs-navbar class="nav-bar-color" color="dark" text-color="#FFFFFF">
      <div slot="title">
        <vs-navbar-title>
          Portfolio
        </vs-navbar-title>
      </div>

      <vs-navbar-item>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item>
        <router-link :to="{ name: 'works' }">Works</router-link>
      </vs-navbar-item>
      <vs-navbar-item>
        <a
          href="mailto:shimeji9@gmail.com"
          content="Contact Me!"
          v-tippy="{ placement: 'bottom', arrow: true }"
        >
            <vs-icon
              icon="email"
              size="small"
              class="contact-me"
            ></vs-icon>
        </a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
}
</script>

<style lang="css" scoped>
.nav-bar-color {
  color: white;
}
.contact-me {
  vertical-align: middle;
  margin-right: 0.3rem;
}
</style>
