<template>
  <main>
    <CardSection />
  </main>
</template>

<script>
import CardSection from 'components/CardsSection'

export default {
  components: { CardSection },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
</style>
