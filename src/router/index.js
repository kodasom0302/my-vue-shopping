import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/Main/MainView.vue'
import ProductListView from '@/views/Product/ProductListView.vue'

const routes = [
  {
    path: '/main',
    name: '/',
    component: MainView
  },
  {
    path: '/',
    name: '/',
    component: ProductListView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
