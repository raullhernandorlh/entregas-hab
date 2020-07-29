import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [

  // Ruta HOME
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  // Ruta PRODUCTS
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },

  // Ruta CLIENTS
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../views/Clients.vue')
  },

  // Ruta REGISTER
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  
  //Ruta ERROR
  {
    path : '*',
    name:'Error',
    component: () => import('../views/Error.vue')
  },


  //Ruta ABOUT
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
