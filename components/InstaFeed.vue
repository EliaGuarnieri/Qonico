<template>
  <div :class="containerClass">
    <h1
      v-if="loading"
      class="fancy-loading"
    >
      Loading, please wait...
    </h1>
    <a
      v-for="(feed, index) in feeds"
      :key="index"
      :href="feed.permalink"
      rel="noopener"
      target="_blank"
    >
      <div class="instagram-image">
        <img
          :src="feed.media_url"
          alt="Instagram post"
        >
        <div :text="feed.caption" />
      </div>
    </a>
    <div class="fancy-alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /*
     * Instagram access token.

    token: {
      type: String,
      required: true
    }, */
    /*
     * Media Fields (see https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields)
     */
    fields: {
      type: String,
      required: true
    },
    /*
     * Number of posts rendered.
     */
    count: {
      type: Number,
      default: 6
    },
    /*
     * Kinds of media to filter (Can be IMAGE, VIDEO, or CAROUSEL_ALBUM.).
     */
    mediatypes: {
      type: Array,
      required: true
    },
    // Class for container div
    containerClass: {
      type: String,
      default: '',
      required: false
    }
  },
  data: () => ({
    error: null,
    loading: false,
    feeds: []
  }),
  mounted () {
    this.getUserFeed()
  },
  methods: {
    async getUserFeed () {
      this.loading = true
      const path = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8888'

      await this.$axios
        .get(`${path}/.netlify/functions/getInstagramFeed`, {
          params: { fields: this.fields, mediatypes: this.mediatypes, count: this.count }
        })
        .then((response) => {
          this.loading = false
          if (response.status === 400) {
            this.error = response.error.message
          }
          if (response.status === 200) {
            this.feeds = response.data
          }
        })
        .catch((error) => {
          this.loading = false
          this.error = 'Oops! Qualcosa non ha funzionato 😔'
          throw error
        })
    }
  }
}
</script>
