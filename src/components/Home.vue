<template lang="html">
  <div>
    <vs-divider position="left"><h1>Profile</h1></vs-divider>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" class="profile_component">
      <vs-col vs-w="6" vs-justify="center">
        <ProfileSentence />
      </vs-col>
      <vs-col class="profile_image_col" vs-offset="1" vs-justify="center" vs-w="2">
        <vs-image class="profile_image" :src="myProfileImage" hever="zoom"></vs-image>
      </vs-col>
    </vs-row>
    <vs-divider position="left"><h1>Mainly Skills</h1></vs-divider>
    <vs-row>
      <vs-col vs-w="2"></vs-col>
      <vs-col vs-w="6">
        <SkillList
          :key="index"
          v-for="(category, index) in skillCategories"
          :category_name="category"
          :color_name="skills[category].color_name"
          :icon_name="skills[category].icon_name"
          :tech_list="skills[category].techs"
        />
      </vs-col>
      <vs-col vs-w="2"></vs-col>
    </vs-row>
  </div>
</template>

<script>
import ProfileSentence from "@/components/ProfileSentence.vue"
import SkillList from "@/components/SkillList.vue"
import Skills from "@/Skills.js"

const profImg = require("@/assets/profile_imgage.jpg")

export default {
  name: "Home",
  data() {
    return {
      myProfileImage: profImg,
      skills: Skills,
      skillCategories: Object.keys(Skills),
    }
  },
  components: {
    ProfileSentence,
    SkillList,
  },
}
</script>

<style lang="css" scoped>
.profile_component {
  margin-top: 2rem;
}

.profile_image_col {
  min-height: 250px;
}

.profile_image {
  width: 100%;
  max-width: 350px;
}
</style>
