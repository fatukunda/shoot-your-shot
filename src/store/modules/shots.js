/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-return */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
import Vue from 'vue';
import { getTotalLikes } from '../../utils/util';

const firebase = require('../../config/firebase');

const state = {
  shot: null,
  shots: null,
  topShots: null,
  topShooters: null,
  nextShots: null,
  lastVisible: null,
  firstVisible: null,
};

const getters = {
  shot: state => state.shot,
  shots: state => state.shots,
  topShots: state => state.topShots,
  topShooters: state => state.topShooters,
  nextShots: state => state.nextShots,
  lastVisible: state => state.lastVisible,
  firstVisible: state => state.firstVisible,
};

const mutations = {
  setCreateShot: (state, shot) => (state.shot = shot),
  setAllShots: (state, shots) => (state.shots = shots),
  setTopShots: (state, topShots) => (state.topShots = topShots),
  setTopShooters: (state, topShooters) => (state.topShooters = topShooters),
  setNextShots: (state, nextShots) => (state.nextShots = nextShots),
  setLastVisible: (state, lastVisible) => (state.lastVisible = lastVisible),
  setFirstVisible: (state, firstVisible) => (state.firstVisible = firstVisible),
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
    firebase.shotsCollection.orderBy('createdOn', 'desc').limit(4).onSnapshot((querySnapShot) => {
      const lastVisible = querySnapShot.docs[querySnapShot.docs.length - 1];
      const firstVisible = querySnapShot.docs[0];
      const shots = [];
      querySnapShot.forEach((doc) => {
        const shot = doc.data();
        shot.id = doc.id;
        shots.push(shot);
      });
      commit('setLoading', false);
      commit('setAllShots', shots);
      commit('setLastVisible', lastVisible);
      commit('setFirstVisible', firstVisible);
    });
  },
  fetchTopShots({ commit }) {
    firebase.shotsCollection.orderBy('likes', 'desc').limit(10).onSnapshot((querySnapShot) => {
      const topShots = [];
      querySnapShot.forEach((doc) => {
        const shot = doc.data();
        shot.id = doc.id;
        topShots.push(shot);
      });
      commit('setTopShots', topShots);
    });
  },
  fetchTopShooters({ commit }) {
    firebase.shotsCollection.orderBy('likes', 'desc').onSnapshot((querySnapShot) => {
      const shots = [];
      querySnapShot.forEach((doc) => {
        const shot = doc.data();
        shot.id = doc.id;
        shots.push(shot);
      });
      const totalLikes = getTotalLikes(shots);
      totalLikes.sort((a, b) => a.likes - b.likes);
      commit('setTopShooters', totalLikes);
    });
  },
  fetchNextShots({ commit }, lastVisible) {
    const nextShots = [];
    firebase.shotsCollection
      .orderBy('createdOn', 'desc')
      .limit(4)
      .startAfter(lastVisible.data().createdOn)
      .onSnapshot((querySnapShot) => {
        const lastVisible = querySnapShot.docs[querySnapShot.docs.length - 1];
        const firstVisible = querySnapShot.docs[0];
        querySnapShot.forEach((doc) => {
          const shot = doc.data();
          shot.id = doc.id;
          nextShots.push(shot);
        });
        commit('setAllShots', nextShots);
        commit('setLastVisible', lastVisible);
        commit('setFirstVisible', firstVisible);
      });
  },
  fetchPreviousShots({ commit }, startEndOptions) {
    const { firstVisible } = startEndOptions;
    const prevShots = [];
    firebase.shotsCollection
      .orderBy('createdOn', 'desc')
      .limit(4)
      .endBefore(firstVisible.data().createdOn)
      .onSnapshot((querySnapShot) => {
        const lastVisible = querySnapShot.docs[querySnapShot.docs.length - 1];
        const firstVisible = querySnapShot.docs[0];
        querySnapShot.forEach((doc) => {
          const shot = doc.data();
          shot.id = doc.id;
          prevShots.push(shot);
        });
        commit('setAllShots', prevShots);
        commit('setLastVisible', lastVisible);
        commit('setFirstVisible', firstVisible);
      });
  },
  reactionToShot({ commit }, shotInfo) {
    const {
      shotId, likes, dislikes, neutral, receivedReaction, userId,
    } = shotInfo;
    const likeDocId = `${userId}_${shotId}_lk`;
    const dislikeDocId = `${userId}_${shotId}_dsl`;
    const neutralDocId = `${userId}_${shotId}_ntl`;
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
          firebase.reactionsCollection
            .doc(likeDocId)
            .set({
              shotId,
              userId,
            })
            .then(() => {
              firebase.shotsCollection.doc(shotId).update({
                likes: likes + 1,
              });
            });
        })
        .catch((err) => {
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
          firebase.reactionsCollection
            .doc(neutralDocId)
            .set({
              shotId,
              userId,
            })
            .then(() => {
              firebase.shotsCollection.doc(shotId).update({
                neutral: neutral + 1,
              });
            });
        })
        .catch((err) => {
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
          firebase.reactionsCollection
            .doc(dislikeDocId)
            .set({
              shotId,
              userId,
            })
            .then(() => {
              firebase.shotsCollection.doc(shotId).update({
                dislikes: dislikes + 1,
              });
            });
        })
        .catch((err) => {
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
