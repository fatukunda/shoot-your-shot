<template>
  <nav class="nav-bar">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Shoot Your Shot</h1>
        <hr />
        <div class="col-md-12">
          <router-link to="/" class="mr-2">Home</router-link>|
          <router-link to="/about" class="mr-2 ml-2">About</router-link>|
          <router-link to="/shots" class="mr-2 ml-2">Shots</router-link>|
          <router-link to="/shooters" class="ml-2">Shooters</router-link>
        </div>
      </div>
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
