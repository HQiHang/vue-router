// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Html from './components/Html'
import Css from './components/Css'
import JavaScript from './components/JavaScript'
import JQuery from './components/JQuery'
import Sass from './components/Sass'
import Less from './components/Less'

import Vuev from './components/JavaScript/Vue'
import Angular from './components/JavaScript/Angular'
import React from './components/JavaScript/React'

import VueRouterv from './components/JavaScript/Vue/VueRouter'
import Vuexv from './components/JavaScript/Vue/Vuex'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: '/html',
    component: Html,
    name: 'Html'
  },
  {
    path: '/css',
    component: Css,
    name: 'Css'
  },
  {
    path: '/javascript',
    component: JavaScript,
    name: 'JavaScript',
    redirect: '/vue',
    children: [
      {
        path: '/vue',
        component: Vuev,
        name: 'Vuev',
        redirect: '/vuerouter',
        children: [
          {
            path: '/vuerouter',
            component: VueRouterv,
            name: 'VueRouterv'
          },
          {
            path: '/vuex',
            component: Vuexv,
            name: 'Vuexv'
          }
        ]
      },
      {
        path: '/angular',
        component: Angular,
        name: 'Angular'
      },
      {
        path: '/react',
        component: React,
        name: 'React'
      }
    ]
  },
  {
    path: '/jquery',
    component: JQuery,
    name: 'JQuery'
  },
  {
    path: '/sass',
    component: Sass,
    name: 'Sass'
  },
  {
    path: '/less',
    component: Less,
    name: 'Less'
  },
  {
    path: '/',
    redirect: '/html'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

router.beforeEach((to, from, next) => {
   if(to.path === '/sass'){
     alert("请先学习CSS3");
     next('/css');
   }else{
     next();
   }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
