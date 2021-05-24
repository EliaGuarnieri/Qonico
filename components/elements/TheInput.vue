<template>
  <div class="input">
    <label
      v-if="type !== 'checkbox'"
      class="input__label"
      :for="inputName"
    ><strong>{{ label }}</strong></label>

    <textarea
      v-if="type === 'textarea'"
      :id="inputName"
      class="input__field"
      :name="inputName"
      :placeholder="placeholder"
      rows="4"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />

    <input
      v-else
      :id="inputName"
      class="input__field"
      :type="type"
      :name="inputName"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  computed: {
    inputName () {
      return this.label.split(' ').join('-')
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-flow: column;

  &__label {
    color: $blue;
    margin-bottom: 0.5rem;
  }

  &__field {
    background-color: $beige;
    padding: 1em;
    border-radius: 3px;
  }
}
</style>
