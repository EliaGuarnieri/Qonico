import { resolve } from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: process.env.NODE_ENV === 'production' || 3000,
    host: process.env.NODE_ENV === 'production' || '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Veri Web Design',
    htmlAttrs: {
      lang: 'it'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Mono:wght@700&display=swap'
      }
    ]
  },

  alias: {
    assets: resolve(__dirname, './assets'),
    images: resolve(__dirname, './assets/images'),
    components: resolve(__dirname, './components'),
    elements: resolve(__dirname, './components/elements')
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Inject scss variables Globally
  styleResources: {
    scss: [
      '~/assets/scss/abstracts/_variables.scss',
      '~/assets/scss/abstracts/_mixins.scss'
    ]
  },

  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-compress',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 0
        },
        brotli: {
          threshold: 0
        }
      }
    ],
    ['cookie-universal-nuxt', { alias: 'cookies' }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
