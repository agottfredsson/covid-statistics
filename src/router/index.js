import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../components/Start.vue'
import Sverige from '../components/Sverige.vue'
import World from '../components/World.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/sverige/:test?',
    name: 'Sverige',
    component: Sverige
  },
  {
    path: '/world',
    name: 'World',
    component: World
  },
  {
  path: '/',
  name: 'Start',
  component: Start
  }
]

const router = new VueRouter({
  routes
})

export default router
