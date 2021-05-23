<template>
  <div class="card">
    <h3 class="title card__title">
      {{ title }}
    </h3>
    <div class="card__body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    body: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 5rem;
  box-shadow: 0px 20px 34px 13px #e8edfc;
  border-radius: 20px;

  &__title {
    color: $blue;
  }
}
</style>
