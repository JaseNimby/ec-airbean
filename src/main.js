import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menu from './assets/data/menu.json'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      coffeeMenu: menu.menu,
      orderArray: [],
      profileInfo: [{ orderId: 3957, mail: "alice@wonderland.com", total: 54, date: 2002 }]
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
