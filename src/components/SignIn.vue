<template>
  <div class="signin">
    <h4 class="display-5 pl-2">Sign In</h4>
    <hr />
    <form @submit.prevent="login()">
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          required
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
          v-model="password"
        />
      </div>
      <div v-if="isError" class="alert alert-danger mt-2">{{isError.message}}</div>
      <button type="submit" class="btn btn-info btn-block mt-4">
        <span
          class="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
          v-if="isLoading"
        ></span>
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: mapGetters(['user', 'isLoading', 'isLoggedIn', 'isError']),
  methods: {
    ...mapActions(['signin']),
    login() {
      const { email, password } = this;
      const userInfo = {
        email,
        password,
      };
      this.signin(userInfo);
    },
  },
};
</script>

<style scoped>
.signin {
  width: 65%;
  margin: 0 auto;
}
.signin form {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
