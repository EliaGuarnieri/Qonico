<template>
  <div class="app">
    <TheHeader />
    <Nuxt class="page-content" />
    <TheFooter @updateConsent="updateConsent" />
    <transition name="slide-fade-bottom">
      <CookiesConsent
        v-show="!consent"
        @accept="acceptCookies"
        @reject="rejectCookies"
      />
    </transition>
  </div>
</template>

<script>
import TheHeader from 'components/TheHeader'
import TheFooter from 'components/TheFooter'
import CookiesConsent from 'components/CookiesConsent'

export default {
  components: { TheHeader, TheFooter, CookiesConsent },
  middleware: 'setCookies',
  data () {
    return {
      consent: this.$nuxt.context.$cookies.get('consent')
    }
  },
  methods: {
    acceptCookies () {
      this.$cookies.setAll([
        { name: 'consent', value: true, opts: { maxAges: 31556952 } },
        { name: 'analytics', value: true, opts: { maxAges: 31556952 } }
      ])
      this.updateConsent()
    },
    rejectCookies () {
      this.$cookies.setAll([
        { name: 'consent', value: true, opts: { maxAges: 31556952 } },
        { name: 'analytics', value: false, opts: { maxAges: 31556952 } }
      ])
      this.updateConsent()
    },
    updateConsent () {
      this.consent = this.$cookies.get('consent')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  position: relative;
  transition: filter 0.25s linear;
}
</style>
