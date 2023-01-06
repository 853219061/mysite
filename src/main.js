import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import "./styles/mixin.less"

import router from '@/router'

Vue.config.productionTip = false

// // dom 操作
// import styles  from './styles/message.module.less';
// console.log(styles,'styles');
// const div = document.createElement('div');
// div.className = styles.message;
// div.innerHTML = "123456"
// document.body.appendChild(div);



import showMessage  from './utils/showMessage';
window.showMessage = showMessage;

Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
