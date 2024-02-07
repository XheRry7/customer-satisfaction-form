import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/UserLogin.vue";
import Register from "../views/UserRegister.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  
  if (to.path === "/login" && currentUser) {
    next("/");
  } else if (to.matched.some((record) => record.meta.requiresAuth) && !currentUser) {
    next("/login");
  } else {
    next();
  }
});


export default router;
