<template lang="html">
  <div>
    <vs-divider position="left"><h1>Works</h1></vs-divider>
    <vs-row vs-justify="center" vs-type="flex">
      <!-- TODO: divide each contents to store and display them by v-for loop -->
      <vs-col vs-justify="center" vs-align="center" :vs-w="displayVertival ? 8 : 5" :offset="displayVertival ? 2 : 1">
        <vs-card actionable class="work-card">
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
                <img :src="githubImage" class="card-image-size" />
              </template>
              <span>
                <p>直近のContribution</p>
                <p><img src="https://grass-graph.moshimo.works/images/tessai9.png" class="github-contribution" /></p>
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
      <vs-col vs-justify="center" vs-align="center" :vs-w="displayVertival ? 8 : 5" :offset="displayVertival ? 2 : 1">
        <vs-card actionable class="work-card">
          <h3 slot="header">Blog</h3>
          <div slot="media">
            <img :src="blogImage" class="card-image-size" />
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
      <vs-col vs-justify="center" vs-align="center" :vs-w="displayVertival ? 8 : 5" :offset="displayVertival ? 2 : 1">
        <vs-card actionable class="work-card">
          <h3 slot="header">三宮.dev</h3>
          <div slot="media">
            <img :src="communityImage" class="card-image-size" />
          </div>
          <div>
            <p>2018年10月～ 個人的に運営しているエンジニアコミュニティです</p>
            <p>月一回ペースで Offline / Online の勉強会を開催しています</p>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                @click="openUrlPage('https://kobe-sannomiya-dev.connpass.com/')"
                color="danger"
                type="gradient"
                style="margin-right: 0.5rem;"
              >
                View
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" :vs-w="displayVertival ? 8 : 5" :offset="displayVertival ? 2 : 1">
        <vs-card actionable class="work-card">
          <h3 slot="header">有言実GO</h3>
          <div slot="media">
            <a href="http://www.yugenjigo.work/">
              <img :src="yugenjigoImage" class="card-image-size" />
            </a>
          </div>
          <div>
            <p>個人で開発したWebアプリです</p>
            <p>Ruby on Rails + Vue.js で出来ています</p>
            <p style="font-weight: bold; font-size: 1.1rem;">もうメンテしてないので閉鎖しました</p>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                color="danger"
                type="gradient"
                disabled
              >
                View
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <BackgroundVideo />
  </div>
</template>

<script>
import BackgroundVideo from "@/components/BackgroundVideo.vue"

export default {
  name: "Works",
  data() {
    return {
      githubImage: require("@/assets/works/github.jpg"),
      blogImage: require("@/assets/works/blog.png"),
      communityImage: require("@/assets/works/community.png"),
      yugenjigoImage: require("@/assets/works/yugenjigo.png"),
      displayVertival: false
    }
  },
  mounted() {
    this.checkForResize()
    window.addEventListener("resize", this.checkForResize)
  },
  methods: {
    openUrlPage(url) {
      window.open(url, "_blank")
    },
    checkForResize() {
      this.displayVertival = this.$root.displayForSmartPhone()
    },
  },
  components: {
    BackgroundVideo,
  }
}
</script>

<style lang="css" scoped>
.work-card {
  max-width: 360px;
}
.card-image-size {
  max-width: 360px;
}
.github-contribution {
  max-width: 100vw;
}
</style>
