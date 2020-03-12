import Vue from 'vue'
import App from './App.vue'
import VeuResource from 'vue-resource';

Vue.use(VeuResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
