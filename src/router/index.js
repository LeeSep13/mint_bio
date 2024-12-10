import { createWebHashHistory, createRouter } from 'vue-router'


import AminoAcid from '@/pages/AminoAcid'
import KnotWeed from '@/pages/KnotWeed'
import Vision from '@/pages/Vision'
import Home from '@/pages/Home'
import CorporateVision from '@/pages/CorporateVision'
import NewMaterial from '@/pages/NewMaterial'

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
  {
    path: '/corporate',
    name: 'corporate',
    component: CorporateVision
  },
  {
    path: '/material',
    name: 'material',
    component: NewMaterial
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router