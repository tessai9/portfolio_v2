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
        <vs-list>
          <vs-list-header class="skill_category" icon="phonelink" title="Fontend" color="success"></vs-list-header>
          <vs-list-item title="Vue.js"></vs-list-item>
          <vs-list-item title="Angular"></vs-list-item>
          <vs-list-header class="skill_category" icon="dns" title="Backend" color="danger"></vs-list-header>
          <vs-list-item title="Ruby"></vs-list-item>
          <vs-list-item title="PHP"></vs-list-item>
          <vs-list-item title="Symfony"></vs-list-item>
          <vs-list-item title="Ruby on Rails"></vs-list-item>
          <vs-list-header class="skill_category" icon="build" title="Others" color="warning"></vs-list-header>
          <vs-list-item title="Docker"></vs-list-item>
          <vs-list-item title="C++"></vs-list-item>
        </vs-list>
      </vs-col>
      <vs-col vs-w="2"></vs-col>
    </vs-row>
  </div>
</template>

<script>
import ProfileSentence from "@/components/ProfileSentence.vue"
import skillImgs from "@/skillImages.js"

const profImg = require("@/assets/profile_imgage.jpg")

export default {
  name: "Home",
  data() {
    return {
      myProfileImage: profImg,
      skillImages: skillImgs,
      skillCategories: Object.keys(skillImgs),
    }
  },
  components: {
    ProfileSentence
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

.skill_category {
  font-size: 1.5rem;
}
</style>
