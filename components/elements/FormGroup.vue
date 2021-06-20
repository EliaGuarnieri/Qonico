<template>
  <div
    class="input"
    :class="{ hasError: hasErrors, hasSuccess: isValid }"
  >
    <div
      class="input__label"
      :class="{'input__label--is-checkbox': isCheckbox}"
    >
      {{ label }}
    </div>
    <div
      class="control"
      :class="{'control--is-checkbox': isCheckbox}"
    >
      <slot
        class="input__field"
        :validator="preferredValidator"
      />
    </div>
    <transition name="fade-error">
      <div
        v-if="hasErrors"
        class="error"
      >
        <div
          v-for="error in activeErrorMessages"
          :key="error"
        >
          <small>{{ error }}</small>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'

export default {
  mixins: [singleErrorExtractorMixin],
  props: {
    isCheckbox: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  flex-flow: column;

  .control {
    display: flex;
    flex-flow: column;

    &--is-checkbox {
      flex-flow: row;
    }
  }

  &__label {
    color: $blue;
    margin-bottom: 0.5rem;

    &--is-checkbox {
      margin-bottom: 0;
    }
  }

  &__field {
    display: flex;
    flex-flow: column;
    background-color: $beige;
    padding: 1rem;
    border-radius: 3px;
  }

  .error {
    color: red;
  }
}

.hasError input,
.hasError textarea,
.hasError .checkmark {
  outline-style: auto;
  outline-color: rgba(red, 0.4);
  outline-offset: 2px;
}
</style>
