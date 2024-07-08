import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/signIn',
      name: 'LogInPage',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'SignUpPage',
      component: SignUp
    }
  ]
})

export default router
