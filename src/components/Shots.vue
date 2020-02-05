<template>
  <div>
    <h4 class="display-5 pl-2">Shots</h4>
    <hr />
    <div v-show="isLoading" class="spin row justify-content-center align-items-center">
      <div class="spinner-grow text-warning spin-item"  role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="row">
      <div v-for="shot in shots" :key="shot.id" class="col-md-6">
        <Shot
          :text="shot.text"
          :likes="shot.likes"
          :dislikes="shot.dislikes"
          :neutral="shot.neutral"
          :author="shot.username"
          :createdOn="shot.createdOn"
          :shotId="shot.id"
          :userId="shot.userId"
        />
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
import { mapGetters, mapActions } from 'vuex';
import Shot from './Shot.vue';

export default {
  name: 'Shots',
  components: {
    Shot,
  },
  computed: mapGetters(['shots', 'isLoading']),
  methods: {
    ...mapActions(['fetchAllShots']),
  },
  created() {
    this.fetchAllShots();
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
.navigate {
  margin-bottom: 4rem;
}
.spin{
  height: 80vh;
}
.spin-item{
  width: 5rem;
  height: 5rem;
}
</style>
