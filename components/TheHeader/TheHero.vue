<template>
  <div
    id="hero"
    class="hero container"
  >
    <h1 class="title">
      Il Futuro<br> è oggi.
    </h1>
  </div>
</template>

<script>
import { tsParticles } from 'tsparticles'
import particlesSettings from 'assets/particles/particles.json'
/* eslint-disable */
export default {
  data: () =>({
    particlesSettings: particlesSettings
  }),
  mounted () {
    this.$nextTick(() => {
      this.initParticleJS()
    })
  },
  methods: {
    initParticleJS () {
      tsParticles.load('hero', this.particlesSettings)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  height: calc(100vh - 60px);
}
</style>
