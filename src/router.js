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
    }/* ,
    {
      path: '/customerdetails/:id',
      name: 'customerdetails',
      component: CustomerDetails
    } */
  ]
})
export default router
