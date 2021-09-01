<template>
  <TransitionExpand>
    <nav
      v-show="show"
      class="nav"
    >
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
            class="nav__link nav__link--is-dropdow"
            :class="{ 'is-green': isServiceActive }"
            @click="showSubmenu = !showSubmenu"
          >
            <span>{{ item.name }}</span>
            <Icon
              name="arrow-down-1"
              :class="{ rotated: showSubmenu }"
            />
          </div>
          <TransitionExpand>
            <ul
              v-show="showSubmenu"
              class="nav__list nav__list--is-sublist"
            >
              <li
                v-for="(subitem, sindex) in item.subitems"
                :key="sindex"
                class="nav__item"
              >
                <nuxt-link
                  :to="subitem.anchor"
                  class="nav__link"
                >
                  <Icon :name="subitem.pre" />
                  <span>
                    {{ subitem.name }}
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </TransitionExpand>
        </li>
      </ul>
    </nav>
  </TransitionExpand>
</template>

<script>
import Icon from 'elements/Icon'
import TransitionExpand from './TransitionExpand'

export default {
  components: { Icon, TransitionExpand },
  props: {
    show: {
      type: Boolean,
      required: true
    },
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
  },
  watch: {
    show () {
      if (!this.showSubmenu) { return }
      this.showSubmenu = !this.showSubmenu
    }
  }

}
</script>

<style lang="scss" scoped>
.nav {
  grid-area: nav;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  padding-top: 1em;
  padding-bottom: 2em;

  &__list {
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
    display: block;
    position: relative;
    padding: 1em 0;
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
  }
}
</style>
