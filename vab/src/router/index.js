import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const isAuthorized = function(to, from, next) {
  const token = window.localStorage.getItem("token");
  if(token) {
    next();
  }else {
    next("Login");
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    component: Home,
    children: [
      // {
      //   path: '/',
      //   component:() =>import('../../src/components/Sidebar.vue')
      // },
      {
        path: '/Valet', name:'Valet',
        beforeEnter: isAuthorized,
        component:() =>import('../components/pages/Valet.vue')
      },
      {
        path: '/Adr', name:'Adr',
        beforeEnter: isAuthorized,
        component:() =>import('../components/pages/Adr.vue')
      },
      {
        path: '/Brain', name:'Brain',
        beforeEnter: isAuthorized,
        component:() =>import('../components/pages/Brain.vue')
      },
      {
        path: 'Login', name:'Login',
        component:() =>import('../components/Login.vue')
        
      },
      {
        path: 'Register', name:'Register',
        component:() =>import('../components/Register.vue')
      }
    ]
  }
]
})



export default router
