<template>
  <div class="cookie-consent--bottom">
    <div class="cookie-consent__content container">
      <div class="cookie-consent__header">
        <div class="cookie-consent__icon">
          <span />
        </div>
      </div>
      <div class="cookie-consent__body">
        Questo sito utilizza cookie, ma solo in forma anonima e per aiutarci a capire qualcosa in più sulle persone che vengono a farci visita. Se vuoi saperne di più, puoi leggere nel dettaglio la nostra
      </div>
      <div class="cookie-consent__footer">
        <button
          class="button cookie-consent__button--secondary"
          @click="rejectCookies"
        >
          Ho cambiato idea
        </button>
        <button
          class="button cookie-consent__button"
          @click="acceptCookies"
        >
          D'accordo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    acceptCookies () {
      this.$cookies.setAll([
        { name: 'consent', value: true, opts: { maxAges: 31556952 } },
        { name: 'analytics', value: true, opts: { maxAges: 31556952 } }
      ])
      this.$emit('updateConsent')
    },
    rejectCookies () {
      this.$cookies.setAll([
        { name: 'consent', value: true, opts: { maxAges: 31556952 } },
        { name: 'analytics', value: false, opts: { maxAges: 31556952 } }
      ])
      this.$emit('updateConsent')
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-consent {
  position: fixed;
  width: 100vw;
  max-width: 480px;
  font-size: 1.4rem;
  left: auto;
  overflow: hidden;
  color: black;
  background: $beige;
  padding: 1em 0;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;

  &--bottom {
    @extend .cookie-consent;

    bottom: 0;
    right: 0;
  }

  &__content {
    display: grid;
    grid-row-gap: 1.8rem;
    margin: 1rem 0;
    align-self: center;
  }

  &__header {
    width: 100%;
  }

  &__icon {
    width: 100%;
    position: relative;
    animation: cookieTranslate 5s cubic-bezier(0.5, 0, 0.5, 1) both infinite;

    span {
      display: inline-block;
      animation: cookieSpin 5s cubic-bezier(0.5, 0, 0.5, 1) both infinite;
    }

    span::before {
      display: inline-block;
      animation: cookieRotate 5s linear both infinite;
      content: "🍪";
    }
  }

  &__icon::after {
    position: absolute;
    display: inline-block;
    animation: cookiePuff 5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    content: "💨";
    left: 0;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    background-color: $blue;
    color: $white;

    &:hover {
      background-color: $blue-dark;
    }

    &--secondary {
      color: $blue;
      margin-right: 1.8rem;

      &:hover {
        color: $blue-dark;
      }
    }
  }
}
</style>
