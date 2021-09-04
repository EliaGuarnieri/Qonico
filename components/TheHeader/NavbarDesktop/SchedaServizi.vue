<template>
  <transition name="slide-down">
    <div class="services container--full-width">
      <ul class="wrapper">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="card"
        >
          <nuxt-link
            :to="item.anchor"
            class="card__link"
          >
            <div class="card__header">
              <Icon
                :name="item.pre"
                class="card__icon"
              />
              <span class="card__title">{{ item.name }}</span>
            </div>
            <div class="card__body">
              {{ item.description }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import Icon from 'elements/Icon'

export default {
  components: { Icon },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 9.6rem;
  border-radius: $radius;
  transform: translateY(calc(65px + 2%));
  //background-color: blue;

  @include blur;
}

.wrapper {
  display: grid;
  gap: $gutter;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 92%;
  max-width: 870px;
  margin: 0 auto;
}

.card {
  &__header {
    font-weight: 700;
  }
  &__link {
    display: block;
    position: relative;
    color: $text-color;

    &.is-exact-active {
      color: $green;

      &:after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: $green;
        top: calc(100% + 2px);
        left: calc(50% - 3px);
      }
    }

    &:hover {
      color: $green;
    }
  }
  &__body {
    font-weight: 300;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.35s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.25s linear;
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>
