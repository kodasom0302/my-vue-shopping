import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/customer/Main/MainView.vue'
import ProductDetailsView from '@/views/customer/ProductDetails/ProductDetailsView.vue'
import PaymentPageView from '@/views/customer/PaymentPage/PaymentPageView.vue'
import ProductListView from '@/views/customer/ProductList/ProductListView.vue'
import ProductAdminView from '@/views/admin/ProductAdmin/ProductAdminView.vue'
import ImgPreview from '@/views/admin/ProductAdmin/imgPreview.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/productdetails',
    name: '/productdetails',
    component: ProductDetailsView
  },
  {
    path: '/paymentpage',
    name: '/paymentpage',
    component: PaymentPageView
  },
  {
    path: '/productlist',
    name: '/productlist',
    component: ProductListView
  },
  {
    path: '/productadmin',
    name: '/productadmin',
    component: ProductAdminView
  },
  {
    path: '/productadd',
    name: '/productadd',
    component: ImgPreview
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
