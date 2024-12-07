import { createMemoryHistory, createRouter } from 'vue-router'


import AminoAcid from '@/pages/AminoAcid'
import KnotWeed from '@/pages/KnotWeed'
import Vision from '@/pages/Vision'
import Home from '@/pages/Home'

const routes = [
  {
    path: '/',
    name: '/',
    component: Vision
  },
  {
    path: '/aminoAcid',
    name: 'aminoAcid',
    component: AminoAcid
  },
  {
    path: '/knotWeed',
    name: 'knotWeed',
    component: KnotWeed
  },
  {
    path: '/vision',
    name: 'vision',
    component: Vision
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router