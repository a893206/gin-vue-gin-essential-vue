import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 1、检查语法错误 2、检查代码规范
const name = 'cr';

function sayHello(who) {
  console.log(`hello ${who}`);
}

sayHello(name);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
