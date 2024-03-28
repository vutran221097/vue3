import { getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("../views/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      next({ name: "LoginPage" });
    }
  } else {
    next();
  }
});

export default router;
