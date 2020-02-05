<template>
  <div class="col-md-12">
    <div :style="shotStyles" class="shot shadow-lg p-4 mb-5 rounded">
      <p>
       {{text}}
      </p>
      <div class="row">
        <div class="col-md-12">
          <h5>{{ `@${author}`}}</h5>
        </div>
        <div class="col-md-12 mt-4">
          <div class="row">
            <div class="col-md-4">
              <button
              class="btn btn-success btn-sm"
              :class="!isLoggedIn ? 'disabled not-allowed': ''">
                <span class="mr-2">{{likes}}</span>
                <span>
                  <font-awesome-icon :icon="['fa', 'thumbs-up']" />
                </span>
              </button>
            </div>
            <div class="col-md-4">
              <button
                class="btn btn-warning btn-sm"
                :class="!isLoggedIn ? 'disabled not-allowed': ''">
                <span class="mr-2">{{neutral}}</span>
                <span>
                  <font-awesome-icon :icon="['fa', 'adjust']" />
                </span>
              </button>
            </div>
            <div class="col-md-4">
              <button
                class="btn btn-danger btn-sm"
                :class="!isLoggedIn ? 'disabled not-allowed': ''">
                <span class="mr-2">{{dislikes}}</span>
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
import { mapGetters } from 'vuex';

export default {
  name: 'Shot',
  props: {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    dislikes: {
      type: Number,
      required: true,
    },
    neutral: {
      type: Number,
      required: true,
    },
  },
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
    ...mapGetters(['isLoggedIn']),
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
.not-allowed {
     cursor: not-allowed !important;
     pointer-events: all !important;
}
</style>
