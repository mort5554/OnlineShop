import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPageView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import UserAccountView from '@/views/UserAccountView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/SignIn',
      name: 'LogInView',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUpView',
      component: SignUp
    },
    {
      path: '/Account',
      name: 'UserAccountView',
      component: UserAccountView
    }
  ]
})

export default router
