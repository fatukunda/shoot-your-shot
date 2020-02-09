<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
      Shoot Your Shot
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shots" class="nav-link">Shots</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/leaderboard" class="nav-link">Leaderboard</router-link>
        </li>
      </ul>
      <span class="navbar-text mr-4" v-if="isLoggedIn">{{`@${user.displayName}`}}</span>
      <router-link to="/shots/create" v-show="isLoggedIn">
        <button class="btn btn-outline-warning btn-sm" type="submit">Shoot a shot</button>
      </router-link>
      <router-link to="/signin" v-show="!isLoggedIn">
        <button class="btn btn-outline-warning btn-sm" type="submit">Login</button>
      </router-link>
      <router-link to="/signup" v-show="!isLoggedIn">
        <button class="btn btn-outline-success ml-2 btn-sm" type="submit">Register</button>
      </router-link>
      <button
        v-show="isLoggedIn"
        class="btn btn-outline-info ml-2 btn-sm"
        @click="logout()"
      >Sign Out</button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapGetters(['user', 'isLoggedIn']),
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped>
.nav-bar {
  font-weight: bold;
  margin-top: 3rem;
}

.nav-bar a.router-link-exact-active {
  color: #c9753d;
}
img{
  border-radius: 50%;
}
</style>
