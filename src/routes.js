import Home from "@/components/Home.vue"
import Works from "@/components/Works.vue"

let routes = [
  {
    path: "/portfolio_v2",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio_v2/works",
    name: "works",
    component: Works
  },
]

export default routes
