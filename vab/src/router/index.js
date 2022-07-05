import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import axios from 'axios'

const isAuthorized = function (to, from, next) {
  const token = window.localStorage.getItem("token");
  if (token) {
    next();
  } else {
    next("Login");
  }
 }

/* axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem("token");
      if(token && !config.headers.Authorization){
          config.headers.Authorization =  `Bearer ${token}`
      }
      return config;
  } ,
  error => Promise.reject(error)
)*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      component: Home,
      children: [

        {
          path: '/Valet', name: 'Valet',
          beforeEnter: isAuthorized,
          component: () => import('../components/pages/Valet.vue')
        },
        {
          path: '/Adr', name: 'Adr',
          beforeEnter: isAuthorized,
          component: () => import('../components/pages/Adr.vue')
        },
        {
          path: '/Brain', name: 'Brain',
          beforeEnter: isAuthorized,
          component: () => import('../components/pages/Brain.vue')
        },
        {
          path: 'Login', name: 'Login',
          component: () => import('../components/Login.vue')

        },
        {
          path: 'Register', name: 'Register',
          component: () => import('../components/Register.vue')
        }
      ]
    }
  ]
})



export default router
