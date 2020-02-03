<template>
  <div class="about">
    <h4 class="display-5">About Shoot your shot</h4>
    <hr />
    <p>
      Shoot your shot is a competitive game where players try and write cool
      and appealing statements that they would normally use to seduce someone.
      Below are some of the keywords that will help you to understand the game.
    </p>
    <ul>
      <li>
        <span class="font-weight-bold">A shot -</span>
        <span>A statement written by a player that is meant to be seductive.</span>
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
    <p>Click on the <strong> shoot a shot</strong> button in the top right corner.
    This will take you to a page where you can type out your shot and send it to the world to see.
    Other players will either <strong>like, dislike</strong> or simply rate your shot as average.
    Feel free to also swipe through the different shots as you rate them.
    </p>
    <h5>Will you be the ultimate shoot master?</h5>
    <router-link to="/shots/create">
      <button class="btn btn-warning mt-4">Shoot your shot Now!</button>
    </router-link>
  </div>
</template>
