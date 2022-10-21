import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import NotesView from '../views/NotesView'
import RegistrView from '../views/RegistrView'
import CreateView from '../views/CreateView'


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
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
