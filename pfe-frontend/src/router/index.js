import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fonction from '../views/Fonction.vue'
import Signup from '../views/Signup.vue'
import Announces from '../views/Announces.vue'

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
    path: '/fonction',
    name: 'Fonction',
    component: Fonction
  },
  {
    path: '/register',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/announces',
    name: 'Announces',
    component: Announces
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
