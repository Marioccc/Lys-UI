import Vue from 'vue'
import App from './App.vue'
import notice from "@/utils/create.js";

Vue.config.productionTip = false
Vue.prototype.$notice = notice

new Vue({
  render: h => h(App),
}).$mount('#app')
