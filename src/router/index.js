import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/login_page.vue'
import HomeView2 from '../components/signup.vue'
import HomeView3 from '../components/To-Do-List-Kanban.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/login', component : HomeView, alias: '/'},
    {path: '/signup', component : HomeView2},
  {path: '/todo', component : HomeView3},
  ]
})

export default router
