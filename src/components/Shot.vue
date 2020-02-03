<template>
  <div class="row">
    <div class="col-md-12">
      <div :style="shotStyles" class="shot">
        <p class="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div class="row">
          <div class="col-md-4">
            <h5 class="pl-3">@LionKing</h5>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
                <span class="mr-2">20</span>
                <span>
                  <font-awesome-icon icon="thumbs-up" />
                </span>
              </div>
              <div class="col-md-4">
                <span class="mr-2">30</span>
                <span>
                  <font-awesome-icon icon="adjust" />
                </span>
              </div>
              <div class="col-md-4">
                <span class="mr-2">10</span>
                <span>
                  <font-awesome-icon icon="thumbs-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 navigate">
        <div class="col-md-6">
          <button class="btn btn-info">PREV</button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-warning">NEXT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shot',
  data: () => ({
    width: '30rem',
    height: '25rem',
    border: '1px solid #c9753d',
  }),
  methods: {
    generateRandomNumber(min = 0, max = 1) {
      return min + Math.round(Math.random() * max);
    },
  },
  computed: {
    shotStyles() {
      const { width, height, border } = this;
      return {
        width,
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
  font-size: 20px;
  line-height: 2rem;
}
</style>
