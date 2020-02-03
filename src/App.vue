<template>
  <div id="app">
    <Navbar />
    <div class="row main">
      <div class="col-md-3">
        <TopShooters/>
      </div>
      <div class="col-md-6">
        <router-view />
      </div>
    </div>
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
.main{
  margin-top: 3rem;
}
</style>
