import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import "./styles/mixin.less"
import router from '@/router'
import './mock'

Vue.config.productionTip = false

import showMessage  from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;

import '@/api/banner';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
