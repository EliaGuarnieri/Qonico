<template>
  <div class="text">
    <Icon
      v-if="pre"
      :name="pre"
      class="pre"
    />
    <span>
      <slot />
    </span>
    <Icon
      v-if="post"
      :name="post"
      class="post"
    />
  </div>
</template>

<script>
import Icon from 'elements/Icon'

export default {
  components: { Icon },
  props: {
    pre: {
      type: String,
      default: ''
    },
    post: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  display: flex;
}
.pre {
  margin-right: 0.5em;
  flex-shrink: 0;
}

.post {
  margin-left: 0.5em;
  flex-shrink: 0;
}
</style>
