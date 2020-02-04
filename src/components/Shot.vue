<template>
  <div class="col-md-12">
    <div :style="shotStyles" class="shot shadow-lg p-4 mb-5 rounded">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.
      </p>
      <div class="row">
        <div class="col-md-12">
          <h5>@LionKing</h5>
        </div>
        <div class="col-md-12 mt-4">
          <div class="row">
            <div class="col-md-4">
              <button class="btn btn-success btn-sm">
                <span class="mr-2">20</span>
                <span>
                  <font-awesome-icon :icon="['fa', 'thumbs-up']" />
                </span>
              </button>
            </div>
            <div class="col-md-4">
              <button class="btn btn-warning btn-sm">
                <span class="mr-2">30</span>
                <span>
                  <font-awesome-icon :icon="['fa', 'adjust']" />
                </span>
              </button>
            </div>
            <div class="col-md-4">
              <button class="btn btn-danger btn-sm">
                <span class="mr-2">10</span>
                <span>
                  <font-awesome-icon :icon="['fa', 'thumbs-down']" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shot',
  data: () => ({
    height: '20rem',
    border: '1px solid #c9753d',
  }),
  methods: {
    generateRandomNumber(min = 0, max = 1) {
      return min + Math.round(Math.random() * max);
    },
  },
  computed: {
    shotStyles() {
      const { height, border } = this;
      return {
        height,
        border,
        backgroundColor: this.generateRandomColor,
        color: '#ffff',
      };
    },
    generateRandomColor() {
      const maxValue = 200; // to generate only dark colors

      const r = this.generateRandomNumber(0, maxValue);
      const g = this.generateRandomNumber(0, maxValue);
      const b = this.generateRandomNumber(0, maxValue);

      return `rgb(${r}, ${g}, ${b})`;
    },
  },
};
</script>

<style scoped>
.shot {
  font-size: 18px;
  line-height: 2rem;
}
</style>
