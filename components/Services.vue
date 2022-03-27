<template>
  <div class="services">
    <div
      ref="dots"
      class="dots"
    >
      <div class="dot active" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>

    <ul
      ref="scroller"
      class="wrapper"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="card"
      >
        <div class="card__header">
          <Icon
            :name="item.pre"
            class="card__icon"
          />
        </div>
        <div class="card__content">
          <h3 class="card__title title">
            {{ item.name }}
          </h3>
          <p class="card__body">
            {{ item.description }}
          </p>
        </div><!--
        <div class="card__footer">
          <TheButton
            :to="item.anchor"
            level="primary"
            class="card__link"
          >
            {{ item.cta }}
          </TheButton>
        </div> -->
        <Blob
          :id="index"
          :stops="gradientStops"
          class="card__background"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from 'elements/Icon'
// import TheButton from 'elements/TheButton'
import Blob from 'elements/Blob'

export default {
  components: { Icon, /* TheButton, */ Blob },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    gradientStops: [
      { offset: '0%', color: 'rgb(217, 243, 60)', opacity: 0.5 },
      { offset: '70%', color: 'rgb(255, 173, 189)', opacity: 0.18 },
      { offset: '90%', color: 'rgb(254, 253, 251)', opacity: 0.6 }
    ],
    activeCardIndex: 0
  }),
  mounted () {
    this.$refs.scroller.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    this.$refs.scroller.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const cards = [...this.$refs.scroller.children]
      const dots = [...this.$refs.dots.children]

      const activeCardIndex = cards.findIndex((card, index) => this.isElementInViewport(card))

      if (activeCardIndex === this.activeCardIndex || activeCardIndex === -1) { return }

      dots[this.activeCardIndex].classList.remove('active')

      this.activeCardIndex = activeCardIndex

      dots[this.activeCardIndex].classList.add('active')
    },
    isElementInViewport (el) {
      const rect = el.getBoundingClientRect()
      const sensibility = 250

      return (
        rect.left >= 0 - sensibility
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  position: relative;
  margin-inline: -5%;
}

.wrapper {
  display: grid;
  position: relative;
  gap: $gutter;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  place-items: center;

  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;

  > * {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  @include for-tablet {
    all: unset;
    display: grid;
  position: relative;
    gap: calc(#{$gutter} * 2);
    grid-template-columns: repeat(auto-fit, 368px);
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.card {
  display: grid;
  position: relative;
  gap: 1em;
  justify-content: center;
  // align-items: center;
  text-align: center;
  width: 368px;
  height: 340px;

  &__header {
    align-self: end;
    font-size: 4rem;
    color: $title-color;
    margin-bottom: -0.3em;
  }

  &__title {
    font-weight: 700;
  }

  &__body {
    max-width: 17ch;
    margin: 0 auto;
  }

  &__footer {
    align-self: start;
  }

  &__background {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
}

.dots {
  display: flex;
  width: 240px;
  margin-inline: auto;
  margin-bottom: $gutter;
  gap: $gutter-small;

  .dot {
    flex-grow: 1;
    width: 1fr;
    height: 1.8rem;
    border-radius: 1.8rem;
    background: $blob-gradient;
    transition: flex-grow 0.25s linear, background-color 0.25s linear;

    &.active {
      flex-grow: 5;
      background: $blob-gradient;
    }
  }

  @include for-tablet {
    display: none;
  }
}
</style>
