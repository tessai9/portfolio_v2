<template lang="html">
  <vs-row vs-type="flex" vs-justify="center" vs-align="center">
    <vs-col vs-w="6" vs-justify="center">
      <p>兵庫県在住のエンジニアです。</p>
      <p>
        医療機関向け自社製システムを開発・販売する会社を経て、<br>
        現在は大阪のSES会社にてWeb系技術を中心とした開発案件のPL, PGを担当しています。<br>
        フロントエンド、バックエンド、インフラ周りまでの一通りは業務経験があります。
      </p>
      <p>
        また、個人的に三宮.devというエンジニアコミュニティを運営しており、<br>
        月１のペースでもくもく会や勉強会を開催しています。
      </p>
    </vs-col>
    <vs-col vs-justify="center" vs-w="2">
      <vs-image :src="myProfileImage" hever="zoom" alternating></vs-image>
    </vs-col>
  </vs-row>
</template>

<script>
const profImg = require("@/assets/myprof.png")

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
</style>
