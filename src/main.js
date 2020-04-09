import Vue from "vue"
import Vuesax from "vuesax"
import VueRouter from "vue-router"
import App from "@/App.vue"
import routes from "@/routes.js"
import "vuesax/dist/vuesax.css"

Vue.config.productionTip = false

Vue.use(Vuesax)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
