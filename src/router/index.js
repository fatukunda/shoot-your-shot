import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/shots/create',
    name: 'create',
    component: () => import('../components/CreateShot.vue'),
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import('../components/Leaderboard.vue'),
  },
  {
    path: '/shots',
    name: 'shots',
    component: () => import('../components/Shots.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/SignUp.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../components/SignIn.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
