import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import NotesView from '../views/NotesView'
import RegistrView from '../views/RegistrView'


const routes = [
  {
    path: '/',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
