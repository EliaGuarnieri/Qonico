<template>
  <div class="contatti row">
    <div class="contatti__direct">
      <p class="contatti__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos expedita quae, dolore voluptas incidunt omnis quasi autem rem vel nobis accusamus ea quia molestiae a obcaecati quibusdam dolores necessitatibus.
      </p>
      <address>
        <a
          href="tel:+393469585761"
          class="contatti__phone"
        >
          <TextWithIcon pre="call">
            +39 346 958 5761
          </TextWithIcon>
        </a>
        <SocialList />
      </address>
    </div>
    <div class="contatti__form">
      <TheForm name="contatti-landing-page" />
    </div>
  </div>
</template>

<script>
import SocialList from 'elements/SocialList'
import TheForm from 'components/TheForm'
import TextWithIcon from 'components/TextWithIcon'

export default {
  components: { SocialList, TheForm, TextWithIcon }
}
</script>

<style lang="scss" scoped>
.contatti {
  flex-direction: column;

  @include for-tablet {
    flex-direction: row;

    & > * {
      width: calc(50% - #{$gutter});
    }
  }

  &__text,
  &__phone {
    margin-bottom: 1.618rem;
  }

  &__form {
    margin-top: $gutter;

    @include for-tablet {
      margin-top: 0;
    }
  }
}
</style>
