// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserDashboard from '@/components/UserDashboard.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserModalities from '@/components/UserModalities.vue'
import UserClasses from '@/components/UserClasses.vue'
import UserPayment from '@/components/UserPayment.vue'
import PaymentReceipts from '@/components/PaymentReceipts.vue'
import CadastrarPagamento from '@/components/CadastrarPagamento.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/dashboard/:userId',
    name: 'UserDashboard',
    component: UserDashboard,
    props: true,
    children: [
      {
        path: 'profile',
        name: 'UserProfile',
        component: UserProfile,
        props: true
      },
      {
        path: 'modalities',
        name: 'UserModalities',
        component: UserModalities,
        props: true
      },
      {
        path: 'classes',
        name: 'UserClasses',
        component: UserClasses,
        props: true
      },
      {
        path: 'payment',
        name: 'UserPayment',
        component: UserPayment,
        props: true
      },
      {
        path: 'receipts',
        name: 'PaymentReceipts',
        component: PaymentReceipts,
        props: true
      },
      {
        path: 'register-payment',
        name: 'RegisterPayment',
        component: CadastrarPagamento,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
