import Vue from 'vue';
import Notifications from 'vue-notification';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThumbsUp,
  faThumbsDown,
  faAdjust,
  faArrowCircleRight,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebase = require('./config/firebase');

library.add([faThumbsUp, faThumbsDown, faAdjust, faArrowCircleRight, faArrowCircleLeft]);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Notifications);

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit('setUser', user);
    store.commit('setLoggedIn', true);
  }
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
