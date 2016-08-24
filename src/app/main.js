require('styles/main.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import store from 'store'
import router from 'app/config/router'

import registerComponents from 'app/config/registerComponents'

import RootContainer from 'app/components/RootContainer'

Vue.use(Vuex)
Vue.use(VueRouter)

registerComponents(Vue)

sync(store, router)

router.start(RootContainer, '#root')
