import Vue from 'vue'
import App from './App.vue'
import VeuResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VeuResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes, 
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});