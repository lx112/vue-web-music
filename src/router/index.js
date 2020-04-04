import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/",
        redirect: "/found"
      },
      {
        path: "/found",
        name: "found",
        meta: {
          index: 1
        },
        component: () => import("../views/Found")
      },
      {
        path: "/user",
        name: "user",
        meta: {
          index: 0
        },
        component: () => import("../views/User.vue")
      },
      {
        path: "/yunchun",
        name: "yunchun",
        meta: {
          index: 2
        },
        component: () => import("../views/Yunchun.vue")
      },
      {
        path: "/video",
        name: "video",
        meta: {
          index: 3
        },
        component: () => import("../views/Video.vue")
      }
    ]
  },
  {
    path: "/play-list/:id",
    name: "playList",
    component: () => import("../views/PlayList.vue")
  },
  {
    path: "/singer/:id",
    name: "singer",
    component: () => import("../views/Singer.vue")
  },
  {
    path: "/play-lists",
    name: "playLists",
    component: () => import("../views/PlayLists.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/vue-web-music/",
  routes
});

export default router;
