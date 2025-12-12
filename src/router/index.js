import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/signup', component: SignupPage },
  { path: '/contact', component: ContactUsPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
