<template>
  <header class="section__header title">
    <h2 class="section__title">
      {{ title }}
    </h2>
    <small
      v-if="description"
      class="section__description"
    >{{ description }}</small>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    margin-bottom: calc(#{$gutter} * 2);
  }

  &__title,
  &__description {
    flex-shrink: 0;
  }

  &__title {
    margin-right: $gutter;
    line-height: 1;
  }
}
</style>
