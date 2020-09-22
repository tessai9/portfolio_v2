import Vue from "vue"
import Vuesax from "vuesax"
import VueRouter from "vue-router"
import VueTippy, { TippyComponent } from "vue-tippy"
import App from "@/App.vue"
import routesArray from "@/routes.js"
import "vuesax/dist/vuesax.css"
import "material-icons/iconfont/material-icons.css";
import "animate.css"
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(VueRouter)
Vue.use(VueTippy)
Vue.component("tippy", TippyComponent);

const router = new VueRouter({
  mode: "history",
  routes: routesArray,
})

const SwitchDisplayWidth = 900

new Vue({
  router,
  render: h => h(App),
  methods: {
    displayForSmartPhone() {
      return window.innerWidth < SwitchDisplayWidth
    }
  }
}).$mount("#app")
