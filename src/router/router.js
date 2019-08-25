import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contactus from '@/pages/Contactus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '扬州鸭鸭电器有限公司官网 － 专注电热毯、暖桌宝、暖手宝、暖身贴、热水袋等取暖用品'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '企业简介 - 扬州鸭鸭电器有限公司官网 － 专注电热毯、暖桌宝、暖手宝、暖身贴、热水袋等取暖用品'
      },
      component: About,
      // component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        title: '产品展示 - 扬州鸭鸭电器有限公司官网 － 专注电热毯、暖桌宝、暖手宝、暖身贴、热水袋等取暖用品'
      },
      component: () => import(/* webpackChunkName: "product" */ '@/pages/Product.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      meta: {
        title: '联系我们 - 扬州鸭鸭电器有限公司官网 － 专注电热毯、暖桌宝、暖手宝、暖身贴、热水袋等取暖用品'
      },
      component: Contactus,
      // component: () => import(/* webpackChunkName: "contactus" */ '@/pages/Contactus.vue')
    },
  ]
})
