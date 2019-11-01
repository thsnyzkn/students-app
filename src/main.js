import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/global.css'
import 'buefy/dist/buefy.css'
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
