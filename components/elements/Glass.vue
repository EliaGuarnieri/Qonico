<template>
  <div class="glass">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.glass {
  display: grid;
  place-items: center;
}
.content {
  display: grid;
  grid-gap: 1em;
  padding: $gutter;
  border-radius: $radius;
  background: $green-gradient;
  color: $white;

  @include for-tablet {
    padding: $gutter calc(#{$gutter} * 2);
  }
}
</style>
