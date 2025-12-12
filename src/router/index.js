import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SignupPage from '../views/SignupPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/signup', component: SignupPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
