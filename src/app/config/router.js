import Vue from 'vue'
import VueRouter from 'vue-router'

import {routes} from 'app/config/routes'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: !!debug, // enable in development
  history: !debug, // disable in development
  linkActiveClass: 'is-active',
  transitionOnLoad: true
})

router.map(routes)

export default router
