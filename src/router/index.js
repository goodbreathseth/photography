import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
