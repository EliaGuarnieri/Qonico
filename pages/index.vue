<template>
  <main>
    <SectionServizi id="servizi" />
    <SectionChiSiamo id="chi-siamo" />
    <SectionContatti id="contatti" />
  </main>
</template>

<script>
import SectionServizi from 'components/sections/SectionServizi'
import SectionChiSiamo from 'components/sections/SectionChiSiamo'
import SectionContatti from 'components/sections/SectionContatti'

export default {
  components: { SectionServizi, SectionChiSiamo, SectionContatti },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>
