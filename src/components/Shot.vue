<template>
  <div class="col-md-12">
    <div :style="shotStyles" class="shot shadow-lg p-4 mb-5 rounded">
      <p>
       {{text | trimShotLength}}
      </p>
      <div class="row">
        <div class="col-md-5">
          <h5 class="font-italic">{{ `@${author}`}}</h5>
        </div>
        <div class="col-md-7">
          <h5>{{ createdOn | formatDate }}</h5>
        </div>
        <div class="col-md-12 mt-4">
          <div class="row">
            <div class="col-md-4">
              <button
              class="btn btn-success btn-sm"
              @click="reactToShot('like')"
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
                @click="reactToShot('neutral')"
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
                @click="reactToShot('dislike')"
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
import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Shot',
  props: {
    shotId: {
      type: String,
      required: true,
    },
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
    createdOn: {
      type: Object,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    height: '20rem',
    border: '1px solid #c9753d',
  }),
  methods: {
    ...mapActions(['reactionToShot']),
    reactToShot(reaction) {
      const shotInfo = {
        shotId: this.shotId,
        likes: this.likes,
        dislikes: this.dislikes,
        neutral: this.neutral,
        receivedReaction: reaction,
      };
      if (!this.isLoggedIn) {
        this.$notify({
          group: 'alerts',
          title: 'Action required',
          text: 'Please Login to react to Shots!',
          type: 'alert alert-warning',
        });
      }
      if (this.user.uid === this.userId) {
        this.$notify({
          group: 'alerts',
          title: 'Invalid Reaction',
          text: 'You cannot toot your own horn!',
          type: 'alert alert-danger',
        });
      }
      if (this.isLoggedIn && this.user.uid !== this.userId) {
        this.reactionToShot(shotInfo);
      }
    },
    generateRandomNumber(min = 0, max = 1) {
      return min + Math.round(Math.random() * max);
    },
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'user']),
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
  filters: {
    formatDate(val) {
      if (!val) {
        return '-';
      }
      const date = val.toDate();
      return moment(date).fromNow();
    },
    trimShotLength(val) {
      if (val.length < 120) {
        return val;
      }
      return `${val.substring(0, 120)} ...`;
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
