<template lang="html">
  <div>
    <vs-divider position="left"><h1>Works</h1></vs-divider>
    <vs-row vs-justify="center" vs-type="flex">
      <!-- TODO: divide each contents to store and display them by v-for loop -->
      <!-- TODO: switch display of parts syde by side or vertical arrangement by window size -->
      <vs-col vs-justify="center" vs-align="center" vs-w="3">
        <vs-card class="work_card">
          <h3 slot="header">Github</h3>
          <div slot="media">
            <img :src="github_image" class="card_image_size" />
          </div>
          <div>
            <p>気になったことや個人的に開発したことをpushしています</p>
            <img src="https://grass-graph.moshimo.works/images/tessai9.png" />
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="3">
        <vs-card class="work_card">
          <h3 slot="header">Blog</h3>
          <div slot="media">
            <img :src="blog_image" class="card_image_size" />
          </div>
          <div>
            <p>個人開発などしていく中で得た知見を記事にして公開しています</p>
            <p>主に備忘録が多いです</p>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="3">
        <vs-card class="work_card">
          <h3 slot="header">三宮.dev</h3>
          <div slot="media">
            <img :src="community_image" class="card_image_size" />
          </div>
          <div>
            <p>2018年10月～ 個人的に運営しているエンジニアコミュニティです</p>
            <p>月一回ペースで Offline / Online の勉強会を開催しています</p>
            <p>また、姉妹コミュニティである<a href="">三宮.vue</a>のお手伝いもしています</p>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="3">
        <vs-card class="work_card">
          <h3 slot="header">有言実GO</h3>
          <div slot="media">
            <img :src="yugenjigo_image" class="card_image_size" />
          </div>
          <div>
            <p>個人で開発したWebアプリです</p>
            <p>Herokuのfreeプランで運用しているためアクセス時の読み込みが長いですが利用可能です</p>
            <p>Ruby on Rails + Vue.js で出来ています</p>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Works",
  data() {
    return {
      github_image: require("@/assets/works/github.jpg"),
      blog_image: require("@/assets/works/blog.png"),
      community_image: require("@/assets/works/community.png"),
      yugenjigo_image: require("@/assets/works/yugenjigo.png"),
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.work_card {
  max-width: 360px;
}
.card_image_size {
  max-width: 360px;
  /* max-height: 150px; */
}
</style>
