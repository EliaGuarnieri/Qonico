<template>
  <div class="checkbox">
    <label class="wrapper">
      <input
        class="checkbox"
        type="checkbox"
        :checked="isChecked"
        :value="value"
        @change="updateInput"
      >
      <span class="checkmark" />
      <!-- eslint-disable-next-line vue/no-v-html -->

    </label>
    <slot />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: false
    },
    trueValue: {
      type: Boolean,
      default: true
    },
    falseValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked () {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput (event) {
      const isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: flex-start;
}
.wrapper {
  user-select: none;
  position: relative;
  display: flex;
  margin-top: 0.4rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
}

.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  font-size: 2.4rem;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  width: 1em;
  height: 1em;
  background: transparent;
  border: 2px solid $beige;
  border-radius: 3px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
}

.wrapper:hover input ~ .checkmark {
  background-color: $beige-light;
}

.wrapper input:checked ~ .checkmark {
  border: 0.5em solid $beige;
  animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
}

.wrapper input:checked ~ .checkmark:before {
  content: "";
  position: absolute;
  font-size: 3.6rem;
  top: 1.4rem;
  left: 0.3rem;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transform: rotate(45deg);
  transform-origin: 0% 100%;
  animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
}

@keyframes shrink-bounce {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes checkbox-check {
  0% {
    width: 0;
    height: 0;
    border-color: $white;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  33% {
    width: 0.2em;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  100% {
    width: 0.2em;
    height: 0.5em;
    border-color: $white;
    transform: translate3d(0, -0.5em, 0) rotate(45deg);
  }
}
</style>
