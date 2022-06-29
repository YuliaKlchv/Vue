import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

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
        component:() =>import('../components/pages/Valet.vue')
      },
      {
        path: '/Adr', name:'Adr',
        component:() =>import('../components/pages/Adr.vue')
      },
      {
        path: '/Brain', name:'Brain',
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
