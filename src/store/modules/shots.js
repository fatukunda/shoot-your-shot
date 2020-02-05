/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
const firebase = require('../../config/firebase');

const state = {
  shot: null,
};

const getters = {
  shot: state => state.shot,
};

const mutations = {
  createShot: (state, shot) => (state.shot = shot),
};

const actions = {
  createShot({ commit }, shotDetails) {
    const {
      text, createdOn, userId, username, likes, dislikes, neutral,
    } = shotDetails;
    commit('setLoading', true);
    commit('setError', null);
    firebase.shotsCollection.add({
      createdOn,
      text,
      userId,
      username,
      likes,
      dislikes,
      neutral,
    }).then((ref) => {
      commit('setLoading', false);
      commit('setError', null);
      console.log(ref);
    }).catch((err) => {
      commit('setError', err);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
