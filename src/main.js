import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

import store from '@/store'
import axios from '@/axios'
import jquery from 'jquery'

Vue.prototype.$axios = axios;
Vue.prototype.$ = jquery;

import VueTouchRipple from 'vue-touch-ripple'
// import styles
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
// mount with global
Vue.use(VueTouchRipple,{
  // default global options
  color: '#fff',
  opacity: 0.3,
  speed: 1,
  transition: 'ease'
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
