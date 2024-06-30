import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/MyFarm",
    name: "MyFarm",
    component: () =>
      import(/* webpackChunkName: 'MyFarm' */ "../views/MyFarm.vue"),
  },
  {
    path: "/FindSpecialists",
    name: "FindSpecialists",
    component: () =>
      import(
        /* webpackChunkName: 'FindSpecialists' */ "../views/FindSpecialists.vue"
      ),
  },
  {
    path: "/Offers",
    name: "Offers",
    component: () =>
      import(/* webpackChunkName: "Offers" */ "../views/Offers.vue"),
  },
  {
    path: "/Chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: 'Chat' */ "../views/Chat.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
