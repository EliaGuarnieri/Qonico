<template>
  <main>
    <TheHero />
    <TheHero />
    <TheHero />
    <TheHero />
    <!-- <SectionServizi id="servizi" />
    <SectionChiSiamo id="chi-siamo" />
    <SectionContatti id="contatti" /> -->
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
