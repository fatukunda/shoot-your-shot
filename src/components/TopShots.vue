<template>
  <div class="top-shots mb-4">
    <div class="row">
      <div class="col-md-12">
        <h5 class="pb-4 pl-4 text-warning font-weight-bold" v-show="!isLoading">Top Shots</h5>
        <router-link v-for="shot in topShots " :key="shot.id" :to="`shots/${shot.id}`">
          <div class="shot">
            <p class="pl-2 pr-2">
              {{shot.text | trimShotLength}}
            </p>
            <div class="row">
              <div class="col-md-6 text-info">
                <h6 class="pl-2">{{`@${shot.username}`}}</h6>
              </div>
              <div class="col-md-6">
                <h6 class="font-weight-bold text-success">
                  {{`${shot.likes} Likes`}}
                </h6>
              </div>
            </div>
            <hr />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TopShots',
  computed: mapGetters(['topShots', 'isLoading']),
  methods: mapActions(['fetchTopShots']),
  created() {
    this.fetchTopShots();
  },
  filters: {
    trimShotLength(val) {
      if (val.length < 160) {
        return val;
      }
      return `${val.substring(0, 160)} ...`;
    },
  },
};
</script>

<style scoped>
.shot {
  cursor: pointer;
  color: black;
}
.shot:hover {
  background-color: #d3d3d3;
}
</style>
