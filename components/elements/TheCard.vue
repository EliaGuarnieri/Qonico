<template>
  <div class="card">
    <div
      class="card__media"
      :class="{'is-right': isOdd}"
    >
      <img :src="require(`images/${image}`)">
    </div>
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
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    image: {
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
  computed: {
    isOdd () {
      return this.index % 2 !== 0
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
    margin: 0 auto $gutter;
    min-width: 20.5rem;
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
    }
  }

  .is-right {
    order: 1;
    margin: 0 0 0 $gutter;
  }
}
.card + .card {
  margin-top: $gutter-large;
}
</style>
