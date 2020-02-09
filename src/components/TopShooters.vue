<template>
  <div class="top-shooters mb-4">
      <h5 class="pb-4 pl-4 text-warning font-weight-bold" v-show="!isLoading">Top 10 Shooters</h5>
    <ol>
      <li v-for="topShooter in topShooters" :key="topShooter.username">
        {{`@${topShooter.username}`}}
        <hr/>
      </li>
    </ol>
    <!-- <router-link to="/leaderboard" v-show="!isLoading">
        <button class="btn btn-outline-warning float-right">View Leaderboard</button>
    </router-link> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TopShooters',
  computed: mapGetters(['topShooters', 'isLoading']),
  methods: mapActions(['fetchTopShooters']),
  created() {
    this.fetchTopShooters();
  },
};
</script>

<style scoped>
.top-shooters{
    padding-right: 0;
}
.top-shooters li{
    cursor: pointer;
}
</style>
