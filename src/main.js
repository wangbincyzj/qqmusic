import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from "@/assets/js/utils";

import "@/assets/css/main.css"

Vue.config.productionTip = false;

utils.resetHtml();  // 重置html的fontsize
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


Vue.prototype.$cache = vm.$store.state.cache;



