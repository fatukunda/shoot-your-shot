<template>
  <div class="row justify-content-center mt-4">
    <Shot/>
  </div>
</template>
<script>
// @ is an alias to /src
import Shot from '../components/Shot.vue';

export default {
  name: 'home',
  components: {
    Shot,
  },
};
</script>
<style scoped>
.home{
  margin: 0 auto;
}
</style>
