import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../views/HomePage.vue')
    },
    {
      path: "/headphones",
      component: () => import('../views/Headphones.vue')
    },
    {
      path: "/speakers",
      component: () => import('../views/Speakers.vue')
    },
    {
      path: "/earphones",
      component: () => import('../views/Earphones.vue')
    }
  ]
})

export default router
