<template>
  <div>
      <h4 class="display-5 pl-2">Shots</h4>
      <hr>
    <div class="row">
      <div class="col-md-6">
        <Shot />
      </div>
      <div class="col-md-6">
        <Shot />
      </div>
      <div class="col-md-6">
        <Shot />
      </div>
      <div class="col-md-6">
        <Shot />
      </div>
      <div class="col-md-6">
        <Shot />
      </div>
      <div class="col-md-6">
        <Shot />
      </div>
    </div>
    <div class="row mt-2 navigate">
      <div class="col-md-6 text-center">
        <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="3x" class="icon" />
      </div>
      <div class="col-md-6 text-center">
        <font-awesome-icon :icon="['fas', 'arrow-circle-right']" size="3x" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import Shot from './Shot.vue';

export default {
  name: 'Shots',
  components: {
    Shot,
  },
};
</script>

<style scoped>
.icon{
    cursor: pointer;
}
.navigate{
    margin-bottom: 4rem;
}
</style>
