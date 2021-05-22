<template>
  <footer class="footer">
    <div class="footer__content container row">
      <div class="footer__copyright">
        <p>&copy; {{ new Date().getFullYear() }} • made with <span class="heart">♥</span> by Veri Web</p>
      </div>
      <button
        class="cookies-settings"
        @click="toggleConsent"
      >
        Impostazioni cookies
      </button>
      <SocialList />
    </div>
    <transition name="slide-fade-bottom">
      <CookieConsent
        v-show="consent !== true"
        @updateConsent="updateConsent"
      />
    </transition>
  </footer>
</template>

<script>
import SocialList from 'components/elements/SocialList'
import CookieConsent from './CookiesConsent'

export default {
  components: { SocialList, CookieConsent },
  data () {
    return {
      consent: this.$nuxt.context.$cookies.get('consent')
    }
  },
  methods: {
    toggleConsent () {
      this.consent = this.$cookies.set('consent', false)
      this.updateConsent()
    },
    updateConsent () {
      this.consent = this.$cookies.get('consent')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  color: $white;
  background-color: $black;
  z-index: 9998;

  &__content {
    flex-flow: column-reverse;
    align-items: center;
  }

  &__copyright {
    padding: 1em 0;
  }
}
.cookies-settings {
  color: $blue;

  &:hover {
    color: $blue-light;
  }
}

.heart {
  color: red;
}
</style>
