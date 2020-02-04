<template>
  <div class="signup">
      <h4 class="display-5 pl-2">Sign Up</h4>
      <hr>
    <form>
        <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="First Name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
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
      <button type="submit" class="btn btn-info btn-block mt-4">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>

<style scoped>
.signup{
    width: 65%;
    margin: 0 auto;
}
.signup form{
    margin-top: 3rem;
    margin-bottom: 3rem;
}
</style>
