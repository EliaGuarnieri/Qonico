<template>
  <div class="card">
    <lottie
      class="card__media"
      :width="300"
      :height="300"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />
    <div class="card__content">
      <h3 class="title card__title">
        {{ title }}
      </h3>
      <div class="card__body">
        <p>{{ body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  components: { lottie },
  props: {
    index: {
      type: Number,
      required: true
    },
    animationFile: {
      type: String,
      required: true
    },
    play: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    body: {
      type: String,
      default: null
    }
  },
  data: () => ({
    anim: null,
    file: null
  }),
  async fetch () {
    this.file = await require(`static/lottie/${this.animationFile}`)
  },
  computed: {
    lottieOptions () {
      return {
        animationData: this.file,
        autoplay: false
      }
    }
  },
  watch: {
    play (newVal, oldVal) {
      newVal ? this.playAnim() : this.pauseAnim()
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
    },
    playAnim () {
      this.anim.play()
    },
    pauseAnim () {
      this.anim.pause()
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-flow: column;

  &__media {
    display: inline-block;
    min-width: 30rem;
  }

  &__title {
    color: $title-color;
  }
}

@include for-tablet {
  .card {
    flex-flow: row;
    align-items: center;

    &__media {
      margin: 0 $gutter 0 0;
      width: 50%;
    }

    &__content {
      order: -1;
      margin: 0 $gutter 0 0;
    }
  }
}
.card + .card {
  margin-top: $gutter-large;
}
</style>
