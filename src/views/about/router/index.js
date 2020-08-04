import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ccc'
  },
  {
    path: '/ccc',
    name: 'ccc',
    component: () => import('../views/c')
  },
  {
    path: '/ddd',
    name: 'ddd',
    component: () => import('../views/d')
  }
]

const router = new VueRouter({
  routes
})

export default router
