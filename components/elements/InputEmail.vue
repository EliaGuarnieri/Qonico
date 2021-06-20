<template>
  <FormGroup
    name="email"
    label="Email"
    :messages="errorMessages"
  >
    <input
      v-model="email"
      slot-scope="{ validator }"
      name="Email"
      type="email"
      class="input__field"
      placeholder="mario.rossi@gmail.com"
      @input="validator.$reset()"
    >
  </FormGroup>
</template>

<script>
import FormGroup from '~/components/elements/FormGroup.vue'

export default {
  components: { FormGroup },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    email: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    errorMessages () {
      return {
        required: 'Ops, sembra che tu non abbia inserito il tuo indirizzo {attribute}. Non avere paura, lo useremo solo per risponderti 😉',
        email: `"${this.value}" sembra sbagliato. Controlla di aver inserito il tuo indirizzo email correttamente`
      }
    }
  }
}
</script>
