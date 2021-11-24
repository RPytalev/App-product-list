import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductAdd from '../views/ProductAdd.vue'
import PageLayout from '../views/PageLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: PageLayout,
    children: [
      {
        path: '/',
        name: 'ProductList',
        component: ProductList
      },
      {
        path: '/ProductAdd',
        name: 'ProductAdd',
        component: ProductAdd
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
