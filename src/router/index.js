import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import GenderSelectionView from '../views/GenderSelectionView.vue'
import PhysicalInfoView from '../views/PhysicalInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfoView
    },
    {
      path: '/gender',
      name: 'gender',
      component: GenderSelectionView
    },
    {
      path: '/physical',
      name: 'physical',
      component: PhysicalInfoView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/WelcomeView.vue')
    }
  ]
})

export default router
