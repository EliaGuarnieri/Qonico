<template>
  <div class="navbar">
    <div class="blur">
      <div class="container">
        <div class="logo">
          <p>Logo</p>
        </div>
        <NavDesktop
          :items="items"
          @click="isModalOpen = !isModalOpen"
        />
        <TheButton>
          Contattaci
        </TheButton>
      </div>
    </div>
    <SchedaServizi
      v-show="isModalOpen"
      :items="subItems"
    />
  </div>
</template>

<script>
import TheButton from 'elements/TheButton'
import NavDesktop from './NavDesktop'
import SchedaServizi from './SchedaServizi'

export default {
  components: { TheButton, NavDesktop, SchedaServizi },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isModalOpen: false
  }),
  computed: {
    subItems () {
      return this.items.filter(({ type }) => type === 'dropdown')[0].subitems
    },
    currentRoute () {
      return this.$route.path
    }
  },
  watch: {
    currentRoute (value, oldValue) {
      if (!this.isModalOpen) { return }
      this.isModalOpen = !this.isModalOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: block;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}
.blur {
  @include blur;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 65px auto;
  grid-template-areas: "logo nav button";
  align-items: center;
}

.logo {
  grid-area: logo;
}

.button {
  grid-area: button;
  justify-self: end;
}
</style>
