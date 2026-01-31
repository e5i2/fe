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
{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'login',
  component: LoginView
},
{
  path: '/home',
  name: 'home',
  component: HomeView
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
}

        }
    ]
})

export default router
