<template>
  <footer class="footer container--full-width bg-lime">
    <div class="footer__content container row">
      <SocialList class="footer__social" />
      <div class="footer__menu">
        <TheButton
          level="tertiary"
          @click="toggleConsent"
        >
          Impostazioni cookies.
        </TheButton>
        <TheButton
          level="tertiary"
          to="/privacy"
        >
          Privacy policy.
        </TheButton>
      </div>
      <div class="footer__copyright">
        <small>&copy; {{ new Date().getFullYear() }} • Made with <span class="heart">♥</span> by Qonico</small>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialList from 'components/elements/SocialList'
import TheButton from 'elements/TheButton'

export default {
  components: { SocialList, TheButton },
  data () {
    return {
      consent: this.$nuxt.context.$cookies.get('consent')
    }
  },
  methods: {
    toggleConsent () {
      this.consent = this.$cookies.set('consent', false)
      this.$emit('updateConsent')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  color: $text-color;
  padding: 1em 0;
  margin-bottom: 2%;
  z-index: 9997;

  &__content {
    display: grid;
    grid-template-areas:
      "social"
      "menu"
      "copyright";
    justify-content: center;
    align-items: center;

    @include for-tablet {
      justify-content: space-between;
      grid-template-areas: "copyright social menu";
      grid-template-columns: 1fr auto 1fr;
    }
  }

  &__social,
  &__menu,
  &__copyright {
    justify-content: center;
    text-align: center;
  }

  &__social {
    grid-area: social;
  }

  &__menu {
    grid-area: menu;

    @include for-tablet {
      text-align: right;
    }
  }

  &__copyright {
    grid-area: copyright;

    @include for-tablet {
      justify-content: end;
      text-align: left;
    }
  }
}

.heart {
  color: red;
}
</style>
