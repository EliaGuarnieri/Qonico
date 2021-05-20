<template>
  <header>
    <div class="navbar container">
      <div class="logo">
        <p>Logo</p>
      </div>

      <button
        class="menu-toggle"
        @click="isOpen = !isOpen"
      />
      <transition name="slide-fade">
        <nav
          v-if="isOpen"
          class="nav"
        >
          <ul class="nav__list container">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="nav__item"
            >
              <NuxtLink
                class="nav__link"
                :to="item.url"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
          <SocialList class="container" />
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
import SocialList from './SocialList.vue'

/**
 *# For scrolling behaviour:
 *
 * 1. https://stackoverflow.com/questions/60952725/anchor-in-nuxt-component-not-working-on-same-page-the-anchor-is-included-on
 * 2. https://www.npmjs.com/package/vue-scrollto
 * 3. https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
 */
export default {
  components: { SocialList },
  data: () => ({
    isOpen: false,
    items: [
      { name: 'home', url: '/' },
      { name: 'servizi', url: '#' },
      { name: 'contattaci', url: '#' }
    ]
  })
}
</script>

<style lang="scss" scoped>
header {
  background-color: $black;
  color: white;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9999;

  .menu-toggle {
    width: 48px;
    height: 48px;
  }

  .nav {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    height: calc(100vh - 100%);
    top: 100%;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-color: $black;

    &__list {
      font-family: $title-font;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 1.25px;
      text-transform: uppercase;
    }

    &__link {
      display: block;
      padding: 1em 0;
      transition: color 0.25s ease-in-out;

      /*! Si attivano tutti i link, capire perché */
      &.is-active,
      .is-exact-active {
        color: $blue;
      }

      &:hover {
        color: $blue;
      }
    }
  }
}
</style>
