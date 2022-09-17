import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { useStore } from "@/store"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Splash",
    component: () => import("@/views/splash/index.vue"),
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: () => import("@/views/errorPages/index.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/main/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach(async (to, from, next) => {
//   const store = useStore()
//
//   store.isLoading = true
//
//   const {
//     statusCode,
//     data,
//   } = await useAuthFecth("token/refresh/").post({ refresh: store.refresh }).json()
//
//   if (statusCode.value === 200) {
//     store.token = data.value.access
//   } else {
//     store.token = null
//     store.refresh = null
//   }
//
//   if (to.name === "Login" && store.token) return next({ name: "Invoices" })
//   if (to.meta.Auth && !store.token) return next({ name: "Login" })
//   next()
// })


router.afterEach(async () => {
  const store = useStore()

  store.isLoading = false
})

export default router
