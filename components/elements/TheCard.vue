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
    anim: null
  }),
  computed: {
    lottieOptions () {
      return { animationData: require(`assets/lottie/${this.animationFile}`) }
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
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
    color: $blue;
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
