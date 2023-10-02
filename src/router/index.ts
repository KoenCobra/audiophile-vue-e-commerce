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
      path: "/products",
      component: () => import('../views/Products.vue'),
      children: [
        {
          path: ":category",
          component: () => import('../components/Category.vue')
        },
      ],

    },
    {
      path: "/products/:category/:id",
      component: () => import('../views/ProductDetails.vue')
    }

  ]
})

export default router
