import Vue from 'vue'
import App from './App.vue'
import "assets/css/base.css"
import router from "./router";
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
