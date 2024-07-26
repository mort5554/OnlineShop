import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPageView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import UserAccountView from '@/views/UserAccountView.vue'
import ErrorView from '@/views/ErrorView.vue'
import PageUnderConstruction from '@/views/PageUnderConstruction.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/SignIn/',
      name: 'LogInView',
      component: SignIn
    },
    {
      path: '/SignUp/',
      name: 'SignUpView',
      component: SignUp
    },
    {
      path: '/Account/',
      name: 'UserAccountView',
      component: UserAccountView,
      children: [
        {
          path: 'Orders',
          component: PageUnderConstruction
        },
        {
          path: 'Favourites',
          component: PageUnderConstruction
        },
        {
          path: 'ShippingInformations',
          component: PageUnderConstruction
        },
        {
          path: 'Reviews',
          component: PageUnderConstruction
        }
      ]
    },
    //Catch all other paths
    {
      path: '/:catchall(.*)*',
      name: 'Not found',
      component: ErrorView
    }
  ]
})

export default router
