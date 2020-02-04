<template>
  <div class="signin">
      <h4 class="display-5 pl-2">Sign In</h4>
      <hr>
    <form>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Username"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-info btn-block mt-4">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>

<style scoped>
.signin{
    width: 65%;
    margin: 0 auto;
}
.signin form{
    margin-top: 3rem;
    margin-bottom: 3rem;
}
</style>
