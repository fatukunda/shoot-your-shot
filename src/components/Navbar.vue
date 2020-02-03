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
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shots" class="nav-link">Shots</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shooters" class="nav-link">Shooters</router-link>
        </li>
      </ul>
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Shoot a shot</button>
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
