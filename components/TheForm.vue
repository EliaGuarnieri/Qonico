<template>
  <FormWrapper :validator="$v.form">
    <form
      class="form"
      :name="name"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      novalidate
      @submit.prevent="handleSubmit"
    >
      <input
        type="hidden"
        name="form-name"
        :value="name"
      >
      <InputName
        v-model="form.nome"
        class="form__content"
      />
      <InputEmail
        v-model="form.email"
        class="form__content"
      />
      <InputMessaggio
        v-model="form.messaggio"
        class="form__content"
      />
      <CheckBox v-model="form.privacy" />

      <div class="form__footer">
        <button
          class="button"
          type="submit"
        >
          Invia
        </button>
      </div>
    </form>
  </formwrapper>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { templates } from 'vuelidate-error-extractor'
import InputName from '~/components/elements/InputName.vue'
import InputEmail from '~/components/elements/InputEmail.vue'
import InputMessaggio from '~/components/elements/InputMessaggio.vue'
import CheckBox from '~/components/elements/CheckBox.vue'

export default {
  components: {
    FormWrapper: templates.FormWrapper,
    InputName,
    InputEmail,
    InputMessaggio,
    CheckBox
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    form: {
      nome: '',
      email: '',
      messaggio: '',
      privacy: false
    }
  }),
  validations: {
    form: {
      nome: { required },
      email: { required, email },
      messaggio: { required },
      privacy: { privacy: sameAs(() => true) }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () {
      this.$v.form.$touch()
      if (this.$v.form.$pending || this.$v.form.$error) { return }

      const formData = {
        Nome: this.form.nome,
        Email: this.form.email,
        Messaggio: this.form.messaggio
      }
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': this.name,
          ...formData
        })
        // eslint-disable-next-line no-console
      }).then(() => console.log('form submitted'))

      // eslint-disable-next-line no-console
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-row-gap: 1.8rem;
  align-self: center;

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
.button {
  background-color: $blue;
  color: $white;
  border-radius: 3px;

  &:hover {
    background-color: $blue-dark;
  }
}
</style>
