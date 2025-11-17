import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Catalogo from '@/views/Catalogo.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalogo },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin }
]

export default createRouter({
  history: createWebHistory(),
  routes
})