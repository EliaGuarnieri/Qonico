import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const { analytics } = app.$cookies.getAll()

  Vue.use(VueGtag, {
    config: { id: 'G-DT7GC57FV2' },
    appName: 'QonicoWebsite',
    bootstrap: analytics === true,
    enabled: analytics === true,
    pageTrackerScreenviewEnabled: true,
    pageTrackerTemplate (to) {
      return {
        page_title: to.params.slug,
        page_path: to.path
      }
    }
  }, app.router)
}
