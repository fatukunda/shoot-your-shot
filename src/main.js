import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import firebase from 'firebase';
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

library.add([faThumbsUp, faThumbsDown, faAdjust, faArrowCircleRight, faArrowCircleLeft]);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: 'AIzaSyBJaU9heV6VY3oHThcksoNoOazsuD3C2Q0',
  authDomain: 'shoot-your-shot-b37f5.firebaseapp.com',
  databaseURL: 'https://shoot-your-shot-b37f5.firebaseio.com',
  projectId: 'shoot-your-shot-b37f5',
  storageBucket: 'shoot-your-shot-b37f5.appspot.com',
  messagingSenderId: '720394397097',
  appId: '1:720394397097:web:31f00a2d559532fe7290b8',
  measurementId: 'G-0N008H7N6Y',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
