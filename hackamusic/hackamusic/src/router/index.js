import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    //Home Path
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // Top Artists Path

  {
    path:'/top-artist',
    name:'Top Artists',
    component: () => import('../views/TopArtists.vue')
  },

  // Top Tracks Path
  {
    path:'/top-tracks',
    name:'Top Tracks',
    component: () => import('../views/TopTracks.vue')
  },

  //About Path
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  // Error Path

  {
    path : '*',
    name:'Error',
    component: () => import('../views/Error.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
