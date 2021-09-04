<template>
  <div
    class="icon"
    v-html="src"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    src () {
      const src = require(`assets/icons/${this.name}.svg?raw`)
      return src
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep svg {
  position: absolute;
  inset: 0;
  top: 0.125em;
  width: 1em;
  height: 1em;
  transform: scale(1.2);
  transform-origin: 50% 50%;
}
::v-deep svg path {
  fill: currentColor;
}
.icon {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-self: center;
  width: 1em;
  height: 1em;
}
</style>

1: 0.124 = 1.2 : x
