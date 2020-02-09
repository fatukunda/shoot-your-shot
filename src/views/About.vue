<template>
  <div class="about">
    <h4 class="display-5">About Shoot your shot</h4>
    <hr />
    <p>
      Shoot your shot is a competitive game where players try and write cool
      and interesting statements that they would normally use to flirt with someone.
      Below are some of the keywords that will help you to understand the game.
    </p>
    <ul>
      <li>
        <span class="font-weight-bold">A shot -</span>
        <span>A statement written by a player that is meant to be flirty.</span>
      </li>
      <li>
        <span class="font-weight-bold">A shooter -</span>
        <span>A person/player who writes a statement/Shot.</span>
      </li>
      <li>
        <span class="font-weight-bold">To shoot a shot -</span>
        <span>The process of creating a statement/shot.</span>
      </li>
    </ul>
    <h4 class="display-5">How to play</h4>
    <hr>
    <p>Create an accout and after, you'll be able to create a shot and
      also react to other users' shots.</p>
    <h5>Will you be the ultimate shot master?</h5>
    <router-link to="/shots/create" v-show="isLoggedIn">
      <button class="btn btn-warning mt-4">Shoot your shot Now!</button>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  computed: mapGetters(['isLoggedIn']),
};
</script>
