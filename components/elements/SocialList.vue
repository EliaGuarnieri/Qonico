<template>
  <ul class="social__list">
    <li
      v-for="(item, index) in social"
      :key="index"
      class="social__item"
    >
      <a
        :href="item.url"
        target="_blank"
      >
        <Icon :name="item.icon" />
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from 'elements/Icon'

export default {
  components: { Icon },
  data: () => ({
    social: [
      { icon: 'facebook', url: '#' },
      { icon: 'instagram', url: '#' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.social {
  &__list {
    font-size: 2.8rem;
    display: flex;
  }

  &__item + &__item {
    margin-left: $gutter;
  }
}
</style>
