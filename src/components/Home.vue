<template lang="html">
  <vs-row vs-type="flex" vs-justify="center" vs-align="center" class="profile_component">
    <vs-col vs-w="6" vs-justify="center">
      <h1>Profile</h1>
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
</template>

<script>
const profImg = require("@/assets/profile_imgage.jpg")

export default {
  name: "Home",
  data() {
    return {
      myProfileImage: profImg
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
