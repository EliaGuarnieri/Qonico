<template>
  <div class="navbar">
    <div class="container row">
      <div class="logo">
        <p>Logo</p>
      </div>
      <div
        class="menu-toggle"
        @click="toggleMenu"
      >
        <lottie
          :width="48"
          :height="48"
          :options="lottieOptions"
          @animCreated="handleAnimation"
        />
      </div>
      <transition :name="isDesktop ? '' : 'slide-fade-left'">
        <nav
          v-show="isOpen || isDesktop"
          class="nav"
        >
          <ul class="nav__list container">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="nav__item"
            >
              <a
                :href="item.anchor"
                class="nav__link"
              >
                {{ item.name }}
              </a>
            </li>
            <div
              ref="overlay"
              class="overlay"
            />
          </ul>
          <SocialList :class="{container: !isDesktop}" />
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
import SocialList from 'elements/SocialList.vue'
import lottie from 'vue-lottie/src/lottie.vue'

/**
 *# For scrolling behaviour:
 *
 * 1. https://stackoverflow.com/questions/60952725/anchor-in-nuxt-component-not-working-on-same-page-the-anchor-is-included-on
 * 2. https://www.npmjs.com/package/vue-scrollto
 * 3. https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
 */

export default {
  components: { SocialList, lottie },
  data: () => ({
    isOpen: false,
    isDesktop: false,
    items: [
      { name: 'home', anchor: '#hero' },
      { name: 'servizi', anchor: '#servizi' },
      { name: 'chi siamo', anchor: '#chi-siamo' },
      { name: 'contattaci', anchor: '#contatti' }
    ],
    anim: null,
    file: null,
    scrolled: 0
  }),
  async fetch () {
    this.file = await require('static/lottie/hamburger.json')
  },
  computed: {
    lottieOptions () {
      return {
        animationData: this.file,
        autoplay: false,
        loop: false
      }
    }
  },
  watch: {
    scrolled (newValue, oldValue) {
      /* ! correggere percentuale */
      this.$refs.overlay.style.width = `${this.scrolled}%`
    }
  },
  mounted () {
    this.addEventListener()
  },
  beforeDestroy () {
    this.removeEventListener()
  },
  methods: {
    addEventListener () {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize)
        window.addEventListener('scroll', this.onScroll)
      })
      this.isDesktop = window.innerWidth >= 800
    },
    removeEventListener () {
      window.removeEventListener('resize', this.onResize)
      window.removeEventListener('scroll', this.onScroll)
    },
    onResize () {
      this.isDesktop = window.innerWidth >= 800
    },
    onScroll () {
      const h = document.documentElement
      const b = document.body
      const st = 'scrollTop'
      const sh = 'scrollHeight'
      this.scrolled = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
    },
    toggleMenu () {
      this.isOpen = !this.isOpen
      this.play()
    },
    handleAnimation (anim) {
      this.anim = anim
    },
    play () {
      if (this.isOpen) {
        this.anim.playSegments([0, 13], true)
      } else {
        this.anim.playSegments([13, 0], true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .shape {
  fill: $blue;
  stroke: $blue;
}
.navbar {
  display: flex;
  position: fixed;
  width: 100%;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  background-color: $black;
  z-index: 9997;

  .menu-toggle {
    width: 48px;
    height: 48px;
    margin: 0 !important;

    @include for-tablet {
      display: none;
    }
  }

  .nav {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: absolute;
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
      position: relative;

      @include for-tablet {
        display: flex;

        &::after {
          content: "•";
          margin: 0 calc(#{$gutter} / 2);
        }
      }
    }

    .overlay {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background-color: $blue;
      mix-blend-mode: multiply;
      width: 0%;
      pointer-events: none;
    }

    &__link {
      display: block;
      padding: 1em 0;
      transition: color 0.25s ease-in-out;
      color: $white;

      &.is-active {
        color: $blue;
      }

      &:hover {
        color: $blue;
      }

      @include for-tablet {
        display: flex;
        margin-left: 1.8rem;
        padding: 0;
      }
    }

    @include for-tablet {
      position: relative;
      flex-flow: row;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
    }
  }
}
</style>
