<template lang="html">
  <div>
    <vs-divider position="left"><h1>Works</h1></vs-divider>
    <vs-row vs-justify="center" vs-type="flex">
      <!-- TODO: divide each contents to store and display them by v-for loop -->
      <!-- TODO: switch display of parts syde by side or vertical arrangement by window size -->
      <vs-col vs-justify="center" vs-align="center" vs-w="5" offset="1">
        <vs-card actionable class="work_card">
          <h3 slot="header">Github</h3>
          <div slot="media">
            <tippy
              :animate-fill="false"
              placement="bottom"
              trigger="mouseenter"
              theme="light"
              maxWidth="870"
            >
              <template v-slot:trigger>
                <img :src="github_image" class="card_image_size" />
              </template>
              <span>
                <p>直近のContribution</p>
                <p><img src="https://grass-graph.moshimo.works/images/tessai9.png" /></p>
              </span>
            </tippy>
          </div>
          <div>
            <p>個人的に開発したものは全部ここにpushしてます</p>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                @click="openUrlPage('https://github.com/tessai9')"
                color="danger"
                type="gradient"
              >
                View
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="5">
        <vs-card actionable class="work_card">
          <h3 slot="header">Blog</h3>
          <div slot="media">
            <img :src="blog_image" class="card_image_size" />
          </div>
          <div>
            <p>個人開発などしていく中で得た知見を記事にして公開しています</p>
            <p>主に備忘録が多いです</p>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                @click="openUrlPage('http://tesao.work/')"
                color="danger"
                type="gradient"
              >
                View
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="5" offset="1">
        <vs-card actionable class="work_card">
          <h3 slot="header">三宮.dev, 三宮.vue</h3>
          <div slot="media">
            <img :src="community_image" class="card_image_size" />
          </div>
          <div>
            <p>2018年10月～ 個人的に運営しているエンジニアコミュニティです</p>
            <p>月一回ペースで Offline / Online の勉強会を開催しています</p>
            <p>また、姉妹コミュニティである三宮.vueのお手伝いもしています</p>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                @click="openUrlPage('https://kobe-sannomiya-dev.connpass.com/')"
                color="danger"
                type="gradient"
                style="margin-right: 0.5rem;"
              >
                View 三宮.dev
              </vs-button>
              <vs-button
                @click="openUrlPage('https://kobe-sannomiya-vue.connpass.com/')"
                color="primary"
                type="gradient"
              >
                View 三宮.vue
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="5">
        <vs-card actionable class="work_card">
          <h3 slot="header">有言実GO</h3>
          <div slot="media">
            <a href="http://www.yugenjigo.work/">
              <img :src="yugenjigo_image" class="card_image_size" />
            </a>
          </div>
          <div>
            <p>個人で開発したWebアプリです</p>
            <p>Herokuのfreeプランで運用しているため、初回アクセス時は読み込みが長いですが利用可能です</p>
            <p>Ruby on Rails + Vue.js で出来ています</p>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                @click="openUrlPage('http://www.yugenjigo.work/')"
                color="danger"
                type="gradient"
              >
                View
              </vs-button>
            </vs-row>
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
  methods: {
    openUrlPage(url) {
      window.open(url, "_blank")
    },
  }
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
