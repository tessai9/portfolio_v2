import Vue from "vue"
import Vuesax from "vuesax"
import VueRouter from "vue-router"
import App from "@/App.vue"
import routesArray from "@/routes.js"
import "vuesax/dist/vuesax.css"
import "material-icons/iconfont/material-icons.css";
import "@/assets/animate.css"

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: routesArray,
})

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
