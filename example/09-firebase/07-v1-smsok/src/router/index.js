import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '/main/:domain',
      name: 'mainDomain',
      component: MainPage
    },
    {
      path: '/main/:domain/:sortby',
      name: 'mainDomainSortby',
      component: MainPage
    }
  ]
})
