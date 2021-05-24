<template>
  <section class="section">
    <div class="contatti container row">
      <div class="contatti__direct">
        <div class="contatti__triangle" />
        <h2 class="title contatti__title">
          Contattaci
        </h2>
        P +39 346 9585761
        <SocialList />
      </div>
      <div class="contatti__form">
        <TheForm
          name="contatti-landing-page"
          :form="form"
        >
          <TheInput
            v-model="form.nome"
            type="text"
            label="Nome"
            placeholder="Mario Rossi"
          />
          <TheInput
            v-model="form.email"
            type="text"
            label="Email"
            placeholder="mario.rossi@gmail.com"
          />
          <TheInput
            v-model="form.messaggio"
            type="textarea"
            label="Messaggio"
            placeholder="Ciao! Avrei bisogno di..."
          />
          <CheckBox v-model="form.privacy">
            <small>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              Dichiaro di aver letto l'<NuxtLink to="/">informativa sulla privacy</NuxtLink> e acconsento al trattamento dei miei dati.
            </small>
          </CheckBox>
        </theform>
      </div>
    </div>
  </section>
</template>

<script>
import SocialList from 'elements/SocialList'
import TheForm from 'components/TheForm'
import TheInput from 'elements/TheInput'
import CheckBox from 'elements/CheckBox'

export default {
  components: { SocialList, TheForm, TheInput, CheckBox },
  data: () => ({
    form: {
      nome: '',
      email: '',
      messaggio: '',
      privacy: false
    }
  })
}
</script>

<style lang="scss" scoped>
.contatti {
  flex-direction: column;

  @include for-tablet {
    flex-direction: row;
    align-items: center;

    & > * {
      width: calc(50% - calc(#{$gutter} / 2));
    }
  }

  &__triangle {
    display: inline-block;
    position: relative;
    left: 5%;
    bottom: 2.8rem;
    width: 10rem;
    height: 3 / 2 * 5rem;
    background-color: $blue;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotateZ(35deg);
  }

  &__form {
    margin-top: $gutter;

    @include for-tablet {
      margin-top: 0;
    }
  }
}
</style>
