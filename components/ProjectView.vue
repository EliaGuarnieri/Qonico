<template>
  <div class="wrapper">
    <q-img
      v-for="(image,index) in images"
      ref="images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
    />
  </div>
</template>

<script>
import QImg from 'elements/QImg'

export default {
  components: { QImg },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;

  @include for-tablet {
    flex-flow: row;
    justify-content: space-between;
  }
}

.app-img + .app-img {
  margin-top: $gutter;

  @include for-tablet {
    margin-top: 0;
    margin-left: $gutter;
  }
}
</style>
