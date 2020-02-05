<template>
  <div class="create-shot">
    <form>
      <div class="form-group">
        <h5 class="pb-4 pl-4 text-warning font-weight-bold">Make a shot</h5>
        <label for="txt-make-shot">Create a shot</label>
        <textarea
          class="form-control"
          id="txt-make-shot"
          rows="10"
          placeholder="You take my breath away everytime you smile."
          v-model="text"
        ></textarea>
      </div>
      <div v-if="isError" class="alert alert-danger mt-2">{{isError}}</div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <button @click.prevent="takeShot()" class="btn btn-warning float-right">
        <span
          class="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
          v-if="isLoading"
        ></span>Shoot Your shot
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateShot',
  data() {
    return {
      text: '',
    };
  },
  computed: mapGetters(['user', 'isError', 'isLoading']),
  methods: {
    ...mapActions(['createShot']),
    takeShot() {
      const { text } = this;
      const { displayName, uid } = this.user;
      const shotDetails = {
        text,
        userId: uid,
        username: displayName,
        createdOn: new Date(),
        likes: 0,
        dislikes: 0,
        neutral: 0,
      };
      this.createShot(shotDetails);
      this.text = '';
    },
  },
};
</script>

<style scoped>
</style>
