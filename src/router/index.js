import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Static from '../views/static.vue'
import History from '../views/history.vue'
import Custor from '../views/custor.vue'
import Custorb from '../views/custorb.vue'
import Custorc from '../views/custorc.vue'
import Boss from '../views/boss.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/static',
    name: 'Static',
    component: Static
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/custor',
    name: 'Custor',
    component: Custor
  },
  {
    path: '/custorb',
    name: 'Custorb',
    component: Custorb
  },
  {
    path: '/custorc',
    name: 'Custorc',
    component: Custorc
  },
  {
    path: '/boss',
    name: 'Boss',
    component: Boss
  }
]

const router = new VueRouter({
  routes
})

export default router
