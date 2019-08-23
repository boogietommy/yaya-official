import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'

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
    }
  ]
})
