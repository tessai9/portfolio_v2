<template>
  <div id="app">
    <HeaderBar />
    <PortfolioContents />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue"
import PortfolioContents from "@/components/PortfolioContents.vue"

export default {
  name: "App",
  components: {
    HeaderBar,
    PortfolioContents
  }
}
</script>

<style>
</style>
