<template>
  <div class="signup">
    <h4 class="display-5 pl-2">Sign Up</h4>
    <hr />
    <form @submit.prevent="register()">
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          required
          autofocus
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          required
          autofocus
          v-model="username"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          autofocus
          required
          v-model="password"
        />
      </div>
      <div v-if="isError" class="alert alert-danger mt-2">{{isError}}</div>
      <button type="submit" class="btn btn-info btn-block mt-4">
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
          v-if="isLoading"
        ></span>
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      username: '',
      password: '',
    };
  },
  computed: mapGetters(['isLoading', 'isError']),
  methods: {
    ...mapActions(['signup']),
    register() {
      const { username, email, password } = this;
      const userInfo = {
        email,
        username,
        password,
      };
      this.signup(userInfo);
    },
  },
  created() {
    if (this.isLoggedIn) {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.signup {
  width: 65%;
  margin: 0 auto;
}
.signup form {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
