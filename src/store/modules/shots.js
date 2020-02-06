/* eslint-disable no-useless-return */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
import Vue from 'vue';

const firebase = require('../../config/firebase');

const state = {
  shot: null,
  shots: null,
  topShots: null,
  topShooters: null,
};

const getters = {
  shot: state => state.shot,
  shots: state => state.shots,
  topShots: state => state.topShots,
  topShooters: state => state.topShooters,
};

const mutations = {
  setCreateShot: (state, shot) => (state.shot = shot),
  setAllShots: (state, shots) => (state.shots = shots),
  setTopShots: (state, topShots) => (state.topShots = topShots),
  setTopShooters: (state, topShooters) => (state.topShooters = topShooters),
};

const actions = {
  createShot({ commit }, shotDetails) {
    const {
      text, createdOn, authorId, username, likes, dislikes, neutral,
    } = shotDetails;
    commit('setLoading', true);
    commit('setError', null);
    firebase.shotsCollection
      .add({
        createdOn,
        text,
        authorId,
        username,
        likes,
        dislikes,
        neutral,
      })
      .then((ref) => {
        commit('setCreateShot', ref);
        commit('setLoading', false);
        commit('setError', null);
        Vue.notify({
          group: 'alerts',
          title: 'Success',
          text: 'Your Shot has been shot!',
          type: 'alert alert-success',
        });
      })
      .catch((err) => {
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
      if (shots.length > 0) {
        const topShots = [...shots];
        topShots.sort((a, b) => b.likes - a.likes);
        commit('setTopShots', topShots.slice(0, 10));
      }
    });
  },
  reactionToShot({ commit }, shotInfo) {
    const {
      shotId, likes, dislikes, neutral, receivedReaction, userId,
    } = shotInfo;
    const likeDocId = `${userId}_${shotId}_lk`;
    const dislikeDocId = `${userId}_${shotId}_dsl`;
    const neutralDocId = `${userId}_${shotId}_ntl`;
    console.log(likeDocId);
    if (receivedReaction === 'like') {
      firebase.reactionsCollection
        .doc(likeDocId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            Vue.notify({
              group: 'alerts',
              title: 'Not Allowed!',
              text: 'Your already liked this shot!',
              type: 'alert alert-danger',
            });
            return;
          }
          firebase.reactionsCollection.doc(dislikeDocId).get().then((doc) => {
            if (doc.exists) {
              firebase.reactionsCollection.doc(dislikeDocId).delete().then(() => {
                firebase.shotsCollection.doc(shotId).update({
                  dislikes: dislikes - 1,
                  likes: likes + 1,
                });
              });
              return;
            }
          });
          firebase.reactionsCollection.doc(neutralDocId).get().then((doc) => {
            if (doc.exists) {
              firebase.reactionsCollection.doc(neutralDocId).delete().then(() => {
                firebase.shotsCollection.doc(shotId).update({
                  neutral: neutral - 1,
                  likes: likes + 1,
                });
              });
              return;
            }
          });
          firebase.reactionsCollection.doc(likeDocId).set({
            shotId,
            userId,
          }).then(() => {
            firebase.shotsCollection.doc(shotId).update({
              likes: likes + 1,
            });
          });
        }).catch((err) => {
          commit('setLoading', true);
          commit('isError', err);
        });
    }
    if (receivedReaction === 'neutral') {
      firebase.reactionsCollection
        .doc(neutralDocId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            Vue.notify({
              group: 'alerts',
              title: 'Not Allowed!',
              text: 'Your already rated this Shot!',
              type: 'alert alert-danger',
            });
            return;
          }
          firebase.reactionsCollection.doc(dislikeDocId).get().then((doc) => {
            if (doc.exists) {
              firebase.reactionsCollection.doc(dislikeDocId).delete().then(() => {
                firebase.shotsCollection.doc(shotId).update({
                  dislikes: dislikes - 1,
                  neutral: neutral + 1,
                });
              });
              return;
            }
          });
          firebase.reactionsCollection.doc(likeDocId).get().then((doc) => {
            if (doc.exists) {
              firebase.reactionsCollection.doc(likeDocId).delete().then(() => {
                firebase.shotsCollection.doc(shotId).update({
                  likes: likes - 1,
                  neutral: neutral + 1,
                });
              });
              return;
            }
          });
          firebase.reactionsCollection.doc(neutralDocId).set({
            shotId,
            userId,
          }).then(() => {
            firebase.shotsCollection.doc(shotId).update({
              neutral: neutral + 1,
            });
          });
        }).catch((err) => {
          commit('setLoading', true);
          commit('isError', err);
        });
    }
    if (receivedReaction === 'dislike') {
      firebase.reactionsCollection
        .doc(dislikeDocId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            Vue.notify({
              group: 'alerts',
              title: 'Not Allowed!',
              text: 'Your already disliked this Shot!',
              type: 'alert alert-danger',
            });
            return;
          }
          firebase.reactionsCollection.doc(likeDocId).get().then((doc) => {
            if (doc.exists) {
              firebase.reactionsCollection.doc(likeDocId).delete().then(() => {
                firebase.shotsCollection.doc(shotId).update({
                  likes: likes - 1,
                  dislikes: dislikes + 1,
                });
              });
              return;
            }
          });
          firebase.reactionsCollection.doc(neutralDocId).get().then((doc) => {
            if (doc.exists) {
              firebase.reactionsCollection.doc(neutralDocId).delete().then(() => {
                firebase.shotsCollection.doc(shotId).update({
                  neutral: neutral - 1,
                  dislikes: dislikes + 1,
                });
              });
              return;
            }
          });
          firebase.reactionsCollection.doc(dislikeDocId).set({
            shotId,
            userId,
          }).then(() => {
            firebase.shotsCollection.doc(shotId).update({
              dislikes: dislikes + 1,
            });
          });
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
