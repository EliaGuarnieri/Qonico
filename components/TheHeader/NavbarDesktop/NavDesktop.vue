<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="nav__item"
      >
        <nuxt-link
          v-if="item.type !== 'dropdown'"
          :to="item.anchor"
          class="nav__link"
        >
          <span>
            {{ item.name }}
          </span>
        </nuxt-link>
        <div
          v-if="item.type === 'dropdown'"
          class="nav__link"
          :class="{'is-green': isServiceActive}"
          @click="$emit('click')"
        >
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    showSubmenu: false
  }),
  computed: {
    isServiceActive () {
      const regex = /\/servizi\//
      return regex.test(this.$route.path)
    }
  }

}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: relative;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-self: center;
  justify-content: space-between;
  grid-area: nav;

  &__list {
    display: flex;
    font-family: $font-family;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    position: relative;

    &--is-sublist {
      font-weight: 400;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    margin-left: 1.8rem;
    padding: 0;
    transition: color 0.25s ease-in-out;
    color: $green-dark;
    cursor: pointer;

    span {
      position: relative;
    }
    .icon {
      transition: all 0.25s linear;
    }
    .rotated {
      transform: rotateX(180deg);
    }

    &.is-exact-active,
    &.is-green {
      color: $green;

      span:after {
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

  @include for-tablet {
    position: relative;
    flex-flow: row;
    align-items: center;
    margin: 0;
    padding: 0;
    justify-self: center;
  }
}
</style>
