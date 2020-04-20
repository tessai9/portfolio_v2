<template lang="html">
  <vs-list>
    <vs-list-header
      :title="category_name"
      :color="color_name"
      :icon="icon_name"
      class="skill_category"
    ></vs-list-header>
    <vs-list-item
      :key="index"
      v-for="(tech_name, index) in tech_list"
      :title="tech_name"
    ></vs-list-item>
  </vs-list>
</template>

<script>
export default {
  name: "SkillList",
  props: {
    category_name: { type: String, required: true },
    icon_name: { type: String, required: true },
    color_name: { type: String, required: true },
    tech_list: { type: Array, required: true },
  },
}
</script>

<style lang="css" scoped>
.skill_category {
  font-size: 1.5rem;
}
</style>
