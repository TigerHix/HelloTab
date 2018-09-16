import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);


import VueIziToast from 'vue-izitoast';

import 'izitoast/dist/css/iziToast.css';

Vue.use(VueIziToast);

import './main.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'simplebar';
import 'simplebar/dist/simplebar.css';

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});