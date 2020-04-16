<template lang="html">
  <div>
    <vs-divider position="left"><h1>Profile</h1></vs-divider>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" class="profile_component">
      <vs-col vs-w="6" vs-justify="center">
        <p>兵庫県在住のエンジニアです。</p>
        <p>
          自社製の医療機関向けシステムを開発・販売する会社を経て、<br>
          現在は2社目となる大阪のSES会社にてWeb系技術を中心としたSI案件のPL, PGを担当しています。<br>
          フロントエンド、バックエンド、インフラ周りまでの一通りは業務経験があります。
        </p>
        <p>
          主にWeb系の技術が好きですが、その中でも言語ではRuby、フレームワークではVue.jsがお気に入りです。<br>
          最近はRust、Aframe、AR/VRの勉強もしています。
        </p>
        <p>
          また、個人的に三宮.devというエンジニアコミュニティを運営しており、<br>
          月１のペースでもくもく会や勉強会を開催しています。<br>
          その他、姉妹コミュニティの三宮.vueの運営お手伝いもしています。
        </p>
      </vs-col>
      <vs-col class="profile_image_col" vs-offset="1" vs-justify="center" vs-w="2">
        <vs-image class="profile_image" :src="myProfileImage" hever="zoom"></vs-image>
      </vs-col>
    </vs-row>
    <vs-divider position="left"><h1>Mainly Skills</h1></vs-divider>
    <vs-row>
      <!-- <vs-images :key="categoryIndex" v-for="(category, categoryIndex) in skillCategories" class="skill_category">
        <vs-divider><h3>{{category}}</h3></vs-divider>
        <vs-image :key="imageIndex" v-for="(image, imageIndex) in skillImages[category]" :src="image" class="skill_image" />
      </vs-images> -->
      <vs-col vs-w="2"></vs-col>
      <vs-col vs-w="6">
        <vs-list>
          <vs-list-header title="Fontend" color="success"></vs-list-header>
          <vs-list-item title="Vue.js"></vs-list-item>
          <vs-list-item title="Angular"></vs-list-item>
          <vs-list-header title="Backend" color="danger"></vs-list-header>
          <vs-list-item title="Ruby"></vs-list-item>
          <vs-list-item title="PHP"></vs-list-item>
          <vs-list-item title="Symfony"></vs-list-item>
          <vs-list-item title="Ruby on Rails"></vs-list-item>
          <vs-list-header title="Others" color="warning"></vs-list-header>
          <vs-list-item title="Docker"></vs-list-item>
          <vs-list-item title="C++"></vs-list-item>
        </vs-list>
      </vs-col>
      <vs-col vs-w="2"></vs-col>
    </vs-row>
  </div>
</template>

<script>
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
