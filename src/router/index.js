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
    name: 'Home',
    component: HomeView
  },
  {
    path: '/battle',
    name: 'Battle',
    component: BattleView,
  },
  {
    path: '/victory',
    name: 'Victory',
    component: VictoryView
  },
  {
    path: '/defeat',
    name: 'Defeat',
    component: DefeatView
  },
  {
    path: '/MoveInfo',
    name: 'MoveInfo',
    component: MoveInfoView
  },
  {
    path: '/BattleInfo',
    name: 'BattleInfo',
    component: BattleInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
