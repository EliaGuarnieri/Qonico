<template>
  <div
    class="alert"
    :class="{ error: state === 'error', success: state === 'success' }"
  >
    <small>{{ message }}</small>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      validator: value => ['success', 'error'].includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  justify-self: center;
  width: fit-content;
  white-space: break-spaces;
  color: #fff;
  padding: 1.2rem 1.8rem;
  border-radius: $radius;
}
.error {
  background-color: red;
}
.success {
  background-color: green;
}
</style>
