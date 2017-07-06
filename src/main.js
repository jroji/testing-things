// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './modules/home/Home.vue'
import Contact from './modules/contact/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/develop', component: Contact }
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: require('./main.html'),
  router: new VueRouter({ routes })
})
