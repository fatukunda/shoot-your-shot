/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
import Vue from 'vue';

const firebase = require('../../config/firebase');

const state = {
  shot: null,
  shots: null,
};

const getters = {
  shot: state => state.shot,
  shots: state => state.shots,
};

const mutations = {
  setCreateShot: (state, shot) => (state.shot = shot),
  setAllShots: (state, shots) => (state.shots = shots),
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
      commit('setCreateShot', ref);
      commit('setLoading', false);
      commit('setError', null);
      Vue.notify({
        group: 'alerts',
        title: 'Success',
        text: 'Your Shot has been shot!',
        type: 'alert alert-success',
      });
      console.log(ref);
    }).catch((err) => {
      commit('setError', err);
      commit('setShotCreated', false);
      commit('setLoading', false);
    });
  },
  fetchAllShots({ commit }) {
    commit('setLoading', true);
    firebase.shotsCollection.orderBy('createdOn', 'desc').onSnapshot((querySnapShot) => {
      const shots = [];
      querySnapShot.forEach((doc) => {
        const shot = doc.data();
        shot.id = doc.id;
        shots.push(shot);
      });
      commit('setLoading', false);
      commit('setAllShots', shots);
    });
  },
  reactionToShot({ commit }, shotInfo) {
    const {
      shotId, likes, dislikes, neutral, receivedReaction,
    } = shotInfo;
    commit('setLoading', true);
    if (receivedReaction === 'like') {
      firebase.shotsCollection.doc(shotId).update({
        likes: likes + 1,
      }).then(() => {

      }).catch((err) => {
        commit('setLoading', true);
        commit('isError', err);
      });
    }
    if (receivedReaction === 'neutral') {
      firebase.shotsCollection.doc(shotId).update({
        neutral: neutral + 1,
      }).then(() => {

      }).catch((err) => {
        commit('setLoading', true);
        commit('isError', err);
      });
    }
    if (receivedReaction === 'dislike') {
      firebase.shotsCollection.doc(shotId).update({
        dislikes: dislikes + 1,
      }).then(() => {

      }).catch((err) => {
        commit('setLoading', true);
        commit('isError', err);
      });
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
