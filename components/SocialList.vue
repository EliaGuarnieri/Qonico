<template>
  <ul class="social__list">
    <li class="social__item">
      L
    </li>
    <li class="social__item">
      I
    </li>
    <li class="social__item">
      F
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.social {
  &__list {
    display: flex;
    padding: 1em 0;
  }

  &__item + &__item {
    margin-left: 1em;
  }
}
</style>
