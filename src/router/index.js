import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import BlogHome from "../views/BlogHome.vue";
import BlogPost from "../views/BlogPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about",
    component: About
  },
  {
    path: "/curriculum-vitae",
    name: "curriculum-vitae",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "curriculum-vitae" */ "../views/CurriculumVitae.vue"
      )
  },
  {
    path: "/blog-posts",
    name: "blog-page-view",
    component: BlogHome
  },
  {
    path: "/blog-posts/:slug",
    name: "blog-post",
    component: BlogPost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
