<template lang="html">
  <div>
    <!-- Profile about me -->
    <vs-divider position="left"><h1>Profile</h1></vs-divider>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" class="profile-component">
      <vs-col v-if="displayVertical" class="profile-image-col" vs-offset="2" vs-justify="center" vs-w="8">
        <vs-image class="profile-image" :src="myProfileImage" hever="zoom"></vs-image>
      </vs-col>
      <vs-col :vs-w="displayVertical ? 8 : 6" :vs-offset="displayVertical ? 2 : 0" :class="{ profile_text_vertical : displayVertical }" vs-justify="center">
        <ProfileSentence />
      </vs-col>
      <vs-col v-if="!displayVertical" class="profile-image-col" vs-offset="1" vs-justify="center" vs-w="2">
        <vs-image class="profile-image" :src="myProfileImage" hever="zoom"></vs-image>
      </vs-col>
    </vs-row>
    <!-- My mainly skills -->
    <vs-divider position="left"><h1>Mainly Skills</h1></vs-divider>
    <vs-row>
      <vs-col vs-w="2"></vs-col>
      <vs-col vs-w="6">
        <SkillList
          :key="index"
          v-for="(category, index) in skillCategories"
          :categoryName="category"
          :colorName="skills[category].color_name"
          :iconName="skills[category].icon_name"
          :techList="skills[category].techs"
        />
      </vs-col>
      <vs-col vs-w="2"></vs-col>
    </vs-row>
  </div>
</template>

<script>
import ProfileSentence from "@/components/ProfileSentence.vue"
import SkillList from "@/components/SkillList.vue"
import SkillsStore from "@/SkillsStore.js"

export default {
  name: "Home",
  data() {
    return {
      myProfileImage: require("@/assets/profile_imgage.jpg"),
      skills: SkillsStore,
      skillCategories: Object.keys(SkillsStore),
      displayVertical: false,
    }
  },
  mounted() {
    this.checkForResize()
    window.addEventListener("resize", this.checkForResize)
  },
  methods: {
    checkForResize() {
      this.displayVertical = this.$root.displayForSmartPhone();
    },
  },
  components: {
    ProfileSentence,
    SkillList,
  },
}
</script>

<style lang="css" scoped>
.profile-component {
  margin-top: 2rem;
}
.profile-image-col {
  min-height: 250px;
}
.profile-image {
  width: 100%;
  max-width: 350px;
}
.profile_text_vertical {
  margin-top: 1rem;
}
</style>
