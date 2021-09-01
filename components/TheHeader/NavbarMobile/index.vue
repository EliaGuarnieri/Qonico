<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">
        <p>Logo</p>
      </div>
      <TheButton>Contattaci</TheButton>
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
      <NavMobile
        :show="isOpen"
        :items="items"
      />
    </div>
  </div>
</template>

<script>
import TheButton from 'elements/TheButton'
import lottie from 'vue-lottie/src/lottie.vue'
import NavMobile from './NavMobile'

export default {
  components: { TheButton, lottie, NavMobile },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isOpen: false,
    anim: null,
    file: null
  }),
  fetch () {
    this.file = require('static/lottie/hamburger.json')
  },
  computed: {
    lottieOptions () {
      return {
        animationData: this.file,
        autoplay: false,
        loop: false
      }
    },
    currentRoute () {
      return this.$route.path
    }
  },
  watch: {
    currentRoute (value, oldValue) {
      if (!this.isOpen) { return }
      this.toggleMenu()
    }
  },
  methods: {
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
  fill: $green-dark;
  stroke: $green-dark;
}
.navbar {
  display: block;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @include blur;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 65px auto;
  grid-template-areas:
    "logo button hamburger"
    "nav nav nav";
  align-items: center;
}

.logo {
  grid-area: logo;
}

.button {
  grid-area: button;
  justify-self: center;
}

.menu-toggle {
  grid-area: hamburger;
  width: 48px;
  height: 48px;
  margin: 0 !important;
  justify-self: end;
}
</style>
