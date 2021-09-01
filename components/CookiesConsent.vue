<template>
  <div class="cookie-consent--bottom">
    <div class="cookie-consent__content container">
      <div class="cookie-consent__header">
        <div class="cookie-consent__icon">
          <span />
        </div>
      </div>
      <div class="cookie-consent__body">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        Questo sito utilizza cookie, ma solo in forma anonima e per aiutarci a capire qualcosa in più sulle persone che vengono a farci visita. Se vuoi saperne di più, puoi leggere nel dettaglio la nostra <NuxtLink to="/">informativa sulla privacy</NuxtLink>.
      </div>
      <div class="cookie-consent__footer">
        <TheButton
          level="tertiary"
          @click="$emit('reject')"
        >
          Nah
        </TheButton>
        <TheButton @click="$emit('accept')">
          D'accordo
        </TheButton>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from 'elements/TheButton'

export default {
  components: { TheButton }
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
  color: $text-color;
  padding-top: 1em;
  padding-bottom: 2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  border-radius: $radius;
  z-index: 9999;

  @include blur;

  &--bottom {
    @extend .cookie-consent;

    bottom: 0;
    right: 0;
  }

  &__content {
    display: grid;
    grid-row-gap: 1.8rem;
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
}
</style>
