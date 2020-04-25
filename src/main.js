import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/premit";
import VueWechatTitle from "vue-wechat-title";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils/ElementUI";
import "./utils/filter";
import "./utils/commonPro";
import "./assets/fonts/font.scss";

Vue.use(VueWechatTitle);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
