import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import NotesView from '../views/NotesView';
import RegistrView from '../views/RegistrView';
import CreateView from '../views/CreateView';
import NoteView from '../views/NoteView';


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
    path: '/new',
    name: 'new',
    component: CreateView
  },

  {
    path: '/note',
    name: 'note',
    component: NoteView
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to) => {
  const publicPages = ["/register","/login"];
  const token = localStorage.getItem("token");
  if(!publicPages.includes(to.path) && !token) {
    return "/login";
  }
});

export default router;
