<template>
  <main>
    <TheHero />
  </main>
</template>

<script>
import TheHero from 'components/TheHero'

export default {
  components: { TheHero },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>
