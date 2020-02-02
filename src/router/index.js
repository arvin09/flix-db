import Vue from "vue";
import VueRouter from "vue-router";
import Movie from "../views/Movies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Movie
  },
  {
    path: "/*/:category",
    name: "movie",
    component: Movie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
