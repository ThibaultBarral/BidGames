import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { yesAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register"),
  },
  {
    path: "/secure",
    name: "Secure",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Secure.vue"),
  },
  {
    path: "/additem",
    name: "AddItem",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddItem.vue"),
  },
  {
    path: "/favoris",
    name: "Favoris",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Favoris.vue"),
  },
  {
    path: "/makebid",
    name: "MakeBid",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/MakeBid.vue"),
  },
  {
    path: "/article",
    name: "Article",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Article.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.yesAuth)) {
    if (localStorage.token != null) {
      if (localStorage.token == "test") {
        next();
      }
      fetch("http://localhost:3000/", {
        method: "get",
        credentials: "same-origin",
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          "user-token": localStorage.token,
          "app-token": "devtoken",
        },
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          if (Object.keys(JSON.parse(data)).includes("user_uuid")) {
            next();
          } else {
            next({
              path: "/login",
              query: { redirect: to.fullPath },
            });
          }
        });
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    }
    next();
  }
  next();
});
