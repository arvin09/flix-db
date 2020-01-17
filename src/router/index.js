import Vue from "vue";
import VueRouter from "vue-router";
import Popular from "../views/Popular.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Popular
  },
  {
    path: "/popular",
    name: "popular",
    component: Popular
  },
  {
    path: "/toprated",
    name: "toprated",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "toprated" */ "../views/TopRated.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
