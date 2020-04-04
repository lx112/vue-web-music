import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./utils/api"; // 导入api接口
import "vant/lib/index.css";
import "./assets/css/iconfont/iconfont.css";
import "./assets/css/reset.css";
import FastClick from "fastclick";
FastClick.attach(document.body);

import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
