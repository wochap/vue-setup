require('styles/main.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import store from 'store'
import router from 'app/config/router'

import registerComponents from 'app/config/registerComponents'

import App from 'app/components/App'

Vue.use(Vuex)
Vue.use(VueRouter)

registerComponents(Vue)

sync(store, router)

router.start(App, '#app')
