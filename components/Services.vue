<template>
  <ul class="wrapper">
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
      </div>
      <div class="card__footer">
        <TheButton
          :to="item.anchor"
          level="secondary"
          class="card__link"
        >
          {{ item.cta }}
        </TheButton>
      </div>
      <Blob
        :id="index"
        :stops="gradientStops"
        class="card__background"
      />
    </li>
  </ul>
</template>

<script>
import Icon from 'elements/Icon'
import TheButton from 'elements/TheButton'
import Blob from 'elements/Blob'

export default {
  components: { Icon, TheButton, Blob },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    gradientStops: [
      { offset: '0%', color: 'rgb(217, 243, 60)', opacity: 0.5 },
      { offset: '100%', color: 'rgb(255, 173, 189)', opacity: 0.18 }
    ]
  })
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  gap: $gutter;
  grid-template-columns: repeat(auto-fit, 368px);
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @include for-tablet {
    gap: calc(#{$gutter} * 2);
  }
}

.card {
  display: grid;
  position: relative;
  gap: 1em;
  justify-content: center;
  align-items: center;
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
</style>
