import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

import '@/utils/navbar-burger.js'

router.beforeResolve((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
