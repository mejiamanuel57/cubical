import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Services from '@/components/services/index'
import About from '@/components/about/index'
import Contact from '@/components/contact/index'
import PageNotFound from '@/components/shared/pageNotFound'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Services', name: 'Services', component: Services },
  { path: '/About', name: 'About', component: About },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash // scroll to the hash
      }
    }
    return { x: 0, y: 0 } // scroll to the top
  }
})
