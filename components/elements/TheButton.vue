<template>
  <component
    :is="type"
    :to="to"
    :level="level"
    class="button"
    :class="classLevel"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null
    },
    level: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    type () {
      if (this.to) {
        return 'nuxt-link'
      } else {
        return 'button'
      }
    },
    classLevel () {
      return `button--is-${this.level}`
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: $radius;

  &--is-primary {
    color: $text-color;
    background: $blob-gradient;

    &:hover {
      filter: contrast(2);
    }
  }

  &--is-secondary {
    color: $text-color;
    font-weight: 700;
    background-color: rgba($white, 0.9);

    &:hover {
      filter: hue-rotate(180deg);
    }
  }

  &--is-tertiary {
    color: $text-color;
    font-weight: 700;
    padding: 0;

    &:hover {
      filter: hue-rotate(180deg);
    }
  }
}

.button + .button {
  margin-left: $gutter;
}
</style>
