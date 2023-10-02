import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../views/HomePage.vue')
    },
    {
      path: "/:category",
      component: () => import('../views/Products.vue')
    },
    {
      path: "/products/:id",
      component: () => import('../views/ProductDetails.vue')
    }
  ]
})

export default router
