import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LifecycleHook from '../views/01_LifecycleHook.vue'
import WatchEffect from '../views/02-2_WatchEffect.vue'
import AsyncComponent from '../views/07_AsyncComponent.vue'
import Transition from '../views/08-1_Transition.vue'
import Teleport from '../views/08-4_Teleport.vue'
import Suspense from '../views/08-5_Suspense.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lifecycleHook',
      name: 'lifecycleHook',
      component: LifecycleHook
    },
    {
      path: '/watchEffect',
      name: 'watchEffect', 
      component: WatchEffect
    },
    {
      path: '/asyncComponent',
      name: 'asyncComponent', 
      component: AsyncComponent
    },
    {
      path: '/transition',
      name: 'transition', 
      component: Transition
    },
    {
      path: '/teleport',
      name: 'teleport', 
      component: Teleport
    },
    {
      path: '/suspense',
      name: 'suspense', 
      component: Suspense
    },
  ]
})

export default router
