/* eslint-disable no-useless-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import router from '../../router';

const firebase = require('../../config/firebase');

const state = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const getters = {
  user: state => state.user,
  isLoggedIn: state => state.isLoggedIn,
  isLoading: state => state.isLoading,
  isError: state => state.error,
};

const actions = {
  signup({ commit }, userInfo) {
    const { email, username, password } = userInfo;
    commit('setLoading', true);
    firebase.usernamesCollection.doc(username.toLowerCase()).get().then((doc) => {
      if (doc.exists) {
        commit('setLoading', false);
        commit('setError', 'Username already taken.');
        return;
      }
      firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          data.user.updateProfile({ displayName: username }).then(() => {
            firebase.usersCollection.doc(data.user.uid).set({
              email,
              username,
            });
            firebase.usernamesCollection.doc(username.toLowerCase()).set({
              username,
            });
            commit('setLoading', false);
            commit('setError', null);
            commit('setLoggedIn', true);
            const user = {
              id: data.user.uid,
              displayName: data.user.displayName,
              email: data.user.email,
            };
            commit('setUser', user);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/');
          });
        })
        .catch((err) => {
          commit('setLoading', false);
          commit('setError', err);
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('user');
        });
    });
  },
  signin({ commit }, userInfo) {
    const { email, password } = userInfo;
    commit('setLoading', true);
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        commit('setLoading', false);
        commit('setError', null);
        commit('setUser', data.user);
        commit('setLoggedIn', true);
        const user = {
          id: data.user.uid,
          displayName: data.user.displayName,
          email: data.user.email,
        };
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/');
      })
      .catch((err) => {
        commit('setLoading', false);
        commit('setError', err);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
      });
  },
  logout({ commit }) {
    firebase.auth.signOut().then(() => {
      commit('setUser', null);
      commit('setLoggedIn', false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      router.push('/');
    }).catch((err) => {
      commit('setError', err);
    });
  },
};
const mutations = {
  setUser: (state, user) => (state.user = user),
  setLoading: (state, isLoading) => (state.isLoading = isLoading),
  setLoggedIn: (state, isLoggedIn) => (state.isLoggedIn = isLoggedIn),
  setError: (state, error) => (state.error = error),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
