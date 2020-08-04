import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/aaa'
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: () => import('../views/a')
  },
  {
    path: '/bbb',
    name: 'bbb',
    component: () => import('../views/b')
  }
]

const router = new VueRouter({
  routes
})

export default router
