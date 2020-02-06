import firebase from 'firebase';
import 'firebase/firestore';

// firebase configurations

const config = {
  apiKey: 'AIzaSyBJaU9heV6VY3oHThcksoNoOazsuD3C2Q0',
  authDomain: 'shoot-your-shot-b37f5.firebaseapp.com',
  databaseURL: 'https://shoot-your-shot-b37f5.firebaseio.com',
  projectId: 'shoot-your-shot-b37f5',
  storageBucket: 'shoot-your-shot-b37f5.appspot.com',
  messagingSenderId: '720394397097',
  appId: '1:720394397097:web:31f00a2d559532fe7290b8',
  measurementId: 'G-0N008H7N6Y',
};
firebase.initializeApp(config);
firebase.analytics();

// firebase utils

const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;

// firebase collections

const usersCollection = db.collection('users');
const shotsCollection = db.collection('shots');
const reactionsCollection = db.collection('reactions');

export {
  db,
  auth,
  usersCollection,
  shotsCollection,
  currentUser,
  reactionsCollection,
};
