import { createWebHashHistory, createRouter } from 'vue-router'


import AminoAcid from '@/pages/AminoAcid'
import KnotWeed from '@/pages/KnotWeed'
import Vision from '@/pages/Vision'
import MiNTNews from '@/pages/MiNTNews/MiNTNews.vue'
import MiNTNewsDetail from '@/pages/MiNTNews/MiNTNewsDetail.vue'
import Home from '@/pages/Home'
import BioIntelligent from '@/pages/BioIntelligent'
import CorporateVision from '@/pages/CorporateVision'
import NewMaterial from '@/pages/NewMaterial'

const routes = [
  {
    path: '/',
    name: '/',
    component: Vision,
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
    path: '/vision',
    name: 'vision',
    component: Vision
  },
  {
    path: '/mintNews',
    name: 'mintNews',
    component: MiNTNews
  },
  {
    path: '/mintNews/detail/:configId',
    name: 'mintNewsDetail',
    component: MiNTNewsDetail
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { unRequiresHeader: true }

  },
  {
    path: '/bioIntelligent',
    name: 'bioIntelligent',
    component: BioIntelligent,
    meta: { unRequiresHeader: true }
  },
  {
    path: '/corporate',
    name: 'corporate',
    component: CorporateVision,
    meta: { unRequiresHeader: true }

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