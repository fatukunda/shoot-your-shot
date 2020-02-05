import Vue from 'vue';
import Vuex from 'vuex';
import signup from './modules/signup';
import shots from './modules/shots';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signup,
    shots,
  },
});
