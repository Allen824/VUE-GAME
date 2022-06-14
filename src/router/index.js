import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BattleView from '../views/BattleView.vue'
import VictoryView from '../views/VictoryView.vue'
import DefeatView from '../views/DefeatView.vue'
import MoveInfoView from '../views/MoveInfo.vue'
import BattleInfoView from '../views/BattleInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/battle',
    name: 'battle',
    component: BattleView,
  },
  {
    path: '/victory',
    name: 'victory',
    component: VictoryView
  },
  {
    path: '/defeat',
    name: 'defeat',
    component: DefeatView
  },
  {
    path: '/MoveInfo',
    name: 'moveInfo',
    component: MoveInfoView
  },
  {
    path: '/BattleInfo',
    name: 'battleInfo',
    component: BattleInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
