<template>
  <header>
    <TheNavbar />
  </header>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
export default {
  components: { TheNavbar }

}
</script>

<style lang="scss" scoped>
header {
  background-color: $black;
  color: white;
}
</style>
