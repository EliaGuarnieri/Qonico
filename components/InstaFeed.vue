<template>
  <div class="feeds__container">
    <p
      v-if="loading"
      class="feeds__loading"
    >
      Loading, please wait...
    </p>
    <a
      v-for="(feed, index) in feeds"
      :key="index"
      :href="feed.permalink"
      rel="noopener"
      target="_blank"
    >
      <div class="feeds__image">
        <QImg
          :src="feed.media_url"
          alt="Instagram post"
          :width="384"
          :height="384"
        />
        <div :text="feed.caption" />
      </div>
    </a>
    <div class="feeds__alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
import QImg from 'elements/QImg'

export default {
  components: { QImg },
  props: {
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
      const path = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:9999'

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

<style lang="scss" scoped>
.feeds {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $gutter;
  }

  &__image {
    line-height: 0;
  }
}
</style>
