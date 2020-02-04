<template>
  <div class="top-shots">
    <div class="row">
      <div class="col-md-12">
        <h5 class="pb-4 pl-4 text-warning font-weight-bold">Top Shots</h5>
        <router-link to="/shots/:id">
          <div class="shot">
            <p class="pl-2 pr-2">
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
              <span>@Topdawg</span>
            </p>
            <hr />
          </div>
        </router-link>
        <router-link to="/shots/:id">
          <div class="shot">
            <p class="pl-2 pr-2">
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
              <span>@Topdawg</span>
            </p>
            <hr />
          </div>
        </router-link>
        <router-link to="/shots/:id">
          <div class="shot">
            <p class="pl-2 pr-2">
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
              <span>@Topdawg</span>
            </p>
            <hr />
          </div>
        </router-link>
        <router-link to="/shots/:id">
          <div class="shot">
            <p class="pl-2 pr-2">
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
              <span>@Topdawg</span>
            </p>
            <hr />
          </div>
        </router-link>
        <router-link to="/shots/:id">
          <div class="shot">
            <p class="pl-2 pr-2">
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
              <span>@Topdawg</span>
            </p>
            <hr />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopShots',
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
