<template>
  <header>
    <!-- <transition name="fade"> -->
    <component
      :is="navbar"
      :items="items"
    />
    <!-- </transition> -->
  </header>
</template>

<script>
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'

export default {
  components: { NavbarMobile, NavbarDesktop },
  data: () => ({
    isMobile: true,
    items: [
      { name: 'home', anchor: '/' },
      {
        name: 'servizi',
        type: 'dropdown',
        subitems: [
          {
            pre: 'monitor-mobbile',
            name: 'Web Design',
            anchor: '/servizi/web-design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
          },
          {
            pre: 'gallery-favorite',
            name: 'Brand Identity',
            anchor: '/servizi/brand-identity',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
          },
          {
            pre: 'heart-add',
            name: 'Social Media',
            anchor: '/servizi/social-media',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
          },
          {
            pre: 'activity',
            name: 'Marketing',
            anchor: '/servizi/marketing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
          },
          {
            pre: 'frame',
            name: 'Content Creation',
            anchor: '/servizi/contet-creation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
          },
          {
            pre: 'search-status',
            name: 'SEO e SEM',
            anchor: '/servizi/seo-sem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
          }
        ]
      },
      { name: 'progetti', anchor: '/progetti' },
      { name: 'about', anchor: '/about' }
    ]
  }),
  computed: {
    navbar () {
      return 'NavbarDesktop'
      // TODO: rimuovere commento quando ci saranno le pagine (Servizi)
      /* if (this.isMobile === null) { return }
      return this.isMobile ? 'NavbarMobile' : 'NavbarDesktop' */
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
        window.addEventListener('resize', this.checkScreenSize)
      })
      this.isMobile = window.innerWidth < 800
    },
    removeEventListener () {
      window.removeEventListener('resize', this.checkScreenSize)
    },
    checkScreenSize () {
      this.isMobile = window.innerWidth < 800
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  color: $green-dark;
  z-index: 9998;
}
</style>
