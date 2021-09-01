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
  position: relative;
  top: 0.125em;
  width: 1em;
  height: 1em;
}
::v-deep svg path {
  fill: currentColor;
}
.icon {
  display: inline-flex;
  align-self: center;
}
</style>
