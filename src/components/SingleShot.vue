<template>
  <div class="single-shot">
    <div v-show="isLoading" class="spin row justify-content-center align-items-center">
      <div class="spinner-grow text-warning spin-item" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <Shot
      :text="singleShot.text"
      :likes="singleShot.likes"
      :dislikes="singleShot.dislikes"
      :neutral="singleShot.neutral"
      :author="singleShot.username"
      :createdOn="singleShot.createdOn"
      :shotId="singleShot.id"
      :authorId="singleShot.authorId"
      v-show="!isLoading"
    />
    <div v-if="singleShot !==null">
    <div class="row btn-options" v-if="user.uid === singleShot.authorId" v-show="!isLoading">
        <div class="col-md-6">
            <button class="btn btn-outline-info float-right">Edit</button>
        </div>
        <div class="col-md-6">
            <button class="btn btn-outline-danger">Delete</button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Shot from './Shot.vue';

export default {
  name: 'SingleShot',
  components: {
    Shot,
  },
  methods: mapActions(['fetchSingleShot']),
  computed: {
    ...mapGetters(['singleShot', 'isLoading', 'user']),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchSingleShot(id);
    console.log(this.singleShot);
    console.log(this.user);
  },
  watch: {
    $route() {

    },
  },
};
</script>

<style scoped>
.single-shot {
  height: 20rem;
}
.btn-options {
  margin-top: 5rem;
}
.spin {
  height: 80vh;
}
.spin-item {
  width: 5rem;
  height: 5rem;
}
.btn-options button{
    width: 7rem;
}
</style>
