import Vue from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'


import AminoAcid from '@/pages/AminoAcid'
import KnotWeed from '@/pages/KnotWeed'
import Vision from '@/pages/Vision'

const routes =[
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
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router