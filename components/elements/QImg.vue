<template>
  <div class="app-img">
    <div
      v-if="dataUrl"
      :style="{ background }"
      class="app-img__placeholder"
    >
      <img
        :src="placeholder || dataUrl"
        v-bind="$attrs"
      >
    </div>
    <img
      ref="image"
      :src="dataUrl"
      :alt="$attrs.alt || ''"
      v-bind="$attrs"
      class="app-img__img"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dataUrl: ''
  }),
  mounted () {
    this.loadDataUrl()
    this.setObserver()
    window.addEventListener('resize', this.setHeight)
  },
  methods: {
    loadDataUrl () {
      const { width, height } = this.$attrs
      if (!width || !height) { return '' }

      // create a tiny png with matching aspect ratio as img
      const w = 100
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = (height / width) * w

      this.dataUrl = canvas.toDataURL()
    },
    setObserver () {
      const _ = this
      const { src, srcset, $el } = this
      let timeOut

      const observer = new IntersectionObserver(([entry]) => {
        const img = $el.querySelector('.app-img__img')
        const placeholder = $el.querySelector('.app-img__placeholder')

        img.onload = function () {
          _.setHeight()
          delete img.onload
          $el.classList.add('app-img--loaded')
          if (placeholder) {
            timeOut = setTimeout(() => {
              placeholder.remove()
            }, 300)
          }
        }
        if (entry.isIntersecting) {
        // Element is in viewport
          if (srcset) {
            img.srcset = srcset
          }
          img.src = src
          observer.disconnect()
        }
      })
      observer.observe($el)

      this.$once('hook:beforeDestroy', () => {
        observer.disconnect()
        if (timeOut) {
          clearTimeout(timeOut)
        }
      })
    },
    setHeight () {
      const { $attrs, $refs } = this

      const width = $attrs.width
      const height = $attrs.height

      const currentWidth = $refs.image.offsetWidth

      $refs.image.style.height = `${currentWidth * height / width}px`
      // eslint-disable-next-line no-console
      console.log(width, currentWidth, $refs.image.style.height)

      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('resize', this.setHeight)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-img {
  display: inline-block;
  width: 100%;
  position: relative;
  overflow: hidden;

  &__placeholder {
    position: absolute;
    overflow: hidden;
  }

  &__placeholder img {
    transform: scale(1.05);
    filter: blur(10px);
  }

  &__img {
    width: 100%;
    border-radius: $radius;
    object-fit: cover;
    opacity: 0;
    transition: opacity 300ms ease;
  }
}

.app-img--loaded .app-img__img {
  opacity: 1;
}
</style>
