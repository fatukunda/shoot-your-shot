<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Shoot Your Shot</a>
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
      <router-link to="/shots/create">
        <button class="btn btn-outline-warning btn-sm" type="submit">Shoot a shot</button>
      </router-link>
      <router-link to="/signup">
        <button class="btn btn-outline-success ml-2 btn-sm" type="submit">Register</button>
      </router-link>
      <router-link to="/signout">
        <button class="btn btn-outline-info ml-2 btn-sm" type="submit">Sign Out</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
</style>
