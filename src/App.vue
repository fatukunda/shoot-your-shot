<template>
  <div id="app" class="container-fluid">
    <Navbar />
    <div class="row mt-4">
      <div class="col-md-3">
        <TopShooters/>
      </div>
      <div class="col-md-6">
        <router-view />
      </div>
    </div>
    <hr>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import TopShooters from '@/components/TopShooters.vue';

export default {
  components: {
    Navbar,
    Footer,
    TopShooters,
  },
};
</script>
<style>
#app {
  font-family: "EB Garamond", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
