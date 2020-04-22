<template lang="html">
    <vs-list>
      <vs-list-header
        :title="categoryName"
        :color="colorName"
        :icon="iconName"
        class="skill-category"
      ></vs-list-header>
      <transition
        enter-active-class="animated slideInRight"
        :key="index"
        v-for="(techName, index) in techList"
        :duration="1000"
        appear
      >
        <vs-list-item
          :title="techName"
        ></vs-list-item>
    </transition>
    </vs-list>
</template>

<script>
export default {
  name: "SkillList",
  props: {
    categoryName: { type: String, required: true },
    iconName: { type: String, required: true },
    colorName: { type: String, required: true },
    techList: { type: Array, required: true },
  },
}
</script>

<style lang="css" scoped>
.skill-category {
  font-size: 1.5rem;
}
</style>
