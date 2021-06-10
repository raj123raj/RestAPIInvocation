import Vue from 'vue'
import Router from 'vue-router'
import detailsByZipCode from './views/detailsByZipCode.vue'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/detailsByZipCode'
    },
    {
      path: '/detailsByZipCode',
      name: 'detailsByZipCode',
      component: detailsByZipCode
    }
  ]
})
export default router
