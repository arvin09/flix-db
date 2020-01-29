import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "../views/Movies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Movies
  },
  {
    path: "/movie",
    name: "movie",
    component: Movies,

    // Child routes
    children: [
      {
        path: "popular",
        name: "popular",
        component: () => import("../views/Popular.vue")
      },
      {
        path: "toprated",
        name: "toprated",
        component: () => import("../views/TopRated.vue")
      },
      {
        path: "nowplaying",
        name: "nowplaying",
        component: () => import("../views/NowPlaying.vue")
      },
      {
        path: "upcoming",
        name: "upcoming",
        component: () => import("../views/Upcoming.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
