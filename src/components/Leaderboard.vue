<template>
  <div>
      <h5 class="pb-4 pl-4 text-warning font-weight-bold">Leaderboard</h5>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Username</th>
          <th scope="col"># of shots</th>
          <th scope="col">Avg. likes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>5</td>
          <td>100</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>8</td>
          <td>64</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>7</td>
          <td>32</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
};
</script>

<style scoped>
</style>
