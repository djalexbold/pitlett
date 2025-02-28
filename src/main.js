import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.filter('formatGroup', (val) => val ? parseFloat(val).toLocaleString("ru", {useGrouping: true, maximumFractionDigits: 2 }) : 0)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
