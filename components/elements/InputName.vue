<template>
  <FormGroup
    name="nome"
    label="Nome"
    :messages="errorMessages"
  >
    <input
      v-model="nome"
      slot-scope="{ validator }"
      name="Nome"
      type="text"
      class="input__field"
      placeholder="Mario Rossi"
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
  data: () => ({
    errorMessages: {
      required: 'Ops, sembra che tu non abbia inserito il tuo {attribute}. Non vediamo l\'ora di conoscerti! 💪'
    }
  }),
  computed: {
    nome: {
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
