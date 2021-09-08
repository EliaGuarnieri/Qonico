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
        <transition name="slide-fade-right">
          <span
            v-if="submit.loading"
            class="loader"
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
              />
            </svg>
          </span>
        </transition>
        <TheButton
          type="submit"
          :disabled="submit.loading"
        >
          Invia
        </TheButton>
      </div>
      <transition name="fade-error">
        <Alert
          v-if="submit.loaded"
          :message="submit.message"
          :state="submit.state"
        />
      </transition>
    </form>
  </formwrapper>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { templates } from 'vuelidate-error-extractor'
import TheButton from 'elements/TheButton'
import InputName from '~/components/elements/InputName.vue'
import InputEmail from '~/components/elements/InputEmail.vue'
import InputMessaggio from '~/components/elements/InputMessaggio.vue'
import CheckBox from '~/components/elements/CheckBox.vue'
import Alert from '~/components/Alert.vue'

export default {
  components: {
    FormWrapper: templates.FormWrapper,
    InputName,
    InputEmail,
    InputMessaggio,
    CheckBox,
    Alert,
    TheButton
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
    },
    submit: {
      message: '',
      loading: false,
      loaded: false,
      state: ''
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
      this.submit.loaded = false
      this.submit.loading = true

      this.$v.form.$touch()
      if (this.$v.form.$pending || this.$v.form.$error) {
        this.submit.loading = false
        this.submit.loaded = true
        this.submit.state = 'error'
        this.submit.message = 'Oh no! 😱 Sembra che tu non abbia compilato tutti i campi!\r\nProva a correggere gli errori e ritenta.'
        return
      }

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
      }).then(() => {
        this.submit.loading = false
        this.submit.loaded = true
        this.submit.state = 'success'
        this.submit.message = 'Grazie per averci contattato!\r\nPresto avrai nostre notizie 😎'
        // eslint-disable-next-line no-console
        console.log('form submitted')
      })
        .catch((error) => {
          this.submit.loading = false
          this.submit.loaded = true
          this.submit.state = 'error'
          this.submit.message = 'Oh no! 😱 Qualcosa è andato storto.\r\nTi va di riprovare?'
          // eslint-disable-next-line no-console
          console.error(error)
        })
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
    align-items: center;
  }
}
.button[disabled="disabled"]:hover {
  cursor: wait;
}
</style>
