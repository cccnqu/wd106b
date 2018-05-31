import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

function setProps (route) {
  return {
    page: route.params.page || 'sms',
    domain: route.params.domain || 'all',
    // orderBy: route.params.orderBy || 'new',
    // sort: route.params.domain || 'inc',
    op: route.params.op || 'new',
    to: route.params.to || ''
  }
}

export default new Router({
  // mode: 'history',
  // base: __dirname,
  routes: [
    { path: '/', component: LandingPage },
    // { path: '/login', component: MainPage, props: { page: 'login' } },
    { path: '/:page', component: MainPage, props: setProps },
    { path: '/:page/:domain', component: MainPage, props: setProps }, // props: true
    { path: '/:page/:domain/:op', component: MainPage, props: setProps },
    { path: '/:page/:domain/:op/:to', component: MainPage, props: setProps }
    /*
    { path: '/login', component: MainPage, props: { to: 'login' } },
    { path: '/main', component: MainPage, props: { to: 'sms' } },
    { path: '/sms', component: MainPage, props: { to: 'sms' } },
    { path: '/sms/:domain', component: MainPage, props: { to: 'sms' } },
    { path: '/sms/:domain/:sortby', component: MainPage, props: { to: 'sms' } }
    */
  ]
})
