<template>
  <main>
    <SectionServizi />
    <SectionChiSiamo />
  </main>
</template>

<script>
import SectionServizi from 'components/sections/SectionServizi'
import SectionChiSiamo from 'components/sections/SectionChiSiamo'

export default {
  components: { SectionServizi, SectionChiSiamo },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>
