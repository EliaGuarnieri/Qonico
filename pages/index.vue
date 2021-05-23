<template>
  <main>
    <SectionServizi />
  </main>
</template>

<script>
import SectionServizi from 'components/sections/SectionServizi'

export default {
  components: { SectionServizi },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>
