<template>
  <FormGroup
    name="messaggio"
    label="Messaggio"
    :messages="errorMessages"
  >
    <textarea
      v-model="messaggio"
      slot-scope="{ validator }"
      name="Messaggio"
      class="input__field"
      type="text"
      rows="4"
      placeholder="Ciao! Avrei bisogno di..."
      @input="validator.$reset()"
    />
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
  data: () => ({
    errorMessages: {
      required: 'Ops, sembra che tu non abbia inserito un {attribute}. Non hai proprio nulla da dirci? 🙁'
    }
  }),
  computed: {
    messaggio: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
