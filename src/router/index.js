import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home'
import EleTable from '../view/testFunPage/ele-table'
import TestGit from '../view/testFunPage/test-git'
import EchartsDemo from '../view/testFunPage/echarts-demo'
import Father from '../view/testCommunication/father'
import SonComp from '../view/testCommunication/son-comp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/eleTable',
    component: EleTable
  },
  {
    path: '/testGit',
    component: TestGit
  },
  {
    path: '/echartsDemo',
    component: EchartsDemo
  },
  {
    path: '/father',
    component: Father
  },
  {
    path: '/son',
    component: SonComp
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router