import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Services from '@/components/services/index'
import About from '@/components/about/index'
import Contact from '@/components/contact/index'
import PageNotFound from '@/components/shared/pageNotFound'

Vue.use(Router)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/services', name: 'services', component: Services },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '*', name: 'pageNotFound', component: PageNotFound }
]

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash // scroll to the hash
      }
    }
    return { x: 0, y: 0 } // scroll to the top
  }
})
