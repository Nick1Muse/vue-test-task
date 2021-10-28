import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { router } from './router/index';
import store from './store/index';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const axiosInstance = axios.create({
  baseURL: '',
  withCredentials: false,
})

Vue.prototype.$http = axiosInstance;
Vuex.Store.prototype.$http = axiosInstance;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');
