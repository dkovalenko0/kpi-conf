import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../views/Home")
  },
  {
    path: "/topics",
    name: "Topics",
    meta: { layout: "main" },
    component: () => import("../views/Topics")
  },
  {
    path: "/committees",
    name: "Committees",
    meta: { layout: "main" },
    component: () => import("../views/Committees")
  },
  {
    path: "/program",
    name: "Program",
    meta: { layout: "main" },
    component: () => import("../views/Program")
  },
  {
    path: "/callforpapers",
    name: "CallForPapers",
    meta: { layout: "main" },
    component: () => import("../views/CallForPapers")
  },
  {
    path: "/forauthors",
    name: "ForAuthors",
    meta: { layout: "main" },
    component: () => import("../views/ForAuthors")
  },
  {
    path: "/speakers",
    name: "Speakers",
    meta: { layout: "main" },
    component: () => import("../views/Speakers")
  },
  {
    path: "/location",
    name: "Location",
    meta: { layout: "main" },
    component: () => import("../views/Location")
  },
  {
    path: "/contacts",
    name: "Contacts",
    meta: { layout: "main" },
    component: () => import("../views/Contacts")
  },
  {
    path: "/registration",
    name: "Registration",
    meta: { layout: "main" },
    component: () => import("../views/Registration")
  }
];

const router = new VueRouter({
  routes
});

export default router;
