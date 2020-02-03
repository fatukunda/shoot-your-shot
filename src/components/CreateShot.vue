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
        ></textarea>
      </div>
      <button class="btn btn-warning float-right">Shoot Your shot</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateShot',
};
</script>

<style scoped>
</style>
