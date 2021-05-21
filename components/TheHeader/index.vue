<template>
  <header>
    <TheNavbar />
    <TheHero />
  </header>
</template>

<script>
import TheHero from './TheHero.vue'
import TheNavbar from './TheNavbar.vue'

export default {
  components: { TheNavbar, TheHero }

}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  color: $white;
}
</style>
