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

  @include for-tablet {
    width: calc(50% - calc(#{$gutter} / 2));
  }

  @include for-desktop {
    width: calc(33% - calc(#{$gutter} / 2));
  }
}

.card + .card {
  margin-top: $gutter;

  &:nth-child(2) {
    @include for-tablet {
      margin-top: 0;
    }
  }

  &:nth-child(3) {
    @include for-desktop {
      margin-top: 0;
    }
  }
}
</style>
