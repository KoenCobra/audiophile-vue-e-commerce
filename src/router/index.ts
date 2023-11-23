import { createRouter, createWebHistory } from 'vue-router'
import CheckoutLayout from '@/layouts/CheckoutLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomePage.vue'),
      meta: { layout: MainLayout }
    },
    {
      path: '/products',
      component: () => import('../views/Products.vue'),
      meta: { layout: MainLayout },
      children: [
        {
          path: ':category',
          component: () => import('../components/Category.vue'),
          meta: { layout: MainLayout }
        }
      ]
    },
    {
      path: '/products/:category/:id',
      component: () => import('../views/ProductDetails.vue'),
      meta: { layout: MainLayout }
    },
    {
      path: '/checkout',
      component: () => import('../views/Checkout.vue'),
      meta: { layout: CheckoutLayout }
    }
  ]
})

export default router
