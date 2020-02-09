<template>
  <div>
    <div v-show="isLoading" class="spin row justify-content-center align-items-center">
      <div class="spinner-grow text-warning spin-item" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
      <h4 class="display-5 pl-2" v-show="!isLoading">Leaderboard</h4>
    <table class="table table-hover" v-show="!isLoading">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Username</th>
          <th scope="col"># of shots</th>
          <th scope="col">Avg. likes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(topShooter, key) in topShooters" :key="topShooter.username">
          <th scope="row">{{key + 1}}</th>
          <td> <router-link to="/shooters/:id">{{`@${topShooter.username}`}}</router-link></td>
          <td>{{topShooter.numberOfShots}}</td>
          <td>{{topShooter.AvgLikes}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Leaderboard',
  computed: mapGetters(['isLoading', 'topShooters']),
  methods: mapActions(['fetchTopShooters']),
  created() {
    this.fetchTopShooters();
  },
};
</script>

<style scoped>
.spin {
  height: 80vh;
}
.spin-item {
  width: 5rem;
  height: 5rem;
}
</style>
