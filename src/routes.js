import Home from "@/components/Home.vue"
import Works from "@/components/Works.vue"

let routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/works",
    name: "works",
    component: Works
  },
]

export default routes
