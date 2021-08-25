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
        <button
          class="button"
          type="submit"
          :disabled="submit.loading"
          :class="{
            success: submit.success,
            error: submit.error
          }"
        >
          <span class="text">Invia</span>
          <transition name="slide-fade-right">
            <span
              v-if="!submit.loading"
              class="arrow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 100"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                    fill="#fff"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" />
                  </marker>
                </defs>
                <line
                  x1="0"
                  y1="50"
                  x2="250"
                  y2="50"
                  stroke="#fff"
                  stroke-width="10"
                  marker-end="url(#arrowhead)"
                />
              </svg>
            </span>
          </transition>
        </button>
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
    Alert
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
.button {
  position: relative;
  display: flex;
  align-items: center;
  background-color: $blue;
  color: $white;
  border-radius: 3px;
  max-width: 118px;
  transition: max-width 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: $blue-dark;
  }

  &[disabled="disabled"] {
    max-width: 83px;

    &:hover {
      background-color: $blue;
      cursor: wait;
    }
  }

  .arrow {
    position: relative;
    margin-left: 1rem;
    width: 25px;
    height: 17px;
    line-height: 0.7;
  }
}

.loader {
  position: relative;
  margin-right: 1.8rem;
  width: 20px;
  height: 20px;

  svg {
    inset: 0;
    position: absolute;
    animation: 2s linear infinite svg-animation;
    max-width: 100px;
  }

  circle {
    animation: 1.4s ease-in-out infinite both circle-animation;
    display: block;
    fill: transparent;
    stroke: $black;
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
    stroke-width: 10px;
    transform-origin: 50% 50%;
  }
}

@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
