import Vue from 'vue'
import Router from 'vue-router'

import AminoAcid from '@/pages/AminoAcid'
import KnotWeed from '@/pages/KnotWeed'
import Vision from '@/pages/Vision'

Vue.use(Router)

export default new Router({
    mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/vision'
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
  ],
})