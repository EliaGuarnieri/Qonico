<template>
  <div
    class="app"
    :class="{ lockScroll: loading }"
  >
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <transition name="fade">
      <div
        v-if="loading"
        class="overlay"
      >
        <div class="spinner" />
      </div>
    </transition>
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
      consent: this.$nuxt.context.$cookies.get('consent'),
      analytics: this.$nuxt.context.$cookies.get('analytics'),
      loading: true
    }
  },
  watch: {
    analytics (value) {
      value ? this.$gtag.optIn() : this.$gtag.optOut()
    }
  },
  beforeCreate () {
    this.loading = true
  },
  mounted () {
    this.loading = false
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
      this.analytics = this.$cookies.get('analytics')
    }
  }
}
</script>

<style lang="scss" scoped>
.lockScroll {
  position: fixed;
  width: 100%;
  overflow: hidden;
}

.page-content {
  position: relative;
}
.overlay {
  display: grid;
  position: fixed;
  place-items: center;
  inset: 0;
  z-index: 10000;
  height: 100vh;
  width: 100%;

  @include blur;
}

.spinner {
  width: 80px;
  height: 80px;
  margin: 100px auto;
  background-color: #e45447;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
